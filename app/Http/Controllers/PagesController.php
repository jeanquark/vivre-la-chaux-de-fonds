<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePage;
use App\Page;
use App\Section;
use File;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Storage;

class PagesController extends Controller
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

    public function getPages()
    {
        $pages = Page::with('sections')->get();
        // $pages = Page::with('sections:section_id AS id,slug,name')->get();

        return response()->json($pages, 200);
    }

    public function getPageById(Request $request, $id)
    {
        $page = Page::with('sections')->findOrFail($id);
        // $page = Page::with('sections:section_id AS id,slug,name')->findOrFail($id);

        return response()->json([
            'success' => true,
            'page' => $page,
        ], 200);
    }

    public function getPageBySlug(Request $request, $slug)
    {
        $page = Page::where('slug', '=', $slug)->with('sections')->first();
        // $page = Page::where('slug', '=', $slug)->with('sections:section_id AS id,slug,name')->first();
        // sleep(3);
        return response()->json([
            'success' => true,
            'page' => $page,
        ], 200);
    }

    protected function createPage(Request $request)
    {

        $validatedData = $request->validate([
            'name' => 'required|unique:pages',
        ]);

        $page = new Page;

        $page->name = $request->name;
        $page->slug = str_slug($request->name);
        $page->content = $request->content;

        $page->save();

        $page->sections()->sync($request->sections);

        $newPage = Page::with('sections')->find($page->id);
        // $newPage = Page::with('sections:section_id AS id,slug,name')->find($page->id);

        return response()->json([
            'success' => true,
            'newPage' => $newPage,
        ], 201);
    }

    protected function updatePage(Request $request, $id)
    {

        $validatedData = $request->validate([
            'name' => ['required', Rule::unique('pages')->ignore($id)],
        ]);

        $page = Page::find($id);

        $page->updateOrCreate(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'content' => $request->content,
                'is_published' => $request->is_published,
                'updated_at' => \Carbon\Carbon::now(),
            ]
        );

        $page->sections()->sync($request->sections);

        $updatedPage = Page::with('sections')->find($id);
        // $updatedPage = Page::with('sections:section_id AS id,slug,name')->find($id);

        return response()->json([
            'success' => true,
            'page' => $page,
            'updatedPage' => $updatedPage
        ], 201);
    }

    protected function deletePage(Request $request, $pageId)
    {
        $page = Page::find($pageId);

        // Delete image if exists
        if (Storage::disk('images')->exists('pages', $page->image)) {
            Storage::disk('images')->delete('pages', $page->image);
        }

        $page->delete();

        return response()->json([
            'success' => true,
            'page' => $page
        ], 204);
    }
}
