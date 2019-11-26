<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\PlanTable;
use App\PlanSeat;
use DB;
use View;

class TablePlanController extends Controller
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

    // public function index()
    // {
    //     $tables = PlanTable::all();
    //     // $seats = Table::has('seats')->get();
    //     $seats = PlanTable::find(3)->seats;

    //     return response()->json([
    //         'tables' => $tables,
    //         'seats' => $seats
    //     ], 200);
    // }

    public function getPlanTables()
    {
        $tables = PlanTable::all();

        return response()->json($tables, 200);
    }

    // public function show($id)
    // {
    //     $table = PlanTable::where('svg_id', '=', $id)->first();
    //     // $table = Table::all();
    //     $seats = PlanTable::find($table->id)->seats;
    //     // $seats = 'abc';

    //     return response()->json([
    //         'table' => $table,
    //         'seats' => $seats
    //     ], 200);

    //     // return response()->json($table, $seats, 200);
    // }

    public function getTableBySvgId($svgId) {
        $table = PlanTable::where('svg_id', '=', $svgId)->first();
        $seats = $table->seats;

        // return response()->json($table, 200);

        return response()->json([
            'table' => $table,
            'seats' => $seats
        ], 200);
    }


    public function addTable(Request $request) {
        // $filename = 'test.txt';
        // $newSvgFile = fopen('images/svg/tables_plan.svg', 'w') or die('Unable to open file!');
        // $newSVG = $request->newSVG;
        // fwrite($newSvgFile, $newSVG);
        // fclose($newSvgFile);

        file_put_contents('images/svg/tables/table_' . $request->tableId . '.svg', $request->newSVG);

        return response()->json([
            'abc' => $request->abc
        ], 200);
    }

    /**
     * Get the response for a successful password reset link.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  string  $response
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function update(Request $request)
    {
        // 1) Save new tables SVG
        if ($request->newTablesSVGArray) {
            for ($i = 0; $i < count($request->newTablesSVGArray); $i++) {
                file_put_contents('images/svg/tables/table_' . $request->newTablesArray[$i]['svg_id'] . '.svg', $request->newTablesSVGArray[$i]);
            }
        }
        

        // 2) Save tables and seat in database
        if ($request->tablesArray) {
            $tablesArray = $request->tablesArray;
            for ($i = 0; $i < count($tablesArray); $i++) {
                DB::table('plan_tables')
                    ->updateOrInsert(
                        [
                            'svg_id' => $tablesArray[$i]['svg_id']
                        ],
                        [
                            'svg_type' => $tablesArray[$i]['svg_type'],
                            'svg_model' => $tablesArray[$i]['svg_model'],
                            'total_seats' => $tablesArray[$i]['total_seats'],
                            'r' => $tablesArray[$i]['r'],
                            'cx' => $tablesArray[$i]['cx'],
                            'cy' => $tablesArray[$i]['cy'],
                            'd' => $tablesArray[$i]['d']
                        ]
                    );

                $table = DB::table('plan_tables')->where('svg_id', '=', $tablesArray[$i]['svg_id'])->first();
                if ($table->id) {
                    for ($j = 1; $j <= $tablesArray[$i]['total_seats']; $j++) {
                        DB::table('plan_seats')
                            ->updateOrInsert(
                                [
                                    'plan_table_id' => $table->id,
                                    'svg_seat_id' => 'table_' . $tablesArray[$i]['svg_id'] . '_seat_' . $j
                                ]
                            );
                    }
                }
            }
        }

        // 3) Save new Plan
        if ($request->newPlanSVG) {
            $newSvgFile = fopen('images/svg/tables_plan.svg', 'w') or die('Unable to open file!');
            $newPlanSVG = $request->newPlanSVG;
            fwrite($newSvgFile, $newPlanSVG);
            fclose($newSvgFile);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Table updated successfully.',
            'tablesArray' => $request->tablesArray,
            'newTablesArray' => $request->newTablesArray,
            'newPlanSVG' => $request->newPlanSVG,
            'newTablesSVGArray' => $request->newTablesSVGArray,
        ], 200);
    }

    protected function delete($svg_id) {

        $table = PlanTable::where('svg_id', '=', $svg_id)->first();

        $reservedSeat = false;
        foreach($table->seats as $seat) {
            if ($seat->is_reserved) {
                $reservedSeat = true;
            }
        }

        // Can only delete selected table if none of its seats is reserved
        if (!$reservedSeat) {
            // 1) Delete table
            $table->delete();
            // 2) Delete all seats related to the table
            foreach($table->seats as $seat) {
                $seat->delete();
            }
        } else {
            return response()->json('There is at least one reserved seat.', 500);
            // return response()->json([
            //     'status' => 'error',
            //     'message' => 'There is at least one reserved seat.'
            // ], 500);
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Table deleted successfully.'
        ], 200);
    }
}