<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Activity;
use File;
use App\Http\Requests\StoreActivity;
use App\Http\Requests\UpdateActivity;
use Illuminate\Support\Facades\Storage;


class ActivitiesController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('guest');
    }


    public function getActivities()
    {
        $activities = Activity::with('sponsors')->get();

        return response()->json($activities, 200);
    }

    public function getActivityById(Request $request, $id)
    {
        $activity = Activity::with('sponsors')->find($id);
        // $activity['sponsors'] = $activity->sponsors;

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 200);
    }

    public function getActivityBySlug(Request $request, $slug)
    {
        $activity = Activity::where('slug', '=', $slug)->with('sponsors')->first();
        // $activity['sponsors'] = $activity->sponsors;

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 200);
    }

    protected function createActivity(StoreActivity $request) {

        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'request->image' => $request->image,
        // ], 201);

        // $newActivity = json_decode($request->form);

        $activity = new Activity;

        $activity->name = $request->name;
        $activity->subtitle = $request->subtitle;
        $activity->slug = str_slug($request->name);
        $activity->content = $request->content;
        $activity->is_published = false;
        if ($request->start_date) {
            $activity->start_date = date_create_from_format('Y-m-d H:i:s', $request->start_date);
        }
        if ($request->end_date) {
            $activity->end_date = date_create_from_format('Y-m-d H:i:s', $request->end_date);
        }

        // Upload image if present
        if (File::exists($request->image)) {
            // $imageName = time().'.'. $request->image->getClientOriginalExtension();
            // $request->image->move(public_path('images/activities'), $imageName);
            // $activity->image = $imageName;

            $file = Storage::disk('uploads')->put('activities', $request->image);
            $activity->image = $file;

        }

        $activity->save();

        // Save sponsors relationships
        if ($request->sponsors) {
            foreach ($request->sponsors as $sponsor) {
                $activity->sponsors()->attach($sponsor);
            }
        }
        
        $newActivity = Activity::with('sponsors')->find($activity->id);

        return response()->json([
            'success' => true,
            'newActivity' => $newActivity,
            'request' => $request,
            'request->image' => $request->image,
            'request->sponsors' => $request->sponsors
        ], 201);
    }

    protected function updateActivity(Request $request, $id) {
        $activity = Activity::find($id);

        $start_date = null;
        if ($request->start_date) {
            $start_date = date_create_from_format('Y-m-d H:i:s', $request->start_date);
        }

        $end_date = null;
        if ($request->end_date) {
            $end_date = date_create_from_format('Y-m-d H:i:s', $request->end_date);
        }

        // Upload new image if present
        if (File::exists($request->new_image)) {
            // Delete old image
            $old_image = $request->image;
            if (Storage::disk('uploads')->exists($request->image)) {
                Storage::disk('uploads')->delete($request->image);
            }

            // Upload new image
            $file = Storage::disk('uploads')->put('activities', $request->new_image);
            $request->image = $file;
        }

        $activity->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'subtitle' => $request->subtitle,
                'content' => $request->content,
                'image' => $request->image,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'is_published' => $request->is_published,
                'is_on_frontpage' => $request->is_on_frontpage,
                'updated_at' => \Carbon\Carbon::now()
            ]
        );

        // Update sponsors relationships
        // $sponsorIdArray = [];
        // foreach($request->sponsors as $sponsorId) {
        //     array_push($sponsorIdArray, $sponsorId);
        // }
        // $activity->sponsors()->sync($sponsorIdArray);

        $activity->sponsors()->sync($request->sponsors);


        $updatedActivity = Activity::with('sponsors')->find($id);

        return response()->json([
            'success' => true,
            // 'activity' => $activity,
            'updatedActivity' => $updatedActivity,
            // 'request->sponsors' => $request->sponsors
        ], 201);
    }

    protected function deleteActivity(Request $request, $id) {
        $activity = Activity::find($id);

        // Delete image if it exists
        if (Storage::disk('uploads')->exists($activity->image)) {
            Storage::disk('uploads')->delete($activity->image);
        }

        $activity->delete();

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 204);
    }
}