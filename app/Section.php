<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $table = 'sections';

    protected $guarded = [];

    /**
     * Get the page that owns the section.
     */
    public function page()
    {
        return $this->belongsTo('App\Page');
    }
}
