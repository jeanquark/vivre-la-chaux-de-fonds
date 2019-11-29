<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Sponsor;
use DB;
use View;
use File;

class SponsorsController extends Controller
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


    public function getSponsors()
    {
        $sponsors = Sponsor::all();

        return response()->json($sponsors, 200);
    }

    public function getSponsor(Request $request)
    {
        $sponsorId = $request->id;
        $sponsor = Sponsor::where('id', '=', $sponsorId)->get();

        return response()->json($sponsor, 200);
    }

    protected function addSponsor(Request $request) {
        // $newActivity = $request->all();

        $form = json_decode($request->form);
        $sponsor = Sponsor::create([
            'slug' => 'abc',
            'title' => $form->title,
            'text' => $form->text,
            'content' => $form->content,
            'subtitle' => $form->subtitle
        ]);

        // Upload image if present
        if (File::exists($request->image)) {
            $imageName = time().'.'. $request->image->getClientOriginalExtension();
            $request->image->move(public_path('images/sponsors'), $imageName);
        }

        return response()->json([
            'success' => true,
            'message' => 'Activity added successfully',
            'sponsor' => $sponsor
            // 'request' => $request,
            // 'abc' => $abc,
            // 'def' => $def,
            // 'ghi' => $ghi,
            // 'newActivity' => $newActivity,
            // 'imageName' => $imageName
        ], 201);
    }

    protected function updateSponsor(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }

    protected function deleteSponsor(Request $request) {

        return response()->json([
            'status' => 'OK'
        ], 201);
    }
}