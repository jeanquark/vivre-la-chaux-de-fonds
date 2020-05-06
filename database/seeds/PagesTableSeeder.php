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
                'name'      => 'Association',
                'slug'      => 'association',
                'content'   => ''
            ],
            [
                'name'      => 'On parle de nous',
                'slug'      => 'on-parle-de-nous',
                'content'   => '<h4>Les maîtres du temps.</h4><br />
                                <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>'
            ],
            [
                'name'      => 'Participez',
                'slug'      => 'participez',
                'content'   => ''
            ],
        ];

        foreach ($pages as $page) {
            Page::create($page);
        }
    }
}
