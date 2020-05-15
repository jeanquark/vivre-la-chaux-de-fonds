<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sponsor extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'slug', 'image', 'contribution', 'start_date', 'end_date', 'is_active'
    ];

    /**
     * The activities that belong to the sponsor.
     */
    public function activities()
    {
        return $this->belongsToMany('App\Activity', 'sponsor_activity', 'sponsor_id', 'activity_id')->withTimestamps();
    }
}
