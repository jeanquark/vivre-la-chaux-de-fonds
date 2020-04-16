<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Activity;
use File;
use App\Http\Requests\StoreActivity;
use App\Http\Requests\UpdateActivity;
use Illuminate\Support\Facades\Storage;


class FilesController extends Controller
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


    public function get()
    {
        // $files = array();
        $files = Storage::disk('uploads')->allfiles('pages');

        return response()->json([
            'success' => true,
            'files' => $files,
        ], 200);
    }

    
}