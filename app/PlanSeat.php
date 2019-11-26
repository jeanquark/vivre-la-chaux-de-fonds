<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlanSeat extends Model
{
	protected $table = 'plan_seats';
    /**
     * Get the table that owns the seats.
     */
    public function table()
    {
        return $this->belongsTo('App\PlanTable');
    }

    /**
     * Get the table that owns the seats.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
