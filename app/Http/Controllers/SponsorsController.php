<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Sponsor;
use File;
use App\Http\Requests\StoreSponsor;
use App\Http\Requests\UpdateSponsor;
use Illuminate\Support\Facades\Storage;


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
        $sponsors = Sponsor::with('activities')->get();

        return response()->json($sponsors, 200);
    }

    public function getSponsor(Request $request, $id)
    {
        $sponsor = Sponsor::find($id);
        $sponsor['activities'] = $sponsor->activities;

        return response()->json([
            'success' => true,
            'sponsor' => $sponsor,
        ], 200);
    }

    protected function createSponsor(Request $request) {
        $newSponsor = json_decode($request->form);

        $sponsor = new Sponsor;

        $sponsor->name = $newSponsor->name;
        $sponsor->slug = str_slug($newSponsor->name);
        $sponsor->contribution = $newSponsor->contribution;
        $sponsor->is_active = false;
        if ($newSponsor->end_date) {
            $sponsor->end_date = date_create_from_format('Y-m-d', $newSponsor->end_date);
        }

        // Upload image if present
        if (File::exists($request->image)) {
            // $imageName = time().'.'. $request->image->getClientOriginalExtension();
            // $request->image->move(public_path('images/sponsors'), $imageName);
            // $sponsor->image = $imageName;

            // Upload image
            $file = Storage::disk('uploads')->put('sponsors', $request->image);
            $sponsor->image = $file;
        }

        $sponsor->save();

        // Save sponsors relationships
        if ($newSponsor->activities) {
            foreach ($newSponsor->activities as $activity) {
                $sponsor->activities()->attach($activity->id);
            }    
        }

        // if ($newActivity->sponsors) {
        //     foreach ($newActivity->sponsors as $sponsor) {
        //         $activity->sponsors()->attach($sponsor->id);
        //     }
        // }
        
        return response()->json([
            'success' => true,
            'sponsor' => $sponsor,
            'newSponsor' => $newSponsor,
            '$request->image' => $request->image,
        ], 201);
    }

    protected function updateSponsor(Request $request, $id) {

        $updatedSponsor = json_decode($request->form);
        $sponsor = Sponsor::find($id);

        $end_date = null;
        if ($updatedSponsor->end_date) {
            $end_date = date_create_from_format('Y-m-d H:i:s', $updatedSponsor->end_date);
        }

        // Upload new image if present
        if (File::exists($request->image)) {
            // Delete old image
            $old_image = $sponsor->image;
            if (Storage::disk('uploads')->exists($sponsor->image)) {
                Storage::disk('uploads')->delete($sponsor->image);
            }

            // Upload new image
            $file = Storage::disk('uploads')->put('sponsors', $request->image);
            $updatedSponsor->image = $file;
        }

        $sponsor->updateOrInsert(
            ['id' => $id],
            [
                'name' => $updatedSponsor->name,
                'slug' => str_slug($updatedSponsor->name),
                'contribution' => $updatedSponsor->contribution,
                'end_date' => $updatedSponsor->end_date,
                'is_active' => $updatedSponsor->is_active
            ]
        );

        // Update sponsors relationships
        $activityIdArray = [];
        foreach($updatedSponsor->activities as $activity) {
            array_push($activityIdArray, $activity->id);
        }
        $sponsor->activities()->sync($activityIdArray);

        return response()->json([
            'success' => true,
            '$request->image' => $request->image,
            'sponsor' => $sponsor,
        ], 201);
    }

    protected function deleteSponsor(Request $request, $id) {
        $sponsor = Sponsor::find($id);

        // Delete image if it exists
        if (Storage::disk('uploads')->exists($sponsor->image)) {
            Storage::disk('uploads')->delete($sponsor->image);
        }

        $sponsor->delete();

        return response()->json([
            'success' => true,
            'sponsor' => $sponsor
        ], 204);
    }
}