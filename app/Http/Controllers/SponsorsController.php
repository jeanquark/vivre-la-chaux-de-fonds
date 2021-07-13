<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateSponsor;
use App\Sponsor;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

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

    // public function getSponsors()
    public function getSponsors(Request $request, $params = null)
    // public function getSponsors(Request $request, $params)
    {
        $is_active = (int)filter_var($request->query('is_active'), FILTER_VALIDATE_BOOLEAN);
        $is_partner = (int)filter_var($request->query('is_partner'), FILTER_VALIDATE_BOOLEAN);
        $is_supporter = (int)filter_var($request->query('is_supporter'), FILTER_VALIDATE_BOOLEAN);
        $slug = $request->query('slug');
        $id = $request->query('id');
        // dd($is_partner);

        $sponsors = Sponsor::with('activities')
            ->when($is_active, function ($query) use ($is_active) {
                return $query->where('is_active', '=', $is_active);
            })
            ->when($is_partner, function ($query) use ($is_partner) {
                return $query->where('is_partner', '=', $is_partner);
            })
            ->when($is_supporter, function ($query) use ($is_supporter) {
                return $query->where('is_supporter', '=', $is_supporter);
            })
            ->when($slug, function ($query) use ($slug) {
                return $query->where('slug', '=', $slug);
            })
            ->when($id, function ($query) use ($id) {
                return $query->where('id', '=', $id);
            })
            // ->with('activities')
            ->get();

        return response()->json($sponsors, 200);

        return response()->json([
            'success' => true,
            // 'request' => $request,
            // 'params' => $params,
            // 'input' => $input,
            // 'uri' => $uri,
            // 'query' => $query,
            // 'queries' => $queries,
            'is_active' => $is_active,
            'is_partner' => $is_partner,
            'is_supporter' => $is_supporter,
            'slug' => $slug,
            'id' => $id,
            'sponsors' => $sponsors
        ], 200);

        
        
        // if ($params) {
            //     $array = explode("=", $params);
            //     $key = $array[0];
            //     $value = $array[1];
            //     $sponsors = Sponsor::where($key, '=', $value)->with('activities')->get();
            // } else {
                //     $sponsors = Sponsor::with('activities')->get();
                // }
                
        // $sponsors = Sponsor::with('activities')->get();

        // return response()->json($sponsors, 200);

    }

    public function getSponsorById(Request $request, $id)
    {
        $sponsor = Sponsor::with('activities')->find($id);

        return response()->json([
            'success' => true,
            'sponsor' => $sponsor,
        ], 200);
    }

    public function getSponsorBySlug(Request $request, $slug)
    {
        $sponsor = Sponsor::where('slug', '=', $slug)->with('activities')->first();

        return response()->json([
            'success' => true,
            'sponsor' => $sponsor,
        ], 200);
    }

    protected function createSponsor(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:sponsors',
            'image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300'],
            'link' => ['nullable', 'url']
        ]);

        $sponsor = new Sponsor;

        $sponsor->name = $request->name;
        $sponsor->slug = str_slug($request->name);
        $sponsor->contribution = $request->contribution;
        $sponsor->link = $request->link;
        $sponsor->is_active = (int) $request->is_active;

        if ($request->start_date) {
            $sponsor->start_date = date_create_from_format('Y-m-d', $request->start_date);
        }
        if ($request->end_date) {
            $sponsor->end_date = date_create_from_format('Y-m-d', $request->end_date);
        }

        // Upload image if present
        if (File::exists($request->image)) {
            $imageName = $request->image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('partenaires', $request->image, $imageName);
            $sponsor->image = $file;
        }

        $sponsor->save();

        // Save sponsors relationships
        $sponsor->activities()->sync($request->activities);

        $newSponsor = Sponsor::with('activities')->find($sponsor->id);

        return response()->json([
            'success' => true,
            'newSponsor' => $newSponsor,
            'request' => $request,
            'request->image' => $request->image,
        ], 201);
    }

    protected function updateSponsor(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => ['required', Rule::unique('sponsors')->ignore($id)],
            'new_image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300'],
            'link' => ['nullable', 'url']
        ]);

        $sponsor = Sponsor::find($id);

        // $start_date = null;
        // if ($request->start_date) {
        //     $start_date = date_create_from_format('Y-m-d', $request->start_date);
        // }

        // $end_date = null;
        // if ($request->end_date) {
        //     $end_date = date_create_from_format('Y-m-d', $request->end_date);
        // }

        // Upload new image if present
        if (File::exists($request->new_image)) {
            // Delete old image
            // $old_image = $request->image;
            if (Storage::disk('images')->exists($request->image)) {
                Storage::disk('images')->delete($request->image);
            }

            // Upload new image
            $imageName = $request->new_image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('partenaires', $request->new_image, $imageName);
            $request->image = $file;
        }

        $sponsor->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'contribution' => $request->contribution,
                'link' => $request->link,
                'image' => $request->image,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'is_active' => (int) $request->is_active,
                'updated_at' => \Carbon\Carbon::now(),
            ]
        );

        $sponsor->activities()->sync($request->activities);

        $updatedSponsor = Sponsor::with('activities')->find($id);

        return response()->json([
            'success' => true,
            'updatedSponsor' => $updatedSponsor,
        ], 201);
    }

    protected function deleteSponsor(Request $request, $id)
    {
        $sponsor = Sponsor::find($id);

        // Delete image if it exists
        if (Storage::disk('images')->exists($sponsor->image)) {
            Storage::disk('images')->delete($sponsor->image);
        }

        $sponsor->delete();

        return response()->json([
            'success' => true,
            'sponsor' => $sponsor,
        ], 204);
    }
}
