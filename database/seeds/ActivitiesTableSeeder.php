<?php

use Illuminate\Database\Seeder;
use App\Activity;
use App\Sponsor;

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
                'name'              => 'St Nicolas 2019',
                'slug'              => 'st_nicolas_2019',
                'subtitle'          => 'Un événement à ne pas rater',
                'content'           => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'             => 'st_nicolas_2019.jpg',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'St Patrick 2019',
                'slug'              => 'st_patrick_2019',
                'subtitle'          => 'Un événement à ne pas rater',
                'content'           => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'             => 'st_patrick_2019.jpg',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Ola Portugal',
                'slug'              => 'ola_portugal',
                'subtitle'          => 'Un événement à ne pas rater',
                'content'           => 'Le 10 octobre aura lieu le tournoi annuel de Jass.',
                'image'             => 'ola_portugal_2019.png',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'      => true,
                'is_on_frontpage'   => false
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
        // factory(App\Sponsor::class, 15)->create();
        $sponsors = [
            [
                'name'          => 'La Semeuse',
                'slug'          => 'la_semeuse',
                'image'         => 'la_semeuse.jpg',
                'contribution'  => 20000,
                // 'end_date'      => '',
                'is_active'     => true
            ],
            [
                'name'          => 'Axa',
                'slug'          => 'axa',
                'image'         => 'axa.jpg',
                'contribution'  => 45000,
                // 'end_date'      => '',
                'is_active'     => true
            ],
            [
                'name'          => 'Loterie Romande',
                'slug'          => 'loterie_romande',
                'image'         => 'loterie_romande.png',
                'contribution'  => 50000,
                // 'end_date'      => '',
                'is_active'     => true
            ],
        ];

        foreach ($sponsors as $sponsor) {
            Sponsor::create($sponsor);
        }

        // Populate the pivot table
        // Get all the activities attaching up to 5 random sponsors to each activity
        $sponsors = App\Sponsor::all();
        
        App\Activity::all()->each(function ($activity) use ($sponsors) { 
            $activity->sponsors()->attach(
                $sponsors->random(rand(1, 3))->pluck('id')->toArray()
            ); 
        });
    }
}
