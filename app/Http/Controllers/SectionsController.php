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
        $sections = Section::with('page:id,name,slug,id')->get();
        // $sections = Section::with('sections')->get();
        // $sections = Section::all();

        return response()->json($sections, 200);
    }

    public function getSectionById(Request $request, $id)
    {
        $section = Section::with('page:id,name,slug,id')->find($id);
        // $section['sections'] = $section->sections;

        // $section = Section::where('id', '=', $id)->with('sections')->first();

        return response()->json([
            'success' => true,
            'section' => $section,
        ], 200);
    }

    public function getSectionBySlug(Request $request, $slug)
    {
        $section = Section::where('slug', '=', $slug)->with('page:id,name,slug,id')->first();
        // $section['sections'] = $section->sections;

        return response()->json([
            'success' => true,
            'section' => $section,
        ], 200);
    }

    public function getSectionsByPageId (Request $request, $pageId)
    {
        $sections = Section::where('page_id', '=', $pageId)->get();

        return response()->json([
            'success' => true,
        ], 200);
    }

    protected function createSection(Request $request) {

        $validatedData = $request->validate([
            'name' => 'required|unique:sections',
        ]);
        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'request->name' => $request->name,
        //     'request->content' => $request->content
        // ], 201);

        $section = new Section;

        $section->name = $request->name;
        $section->slug = str_slug($request->name);
        $section->content = $request->content;

        // Upload image if present
        if (File::exists($request->image)) {
            $image = Storage::disk('images')->put('sections', $request->image);
            $section->image = $image;
        }

        $section->save();

        $newSection = Section::with('page:id,name,slug,id')->find($section->id);

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

        $validatedData = $request->validate([
            // 'name' => 'required|unique:sections',
            // 'name' => 'required|unique:sections' . $id,
            'name' => ['required', Rule::unique('sections')->ignore($id)],
        ]);

        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'id' => $id,
        //     'request->name' => $request->name,
        //     'request->content' => $request->content
        // ], 201);

        $section = Section::find($id);

        $section->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'content' => $request->content,
                'is_published' => $request->is_published,
                'updated_at' => \Carbon\Carbon::now()
            ]
        );

        $updatedSection = Section::find($id);

        return response()->json([
            'success' => true,
            // 'section' => $section,
            'updatedSection' => $updatedSection,
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