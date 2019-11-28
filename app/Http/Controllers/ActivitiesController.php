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

    public function getActivity(Request $request)
    {
        $activityId = $request->id;
        $activity = Activity::where('id', '=', $activityId)->get();

        return response()->json($activity, 200);
    }

    protected function addActivity(Request $request) {
        // $newActivity = $request->all();

        $form = json_decode($request->form);
        $activity = Activity::create([
            'slug' => 'abc',
            'title' => $form->title,
            'text' => $form->text,
            'content' => $form->content,
            'subtitle' => $form->subtitle
        ]);

        // Upload image if present
        if (File::exists($request->image)) {
            $imageName = time().'.'. $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/activities'), $imageName);
        }

        return response()->json([
            'success' => true,
            'message' => 'Activity added successfully',
            'activity' => $activity
            // 'request' => $request,
            // 'abc' => $abc,
            // 'def' => $def,
            // 'ghi' => $ghi,
            // 'newActivity' => $newActivity,
            // 'imageName' => $imageName
        ], 201);
    }

    protected function updateActivity(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }

    protected function deleteActivity(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }
}