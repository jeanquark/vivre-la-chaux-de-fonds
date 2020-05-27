<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Section;
use File;
use App\Http\Requests\StoreSection;
use App\Http\Requests\UpdateSection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;


class SectionsController extends Controller
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


    public function getSections()
    {
        $sections = Section::with('pages')->get();
        // $sections = Section::with('pages:page_id AS id,slug,name')->get();

        return response()->json($sections, 200);
    }

    public function getSectionById(Request $request, $id)
    {
        $section = Section::with('pages')->find($id);
        // $section = Section::with('pages:page_id AS id,slug,name')->find($id);

        return response()->json([
            'success' => true,
            'section' => $section,
        ], 200);
    }

    public function getSectionBySlug(Request $request, $slug)
    {
        $section = Section::where('slug', '=', $slug)->with('sections')->first();
        // $section = Section::where('slug', '=', $slug)->with('pages:page_id AS id,slug,name')->first();

        return response()->json([
            'success' => true,
            'section' => $section,
        ], 200);
    }

    public function getSectionsByPageId (Request $request, $pageId)
    {
        $sections = Section::where('page_id', '=', $pageId)->with('pages')->get();
        // $sections = Section::where('page_id', '=', $pageId)->with('pages:page_id AS id,slug,name')->get();

        return response()->json([
            'success' => true,
        ], 200);
    }

    protected function createSection(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|unique:sections',
            'image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300,min_height=200'],
        ]);

        $section = new Section;

        $section->name = $request->name;
        $section->slug = str_slug($request->name);
        $section->content = $request->content;

        // Upload image if present
        if (File::exists($request->image)) {
            $imageName = $request->image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('sections', $request->image, $imageName);
            $activity->image = $file;
        }

        $section->save();

        $newSection = Section::with('pages')->find($section->id);
        // $newSection = Section::with('pages:page_id AS id,slug,name')->find($section->id);

        return response()->json([
            'success' => true,
            'request' => $request,
            'request->name' => $request->name,
            'request->image' => $request->image,
            'section' => $section,
            'newSection' => $newSection
        ], 201);
    }

    protected function updateSection(Request $request, $id) {

        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'request->pages' => $request->pages,
        //     'request->image' => $request->image,
        //     'request->new_image' => $request->new_image
        // ], 201);

        $validatedData = $request->validate([
            'name' => ['required', Rule::unique('sections')->ignore($id)],
            'new_image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300,min_height=200'],
        ]);

        $section = Section::find($id);
        
        // Upload new image if present
        // $file;
        if (File::exists($request->new_image)) {
            // Delete old image
            // $old_image = $request->image;
            if (Storage::disk('images')->exists($request->image)) {
                Storage::disk('images')->delete($request->image);
            }

            // Upload new image
            $imageName = $request->new_image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('sections', $request->new_image, $imageName);
            $request->image = $file;
        }

        $section->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'image' => $request->image,
                'content' => $request->content,
                'updated_at' => \Carbon\Carbon::now()
            ]
        );

        $section->pages()->sync($request->pages);

        $updatedSection = Section::with('pages')->find($id);
        // $updatedSection = Section::with('pages:page_id AS id,slug,name')->find($id);

        return response()->json([
            'success' => true,
            'updatedSection' => $updatedSection,
            'file' => $file
        ], 201);
    }

    protected function deleteSection(Request $request, $id) {
        // $section = Section::where('slug', '=', $slug)->first();
        $section = Section::find($id);

        // Delete image if exists
        if (Storage::disk('images')->exists('sections', $section->image)) {
            Storage::disk('images')->delete('sections', $section->image);
        }

        $section->delete();

        return response()->json([
            'success' => true,
            'section' => $section
        ], 204);
    }
}