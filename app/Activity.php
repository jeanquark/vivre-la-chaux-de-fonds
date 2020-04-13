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
        'title', 'slug', 'subtitle', 'content', 'image', 'video', 'start_date', 'end_date', 'is_online'
    ];

    /**
     * The sponsors that belong to the activity.
     */
    public function sponsors()
    {
        return $this->belongsToMany('App\Sponsor', 'sponsor_activity', 'activity_id', 'sponsor_id' )->withTimestamps();
    }
}
