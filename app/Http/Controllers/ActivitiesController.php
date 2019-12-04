<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\PlanTable;
use App\PlanSeat;
use App\Activity;
use DB;
use View;
use File;
use App\Http\Requests\StoreActivity;
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
        $activities = Activity::all();

        return response()->json($activities, 200);
    }

    public function getActivity(Request $request, $id)
    {
        // $activityId = $request->id;
        // $activity = Activity::where('id', '=', 9)->get();
        $activity = Activity::find($id);

        return response()->json([
            'success' => true,
            'id' => $id,
            'activity' => $activity, 
        ], 200);
    }

    protected function createActivity(Request $request) {
        // $newActivity = $request->all();

        $form = json_decode($request->form);

        $activity = new Activity;

        $activity->title = $form->title;
        $activity->subtitle = $form->subtitle;
        $activity->slug = str_slug($form->title);
        $activity->content = $form->content;
        $activity->is_published = false;
        if ($form->start_date) {
            $activity->start_date = date_create_from_format('Y-m-d H:i:s', $form->start_date);
        }
        if ($form->end_date) {
            $activity->end_date = date_create_from_format('Y-m-d H:i:s', $form->end_date);
        }

        // Upload image if present
        if (File::exists($request->image)) {
            $imageName = time().'.'. $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/activities'), $imageName);
            $activity->image = $imageName;
        }

        $activity->save();

        return response()->json([
            'success' => true,
            'message' => 'Activity added successfully',
            'activity' => $activity
        ], 201);
    }

    protected function updateActivity(Request $request, $id) {

        $updatedActivity = json_decode($request->form);
        // $updatedActivity = $request->form;
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

        return response()->json([
            'status' => 'OK',
            // 'request' => $request,
            // 'request->form' => $request->form,
            // 'id' => $id,
            // 'updatedActivity' => $updatedActivity,
            'activity' => $activity,
            // 'old_image' => $old_image,
            // 'file' => $file
        ], 201);
    }

    protected function deleteActivity(Request $request, $id) {
        $activity = Activity::find($id);

        // Delete image if it exists
        if (Storage::disk('uploads')->exists($activity->image)) {
            Storage::disk('uploads')->delete($activity->image);
        }

        // $activity->delete();

        return response()->json([
            'success' => true,
            'id' => $id,
            'activity' => $activity
        ], 204);
    }
}