<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'subtitle', 'content', 'image', 'video', 'link', 'start_date', 'end_date', 'is_published', 'is_on_frontpage'
    ];

    /**
     * The sponsors that belong to the activity.
     */
    public function sponsors()
    {
        return $this->belongsToMany('App\Sponsor', 'sponsor_activity', 'activity_id', 'sponsor_id' )->withTimestamps();
    }
}
