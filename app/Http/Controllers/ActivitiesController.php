<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\PlanTable;
use App\PlanSeat;
use App\Activity;
use DB;
use View;

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
        $newActivity = $request->all();
        $activity = Activity::create([
            'slug' => 'abc',
            'title' => $request->title,
            'text' => $request->text,
            'content' => $request->content,
            'subtitle' => $request->subtitle
        ]);

        return response()->json([
            'success' => true,
            'request' => $request,
            'newActivity' => $newActivity,
            'activity' => $activity
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