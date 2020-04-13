<?php

use Illuminate\Database\Seeder;
use App\Sponsor;

class SponsorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
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

        // $sponsors = factory(App\Sponsor::class, 10)->create();
    }
}
