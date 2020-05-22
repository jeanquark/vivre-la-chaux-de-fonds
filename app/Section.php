<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $table = 'sections';

    protected $guarded = [];

    /**
     * The pages that belong to the activity.
     */
    public function pages()
    {
        // return $this->belongsTo('App\Page', 'page_id');
        return $this->belongsToMany('App\Page', 'page_section', 'section_id', 'page_id')->withTimestamps();
    }
}
