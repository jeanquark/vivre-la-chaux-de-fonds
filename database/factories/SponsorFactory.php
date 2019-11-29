<?php

use App\Sponsor;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/
// $faker = Faker\Factory::create('fr_FR'); // create a French faker

$factory->define(Sponsor::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'slug' => $faker->slug,
        'image' => $faker->imageUrl($width = 640, $height = 480),
        'contribution' => $faker->numberBetween($min = 100, $max = 5000),
        'ending_date' => $faker->date($format = 'Y-m-d', $max = 'now'),
    ];
});
