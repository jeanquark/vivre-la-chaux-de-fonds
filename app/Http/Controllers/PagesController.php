<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Page;
use File;
use App\Http\Requests\StorePage;
use App\Http\Requests\UpdatePage;
use Illuminate\Support\Facades\Storage;
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
        // $page['sections'] = $page->sections;

        return response()->json([
            'success' => true,
            'page' => $page,
        ], 200);
    }

    protected function createPage(Request $request) {

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
        $page->save();


        return response()->json([
            'success' => true,
            'page' => $page,
        ], 201);
    }

    protected function updatePage(Request $request, $id) {

        $validatedData = $request->validate([
            // 'name' => 'required|unique:pages',
            // 'name' => 'required|unique:pages' . $id,
            'name' => ['required', Rule::unique('pages')->ignore($id)],
        ]);

        // return response()->json([
        //     'success' => true,
        //     'request' => $request,
        //     'id' => $id,
        //     'request->name' => $request->name,
        //     'request->content' => $request->content
        // ], 201);

        $page = Page::find($id);

        $page->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'content' => $request->content,
                'is_published' => $request->is_published,
                'updated_at' => \Carbon\Carbon::now()
            ]
        );

        $updatedPage = Page::find($id);

        return response()->json([
            'success' => true,
            // 'page' => $page,
            'updatedPage' => $updatedPage,
        ], 201);
    }

    protected function deletePage(Request $request, $id) {
        $page = Page::find($id);

        $page->delete();

        return response()->json([
            'success' => true,
            'page' => $page,
            'id' => $id
        ], 204);
    }
}