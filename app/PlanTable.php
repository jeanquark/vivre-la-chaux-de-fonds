<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlanTable extends Model
{
	protected $table = 'plan_tables';
    /**
     * Get the seats for the table.
     */
    public function seats()
    {
        return $this->hasMany('App\PlanSeat', 'plan_table_id');
        // return $this->hasMany('App\PlanSeat');
    }
}
