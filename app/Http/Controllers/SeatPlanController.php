<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
// use App\PlanTable;
use App\PlanSeat;
use DB;
use View;

class SeatPlanController extends Controller
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

    public function getSeats()
    {
        $seats = PlanSeat::all();

        return response()->json($seats, 200);
    }


    public function getSeatsByTableId($tableId)
    {
        $seats = PlanSeat::where('plan_table_id', '=', $tableId)->get();

        return response()->json($seats, 200);
    }


    public function getUserSeats($userId)
    {
        $seats = PlanSeat::where('user_id', '=', $userId)->get();

        return response()->json($seats, 200);
    }

}