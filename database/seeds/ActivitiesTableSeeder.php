<?php

use Illuminate\Database\Seeder;
use App\Activity;

class ActivitiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Populate activities
        factory(App\Activity::class, 5)->create();

        // Populate sponsors
        factory(App\Sponsor::class, 15)->create();

        // Populate the pivot table
        // Get all the activities attaching up to 5 random sponsors to each activity
        $sponsors = App\Sponsor::all();
        
        App\Activity::all()->each(function ($activity) use ($sponsors) { 
            $activity->sponsors()->attach(
                $sponsors->random(rand(1, 5))->pluck('id')->toArray()
            ); 
        });
    }
}
