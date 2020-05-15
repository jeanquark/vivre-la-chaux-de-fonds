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
        $allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png'];

        // $diskFiles = Storage::disk('images')->allfiles('pages');
        // $diskFiles = Storage::disk('images')->allfiles();
        $rootDirectories = Storage::disk('images')->directories();
        $rootFiles = Storage::disk('images')->files();
        foreach ($rootFiles as $file) {
            $array = array();
            $fileType = Storage::disk('images')->mimeType($file);

            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                array_push($array, Storage::disk('images')->size($file));
                array_push($array, Storage::disk('images')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'rootDirectories' => $rootDirectories,
            'rootFiles' => $rootFiles,
            'files' => $files
        ], 200);
    }

    public function getImagesByFolder(Request $request)
    {
        $folder = $request->folder;
        $files = array();
        $allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png'];

        $folders = Storage::disk('images')->directories($folder);
        $folderFiles = Storage::disk('images')->files($folder);
        // $path = array();
        foreach ($folderFiles as $file) {
            $array = array();
            $fileType = Storage::disk('images')->mimeType($file);

            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                array_push($array, Storage::disk('images')->size($file));
                array_push($array, Storage::disk('images')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'folder' => $folder,
            'folders' => $folders,
            'files' => $files,
            // 'folderDirectories' => $folderDirectories,
        ], 200);
    }

    public function getImages_ORIGINAL()
    {
        $files = array();
        $allowedFileTypes = ['image/jpeg', 'image/gif', 'image/png'];

        // $diskFiles = Storage::disk('images')->allfiles('pages');
        $diskFiles = Storage::disk('images')->allfiles();
        $directories = Storage::disk('images')->directories();
        $rootDirectoryFiles = Storage::disk('images')->files();
        foreach ($diskFiles as $file) {
            $array = array();
            $fileType = Storage::disk('images')->mimeType($file);

            if (in_array($fileType, $allowedFileTypes)) {
                array_push($array, $file);
                array_push($array, $fileType);
                array_push($array, Storage::disk('images')->size($file));
                array_push($array, Storage::disk('images')->lastModified($file));
                array_push($files, $array);
            }
        }

        return response()->json([
            'success' => true,
            'files' => $files,
            'diskFiles' => $diskFiles,
            'directories' => $directories,
            'rootDirectoryFiles' => $rootDirectoryFiles
        ], 200);
    }


    public function getDocuments()
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


    public function createFolder(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|max:32',
        ]);

        Storage::disk($request->fileType)->makeDirectory($request->path . '/' . $request->name);

        return response()->json([
            'success' => true,
            // 'request' => $request,
            // 'request->name' => $request->name,
            // 'request->path' => $request->path,
            // 'request->typeType' => $request->fileType
        ], 200);
    }


    public function deleteFolder(Request $request)
    {
        Storage::disk($request->fileType)->deleteDirectory($request->name);

        return response()->json([
            'success' => true,
            // 'request' => $request,
            // 'request->name' => $request->name,
            // 'request->fileType' => $request->fileType
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

    public function deleteImage(Request $request)
    {
        // Storage::disk($request->fileType)->delete($request->fileName);

        return response()->json([
            'success' => true,
            'request' => $request,
            'request->fileType' => $request->fileType,
            'request->fileName' => $request->fileName
        ])
    }


    public function uploadDocument(Request $request)
    {
        $validatedData = $request->validate([
            'document' => 'required|file',
        ]);

        // Upload file
        if (File::exists($request->document)) {
            $fileName = $request->document->getClientOriginalName(); //Get File Name
            // $uploadedFile = Storage::disk('uploads')->putFileAs('pages', $request->document, $fileName);
            $uploadedFile = Storage::disk('documents')->putFileAs('', $request->document, $fileName);
            // $uploadedFile = Storage::disk('documents')->put($request->document, $fileName);
        }

        $newFileArray = array();
        // array_push($newFileArray, $uploadedFile);
        // array_push($newFileArray, Storage::disk('documents')->mimeType($uploadedFile));
        // array_push($newFileArray, Storage::disk('documents')->size($uploadedFile));
        // array_push($newFileArray, Storage::disk('documents')->lastModified($uploadedFile));


        return response()->json([
            'success' => true,
            'request' => $request,
            'request->image' => $request->image,
            'request->document' => $request->document,
            'fileName' => $fileName,
            // 'uploadedFile' => $uploadedFile,
            // 'newFile' => $newFile,
            'newFileArray' => $newFileArray
        ], 200);
    }

    
}