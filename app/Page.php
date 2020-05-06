<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $table = 'pages';

    protected $guarded = [];

    /**
     * Get the sections for the page.
     */
    public function sections()
    {
        return $this->hasMany('App\Section');
    }
}
