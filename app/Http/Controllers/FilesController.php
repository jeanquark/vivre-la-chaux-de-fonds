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


    public function getImages()
    {
        $files = array();
        $allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml'];

        $diskFiles = Storage::disk('uploads')->allfiles('pages');
        foreach ($diskFiles as $file) {
            $array = array();
            $fileType = Storage::disk('uploads')->mimeType($file);

            // list($width, $height) = getimagesize("Full path of the image"); 
            // $fileDimensions = Storage::disk('uploads')->getimagesize($file);
            // $fileDimensions = getimagesize('/images/' . $file);
            // $fileDimensions = Storage::disk('uploads')->url($file);
            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                // array_push($array, $fileDimensions);
                array_push($array, Storage::disk('uploads')->size($file));
                array_push($array, Storage::disk('uploads')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'files' => $files,
        ], 200);
    }


    public function getFiles()
    {
        $files = array();
        $allowedFileTypes = ['application/pdf'];

        $diskFiles = Storage::disk('documents')->allFiles();
        foreach ($diskFiles as $file) {
            $array = array();
            $fileType = Storage::disk('documents')->mimeType($file);
            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                array_push($array, Storage::disk('documents')->size($file));
                array_push($array, Storage::disk('documents')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'diskFiles' => $diskFiles,
            'files' => $files,
        ], 200);
    }


    public function uploadImage(Request $request)
    {
        // $validatedData = $request->validate([
        //     'image' => 'required|image',
        // ]);

        // Upload image
        if (File::exists($request->image)) {
            $imageName = $request->image->getClientOriginalName(); //Get Image Name
            $uploadedFile = Storage::disk('uploads')->putFileAs('pages', $request->image, $imageName);

            // $file = Storage::disk('uploads')->put('pages', $request->image);
        }

        $newImageArray = array();
        array_push($newImageArray, $uploadedFile);
        array_push($newImageArray, Storage::disk('uploads')->mimeType($uploadedFile));
        array_push($newImageArray, Storage::disk('uploads')->size($uploadedFile));
        array_push($newImageArray, Storage::disk('uploads')->lastModified($uploadedFile));


        return response()->json([
            'success' => true,
            'request' => $request,
            'request->image' => $request->image,
            'request->file' => $request->file,
            'imageName' => $imageName,
            'uploadedFile' => $uploadedFile,
            // 'newFile' => $newFile,
            'newImageArray' => $newImageArray
        ], 200);
    }


    public function uploadFile(Request $request)
    {
        $validatedData = $request->validate([
            'file' => 'required|file',
        ]);

        // Upload file
        if (File::exists($request->file)) {
            $fileName = $request->file->getClientOriginalName(); //Get File Name
            $uploadedFile = Storage::disk('documents')->put($request->file, $fileName);
        }

        $newFileArray = array();
        array_push($newFileArray, $uploadedFile);
        array_push($newFileArray, Storage::disk('uploads')->mimeType($uploadedFile));
        array_push($newFileArray, Storage::disk('uploads')->size($uploadedFile));
        array_push($newFileArray, Storage::disk('uploads')->lastModified($uploadedFile));


        return response()->json([
            'success' => true,
            'request' => $request,
            'request->image' => $request->image,
            'request->file' => $request->file,
            'imageName' => $imageName,
            'uploadedFile' => $uploadedFile,
            // 'newFile' => $newFile,
            'newFileArray' => $newFileArray
        ], 200);
    }

    
}