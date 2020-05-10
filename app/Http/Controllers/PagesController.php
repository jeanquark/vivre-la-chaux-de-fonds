<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdatePage;
use App\Page;
use App\Section;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

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
        // $pages = Page::all();

        return response()->json($pages, 200);
    }

    public function getPageById(Request $request, $id)
    {
        $page = Page::find($id);
        $page['sections'] = $page->sections;

        // $page = Page::where('id', '=', $id)->with('sections')->first();

        return response()->json([
            'success' => true,
            'page' => $page,
        ], 200);
    }

    public function getPageBySlug(Request $request, $slug)
    {
        $page = Page::where('slug', '=', $slug)->with('sections')->first();
        // $page = Page::where('slug', '=', $slug)->with('sections:id,name,page_id')->first();

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
        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'request->name' => $request->name,
        //     'request->content' => $request->content
        // ], 201);

        // $newPage = json_decode($request->form);

        $page = new Page;

        $page->name = $request->name;
        $page->slug = str_slug($request->name);
        $page->content = $request->content;
        // $page->is_published = false;

        // Upload image if present
        if (File::exists($request->image)) {
            $image = Storage::disk('images')->put('pages', $request->image);
            $page->image = $image;
        }

        $page->save();

        return response()->json([
            'success' => true,
            'page' => $page,
        ], 201);
    }

    protected function updatePage(Request $request, $id)
    {

        $validatedData = $request->validate([
            // 'name' => 'required|unique:pages',
            // 'name' => 'required|unique:pages' . $id,
            'name' => ['required', Rule::unique('pages')->ignore($id)],
        ]);

        // return response()->json([
        //     'success' => true,
        //     'id' => $id,
        //     'request' => $request,
        // ], 201);

        $page = Page::find($id);

        $page->updateOrCreate(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'content' => $request->content,
                // 'sections' => $request->sections,
                'is_published' => $request->is_published,
                'updated_at' => \Carbon\Carbon::now(),
            ]
        );

        // 1) First, dissociate all existing relationships
        foreach ($page->sections as $section) {
            $section->page()->dissociate();
            $section->save();
        }

        // 2) Second, associate current relationships
        if ($request->sections) {
            foreach ($request->sections as $sectionId) {
                $section = Section::find($sectionId);
                $section->page()->associate($page->id);
                $section->save();
            }
        }

        $updatedPage = Page::with('sections')->find($id);

        return response()->json([
            'success' => true,
            'page' => $page,
            'updatedPage' => $updatedPage,
            // 'request->sections' => $request->sections,
            // 'updatedPage->sections' => $updatedPage->sections,
            // 'updatedPage->sections()->get()' => $updatedPage->sections()->get(),
            // 'page->id' => $page->id,
        ], 201);
    }

    protected function deletePage(Request $request, $slug)
    {
        $page = Page::where('slug', '=', $slug)->first();

        // Delete image if exists
        if (Storage::disk('images')->exists('pages', $page->image)) {
            Storage::disk('images')->delete('pages', $page->image);
        }

        $page->delete();

        return response()->json([
            'success' => true,
            'page' => $page,
            'slug' => $slug
        ], 204);
    }
}
