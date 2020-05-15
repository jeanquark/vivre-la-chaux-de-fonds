<?php

use App\Page;
use Illuminate\Database\Seeder;

class PagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $pages = [
            [
                'name'          => 'Accueil',
                'slug'          => 'accueil',
                'content'       => '',
                'is_published'  => true
            ],
            [
                'name'          => 'Association',
                'slug'          => 'association',
                'content'       => '',
                'is_published'  => true
            ],
            [
                'name'          => 'On parle de nous',
                'slug'          => 'on-parle-de-nous',
                'content'       => '<h4>Les maîtres du temps.</h4><br />
                <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>',
                'is_published'  => true
            ],
            [
                'name'          => 'Participez',
                'slug'          => 'participez',
                'content'       => '',
                'is_published'  => true
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
