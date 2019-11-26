<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Table;
use DB;

class TablesController extends Controller
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

    public function getTables()
    {
        $tables = Table::all();

        // return response()->json([
        //     'tables' => $tables
        // ], 200);
        return response()->json($tables, 200);
    }

    public function getTableById($id)
    {
        $table = Table::where('svg_model', '=', $model)->firstOrFail();

        // return response()->json([
        //     'tables' => $tables
        // ], 200);
        return response()->json($table, 200);
    }
}