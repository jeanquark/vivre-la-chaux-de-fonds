<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';

    protected $guarded = [];

    /**
     * The sections that belong to the page.
     */
    public function sections()
    {
        // return $this->hasMany('App\Section', 'page_id');
        return $this->belongsToMany('App\Section', 'page_section', 'page_id', 'section_id' )->withTimestamps();
    }
}
