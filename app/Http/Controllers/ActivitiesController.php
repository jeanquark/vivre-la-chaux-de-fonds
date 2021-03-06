<?php

namespace App\Http\Controllers;

use App\Activity;
use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateActivity;
use File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rule;

class ActivitiesController extends Controller
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

    // public function getActivities()
    public function getActivities(Request $request, $params = null)
    {
        $is_published = (int) filter_var($request->query('is_published'), FILTER_VALIDATE_BOOLEAN);
        $slug = $request->query('slug');
        $id = $request->query('id');

        $activities = Activity::with('sponsors')
        // ->orderBy('start_date', 'desc')->get();
            ->when($is_published, function ($query) use ($is_published) {
                return $query->where('is_published', '=', $is_published);
            })
            ->when($slug, function ($query) use ($slug) {
                return $query->where('slug', '=', $slug);
            })
            ->when($id, function ($query) use ($id) {
                return $query->where('id', '=', $id);
            })
            ->orderBy('start_date', 'desc')->get();

        return response()->json($activities, 200);

        // $activities = Activity::with('sponsors')->get();

        // return response()->json($activities, 200);
    }

    public function getActivityById(Request $request, $id)
    {
        $activity = Activity::with('sponsors')->find($id);

        // Retrieve all images related to a specific activity
        $activity['images'] = Storage::disk('images')->files('activities/' . $activity->slug);

        return response()->json([
            'success' => true,
            'activity' => $activity,
            // 'images' => $images
        ], 200);
    }

    public function getActivityBySlug(Request $request, $slug)
    {
        $activity = Activity::where('slug', '=', $slug)->with('sponsors')->firstOrFail();

        // Retrieve all images related to a specific activity
        $activity['images'] = Storage::disk('images')->files('activities/' . $activity->slug);

        return response()->json([
            'success' => true,
            'activity' => $activity,
            // 'images' => $images
        ], 200);
    }

    protected function createActivity(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|unique:activities',
            'link' => ['nullable', 'url'],
            'image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300'],
        ]);

        $activity = new Activity;

        $activity->name = $request->name;
        $activity->subtitle = $request->subtitle;
        $activity->slug = str_slug($request->name);
        $activity->content = $request->content;
        $activity->link = $request->link;
        $activity->is_published = (int) $request->is_published;
        if ($request->start_date) {
            $activity->start_date = date_create_from_format('Y-m-d H:i:s', $request->start_date);
        }
        if ($request->end_date) {
            $activity->end_date = date_create_from_format('Y-m-d H:i:s', $request->end_date);
        }

        // Upload image if present
        if (File::exists($request->image)) {
            // $file = Storage::disk('images')->put('activities', $request->image);
            // $activity->image = $file;

            $imageName = $request->image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('activities', $request->image, $imageName);
            $activity->image = $file;
        }

        
        // Upload images for image gallery
        if ($request->images) {
            foreach ($request->images as $image) {
                if (File::exists($image)) {
                    $imageName = $image->getClientOriginalName(); //Get Image Name
                    $file = Storage::disk('images')->putFileAs('activities/' . $activity->slug, $image, $imageName);
                }
            }
        }
        
        $activity->save();

        $activity->sponsors()->sync($request->sponsors);

        $newActivity = Activity::with('sponsors')->find($activity->id);
        
        return response()->json([
            'success' => true,
            'newActivity' => $newActivity,
            'request->image' => $request->image,
            'request->images' => $request->images,
        ], 201);
    }

    protected function updateActivity(Request $request, $id)
    {
        $validatedData = $request->validate([
            'name' => ['required', Rule::unique('activities')->ignore($id)],
            'new_image' => ['nullable', 'image', 'mimes:jpeg,jpg,png', 'dimensions:min_width=300'],
            'link' => ['nullable', 'url'],
        ]);

        $activity = Activity::find($id);

        $start_date = null;
        if ($request->start_date) {
            $start_date = date_create_from_format('Y-m-d H:i:s', $request->start_date);
        }

        $end_date = null;
        if ($request->end_date) {
            $end_date = date_create_from_format('Y-m-d H:i:s', $request->end_date);
        }

        // Upload new image if present
        if (File::exists($request->new_image)) {
            // Delete old image
            // $old_image = $request->image;
            if (Storage::disk('images')->exists($request->image)) {
                Storage::disk('images')->delete($request->image);
            }

            // Upload new image
            // $file = Storage::disk('images')->put('activities', $request->new_image);
            // $request->image = $file;

            $imageName = $request->new_image->getClientOriginalName(); //Get Image Name
            $file = Storage::disk('images')->putFileAs('activities', $request->new_image, $imageName);
            $request->image = $file;
        }

        $activity->updateOrInsert(
            ['id' => $id],
            [
                'name' => $request->name,
                'slug' => str_slug($request->name),
                'subtitle' => $request->subtitle,
                'content' => $request->content,
                'link' => $request->link,
                'image' => $request->image,
                'start_date' => $start_date,
                'end_date' => $end_date,
                'is_published' => (int) $request->is_published,
                'is_on_frontpage' => $request->is_on_frontpage,
                'updated_at' => \Carbon\Carbon::now(),
            ]
        );

        $activity->sponsors()->sync($request->sponsors);

        $updatedActivity = Activity::with('sponsors')->find($id);

        return response()->json([
            'success' => true,
            'updatedActivity' => $updatedActivity,
        ], 201);
    }

    protected function deleteActivity(Request $request, $id)
    {
        $activity = Activity::find($id);

        // Delete image if it exists
        if (Storage::disk('images')->exists($activity->image)) {
            Storage::disk('images')->delete($activity->image);
        }

        $activity->delete();

        return response()->json([
            'success' => true,
            'activity' => $activity,
        ], 204);
    }
}
