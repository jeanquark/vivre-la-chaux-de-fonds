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
        'name', 'slug', 'title', 'subtitle', 'text', 'content', 'image', 'video'
    ];

    /**
     * The roles that belong to the user.
     */
    public function activities()
    {
        return $this->belongsToMany('App\Activity');
    }
}
