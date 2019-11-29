<?php

use Illuminate\Database\Seeder;
use App\Activity;

class SponsorsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sponsors = factory(App\Sponsor::class, 10)->create();
    }
}
