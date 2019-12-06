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

    public function getActivity(Request $request, $id)
    {
        $activity = Activity::find($id);
        $activity['sponsors'] = $activity->sponsors;

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 200);
    }

    protected function createActivity(Request $request) {
        $newActivity = json_decode($request->form);

        $activity = new Activity;

        $activity->title = $newActivity->title;
        $activity->subtitle = $newActivity->subtitle;
        $activity->slug = str_slug($newActivity->title);
        $activity->content = $newActivity->content;
        $activity->is_published = false;
        if ($newActivity->start_date) {
            $activity->start_date = date_create_from_format('Y-m-d H:i:s', $newActivity->start_date);
        }
        if ($newActivity->end_date) {
            $activity->end_date = date_create_from_format('Y-m-d H:i:s', $newActivity->end_date);
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
        if ($newActivity->sponsors) {
            foreach ($newActivity->sponsors as $sponsor) {
                $activity->sponsors()->attach($sponsor->id);
            }
        }
        
        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 201);
    }

    protected function updateActivity(Request $request, $id) {

        $updatedActivity = json_decode($request->form);
        $activity = Activity::find($id);

        $start_date = null;
        if ($updatedActivity->start_date) {
            $start_date = date_create_from_format('Y-m-d H:i:s', $updatedActivity->start_date);
        }

        $end_date = null;
        if ($updatedActivity->end_date) {
            $end_date = date_create_from_format('Y-m-d H:i:s', $updatedActivity->end_date);
        }

        // Upload new image if present
        if (File::exists($request->new_image)) {
            // Delete old image
            $old_image = $activity->image;
            if (Storage::disk('uploads')->exists($activity->image)) {
                Storage::disk('uploads')->delete($activity->image);
            }

            // Upload new image
            $file = Storage::disk('uploads')->put('activities', $request->new_image);
            $updatedActivity->image = $file;
        }

        $activity->updateOrInsert(
            ['id' => $id],
            [
                'title' => $updatedActivity->title,
                'subtitle' => $updatedActivity->subtitle,
                'slug' => str_slug($updatedActivity->title),
                'content' => $updatedActivity->content,
                'image' => $updatedActivity->image,
                'start_date' => $start_date,
                'end_date' => $end_date
            ]
        );

        // Update sponsors relationships
        $sponsorIdArray = [];
        foreach($updatedActivity->sponsors as $sponsor) {
            array_push($sponsorIdArray, $sponsor->id);
        }
        $activity->sponsors()->sync($sponsorIdArray);

        return response()->json([
            'success' => true,
            'activity' => $activity,
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
            'activity' => $activity
        ], 204);
    }
}