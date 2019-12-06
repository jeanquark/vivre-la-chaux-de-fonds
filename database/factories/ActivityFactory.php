<?php

use App\Activity;
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

$factory->define(Activity::class, function (Faker $faker) {
    return [
        'slug' => $faker->slug,
        'title' => $faker->sentence($nbWords = 3, $variableNbWords = true),
        'subtitle' => $faker->sentence($nbWords = 5, $variableNbWords = true),
        'content' => $faker->paragraph($nbSentences = 3, $variableNbSentences = true),
        'is_published' => $faker->boolean($chanceOfGettingTrue = 50),
        'image' => $faker->imageUrl($width = 640, $height = 480)
    ];
});
