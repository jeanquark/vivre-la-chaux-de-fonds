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
        $files = array();
        $allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml'];

        $diskFiles = Storage::disk('uploads')->allfiles('pages');
        foreach ($diskFiles as $file) {
            $array = array();
            $fileType = Storage::disk('uploads')->mimeType($file);
            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                array_push($array, Storage::disk('uploads')->size($file));
                array_push($array, Storage::disk('uploads')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'files' => $files,
            // 'size' => $size,
            // 'lastModified' => $lastModified,
            // 'abc' => $abc
        ], 200);
    }

    
}