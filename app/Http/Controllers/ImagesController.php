<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImagesController extends Controller
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
            'files' => $files,
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

    public function uploadImage(Request $request)
    {
        $validatedData = $request->validate([
            'image' => 'required|image',
        ]);

        // return response()->json([
        //     'success' => true,
        //     'request->image' => $request->image,
        //     'request->path' => $request->path
        // ], 200);
        $newImageArray = array();

        // Upload image
        if (File::exists($request->image)) {
            $imageName = $request->image->getClientOriginalName(); //Get Image Name
            // $uploadedFile = Storage::disk('images')->putFileAs('pages', $request->image, $imageName);
            $uploadedFile = Storage::disk('images')->putFileAs($request->path, $request->image, $imageName);

            // // $file = Storage::disk('uploads')->put('pages', $request->image);
            array_push($newImageArray, $uploadedFile);
            array_push($newImageArray, Storage::disk('images')->mimeType($uploadedFile));
            array_push($newImageArray, Storage::disk('images')->size($uploadedFile));
            array_push($newImageArray, Storage::disk('images')->lastModified($uploadedFile));
        }


        return response()->json([
            'success' => true,
            'request' => $request,
            'request->path' => $request->path,
            'request->image' => $request->image,
            // 'request->file' => $request->file,
            // 'imageName' => $imageName,
            // 'uploadedFile' => $uploadedFile,
            // 'newFile' => $newFile,
            'newImageArray' => $newImageArray,
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

    public function deleteImage(Request $request)
    {
        Storage::disk('images')->delete($request->fileName);

        return response()->json([
            'success' => true,
            'request' => $request,
            'request->fileType' => $request->fileType,
            'request->fileName' => $request->fileName,
        ], 200);
    }

    public function deleteFolder(Request $request)
    {
        Storage::disk('images')->deleteDirectory($request->folderName);

        return response()->json([
            'success' => true,
            // 'request' => $request,
            // 'request->name' => $request->name,
            // 'request->fileType' => $request->fileType
        ], 200);
    }

}
