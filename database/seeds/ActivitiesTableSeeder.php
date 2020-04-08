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
        // factory(App\Activity::class, 5)->create();
        $activities = [
            [
                'name'          => 'St Nicolas 2019',
                'slug'          => 'st_nicolas_2019',
                'subtitle'      => 'Un événement à ne pas rater',
                'content'       => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'         => 'st_nicolas_2019.jpg',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'  => true
            ],
            [
                'name'          => 'St Patrick 2019',
                'slug'          => 'st_patrick_2019',
                'subtitle'      => 'Un événement à ne pas rater',
                'content'       => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'         => 'st_patrick_2019.jpg',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'  => true
            ],
            [
                'name'          => 'Ola Portugal',
                'slug'          => 'ola_portugal',
                'subtitle'      => 'Un événement à ne pas rater',
                'content'       => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'         => 'ola_portugal_2019.png',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'  => true
            ],
        ];

        /*
         * Add Activity Items
         *
         */
        foreach ($activities as $activity) {
            Activity::create($activity);
        }

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
