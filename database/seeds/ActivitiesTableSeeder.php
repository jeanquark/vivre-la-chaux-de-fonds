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
                'name'              => '1000 Jazz 2020',
                'slug'              => '1000_jazz_2020',
                'subtitle'          => 'Vivre La Chaux-de-Fonds présente la 1re édition du Festival 1000Jazz du 5 au 7 novembre 2020',
                'content'           => '<p><strong>Vivre La Chaux-de-Fonds présente la 1re édition du Festival 1000Jazz du 5 au 7 novembre 2020</strong></p><p> </p><p><strong>Le premier week-end de novembre sera Jazz dans la Métropole horlogère. Le festival 1000Jazz voit le jour à l’initiative de l’association Vivre La Chaux-de-Fonds. En collaboration avec plusieurs partenaires culturels de la Ville, le festival mettra en avant la scène contemporaine du jazz et sa diversité de styles à travers neuf concerts en trois jours.</strong></p><p> </p><p>L’idée du festival 1000Jazz s’inscrit dans une volonté de pérenniser sous un nouveau regard la tradition du jazz à La Chaux-de-Fonds. Dès les années 30, ce style musical s’est en effet invité dans de nombreuses brasseries de la Métropole horlogère avec la présence de plusieurs artistes célèbres.</p><p> </p><p>Pourtant, 1000Jazz ne veut pas être un miroir du passé et ambitionne de diffuser, dans les salles chaux-de-fonnières, la diversité de styles du jazz actuel. La Chaux-de-Fonds accueillera sur trois jours une sélection de ce qu’il se fait de mieux sur la scène actuelle. La Suisse sera largement à l’honneur, puisque deux tiers des groupes programmés seront helvétiques.</p><p> </p><p>Pour mener à bien ce projet, l’association Vivre La Chaux-de-Fonds s’est entourée de plusieurs partenaires au sein de la culture locale. La programmation a été entièrement mise sur pied par Philippe Cattin, programmateur des Murs du son. Il s’agit d’une association active depuis plus de 20 ans dans l’organisation de concerts de Jazz en ville. Le festival se tiendra dans des salles à l’atmosphère intimiste grâce aux partenariats conclus avec le Théâtre populaire romand – Centre neuchâtelois des arts vivants (théâtre de L’Heure bleue), la Fondation Ton sur Ton (salle Ton sur Ton), le Centre ABC (Temple allemand), ou encore le restaurant La Différence (cave du Petit Paris).</p><p> </p><p>La programmation de 1000Jazz sera dévoilée à la mi-août. La billetterie ouvrira au même moment à des prix attractifs.</p>',
                'image'             => 'activities/1000_jazz_2020.png',
                // 'start_date'    => '',
                // 'end_date'      => '',
                'is_published'      => true,
                'is_on_frontpage'   => true
            ],
            [
                'name'              => 'Saint-Patrick 2019',
                'slug'              => 'saint_patrick_2019',
                'subtitle'          => 'Samedi 16 mars 2019',
                'content'           => '',
                'image'             => 'activities/saint_patrick_2019.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Nicolas 2018',
                'slug'              => 'saint_nicolas_2018',
                'subtitle'          => 'Jeudi 6 décembre 2018',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2018.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Nicolas 2017',
                'slug'              => 'saint_nicolas_2017',
                'subtitle'          => 'Mercredi 6 décembre 2017',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2017.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Ola Portugal 2017',
                'slug'              => 'ola_portugal_2017',
                'subtitle'          => 'Vendredi 15 septembre 2017 - Samedi 7 octobre 2017',
                'content'           => '',
                'image'             => 'activities/ola_portugal_2017.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Nicolas 2016',
                'slug'              => 'saint_nicolas_2016',
                'subtitle'          => 'Mardi 6 décembre 2016',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2016.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Ki Ké Koi!',
                'slug'              => 'ki_ke_koi_2016',
                'subtitle'          => 'Samedi 4 juin 2016 - Samedi 6 août 2016',
                'content'           => '<div class="field-item even" property="content:encoded"><p><iframe width="560" height="315" src="https://www.youtube.com/embed/50eUMpH0yRU?rel=0" frameborder="0" allowfullscreen=""></iframe></p><h1>KOI?</h1><p>Une grande exposition populaire à la cité horlogère pour titiller la curiosité amusée des cinq à nonante-cinq ans (et des autres) à travers les créations visuelles poétiques et paradoxales mises en scène par</p><h1>KI?</h1><p>Plonk &amp; Replonk, les artisans-bidouilleurs qui nous font revivre un passé plus vrai que nature, ké!</p><h1>DONK OÙ?</h1><p>Les visions du célèbre atelier d\'images envahiront pacifiquement une portion de l\'Avenue Léoplonk-Robert et une partie de l\'impressionnant hall des anciens abattoirs.</p><p>Plusieurs panneaux didactiques judicieusement situés donneront aux badauds des informations rigoureusement capitales, sinon utiles.</p><p>Quant à La Grande Fontaine, il se murmure qu\'elle pourrait se voir accolée d\'un appendice tout en dignité grandiose, et d\'une paisible majesté nationale.</p>
                    <h2>Vernissage</h2><p>Vernissage vendredi 3 juin à 18h</p>
                    <h2>Horaires</h2>
                    <p>Du 4 juin au 6 août 2016</p>
                    <p><strong>Horaires juin:</strong><br />mercredi au dimanche<br />de 14h à 18h</p>
                    <p><strong>Horaires juillet:</strong><br />vendredi  au dimanche<br />de 14h à 18h<br />
                    Vendredi 1er juillet fermé</p>
                    <p><strong>Horaires août:</strong><br />du 1er au 6 août<br /> tous les jours de 10h00-13h00 / 15h00-20h00</p>
                    <h2>Prix d\'entrée</h2>
                    <p>
                    Plein tarif: Frs 5.-<br />
                    Tarif réduit: Frs 3.- (étudiants, AVS )<br />
                    Gratuit: Enfants jusqu’à 12 ans<br />
                    Uniquement en espèces
                    </p>
                    <p><img src="/sites/default/files/styles/large/public/amours%20dete%20chateau.jpg?itok=1mvUE0-i" alt="" class="image-large" /></p>
                    <h1>Plonk et Replonk est un collectif d’éditeurs de La Chaux-de-Fonds.</h1><p>Jacques Froidevaux, Hubert Froidevaux et Miguel-Angel Morales composent le collectif Plonk &amp; Replonk, qui a vu le jour en 1995 dans les montagnes du Jura suisse. L’un est Plonk, qui plante le clou. L’autre est Replonk, qui l’enfonce. Le troisième, parfois surnommé Esperluette, tend le prochain clou au premier. Mais souvent, ils inversent les rôles.<br /> </p><p>Nés en 1963 et 1966 au Noirmont, petit village du canton du Jura,  les deux frères et leur complice (Barcelone, 1963) se sont distingués dès 1997 par des détournements savoureux de cartes postales Belle Époque qui ont fait leur succès. Travaillant à La Chaux-de-Fonds, Plonk &amp; Replonk puisent dans leur important fonds d’archives 1900 et conçoivent des photo-montages en y intégrant des photographies personnelles, en les colorisant ou en y ajoutant une kitschissime “swiss re-touch” de nonsense, notamment dans la légende.</p><p>Dignes héritiers des Monthy Python, Gary Larson ou Pierre Desproges,  ils taquinent la société et s’amusent de tout avec une fantaisie irrésistible. Ils donnent également dans le bétonnage de nains de jardin dits « de sécurité »  et multiplient les expositions.</p>
                    <p><img src="/sites/default/files/styles/large/public/panneau_didactique.jpg?itok=nNUd12rF" alt="" class="image-large" /></p>
                    <h1>Vivre La Chaux-de-Fonds et Plonk &amp; Replonk</h1><p>En 1983, avant de créer le collectif qui porte leur nom, Plonk &amp; Replonk publient un fanzine baptisé "Le yaourt qui tue."<br />Qui aurait pu prédire que, quelques années plus tard, ils réaliseraient des cartes de vœux bien décalées pour Hermès, pour le Conseil communal de Genève, et seraient invités par Antoine de Caunes sur un plateau de Canal+ en plein prime time ?</p><p>Plus récemment, c’est l’entreprise Reitzel qui a choisi le trio pour concocter son calendrier 2015, en suggérant aux créateurs de le focaliser sur son produit phare: le cornichon. Du pain bénit pour les Chaux-de-Fonniers plus qu’inspirés! Vérification du sexe des jeunes cornichons adultes en vue de la reproduction, patrouille des cornichons…</p><p>Parmi leur succès, outre le fameux Roi de Suisse, figurent des cartes postales faites à partir de vieilles photos trouvées dans des brocantes.</p><p>Parfois, ce sont des albums de famille entiers que Plonk &amp; Replonk achètent et détournent, pour en faire des montages tordants. Leurs best-sellers: La classe d’hyperactifs, et l’hilarante Epidémie de moustaches.</p><p>Le collectif produit environ 150 images par an et estime être «rentable» depuis trois ou quatre ans soit une douzaine d’années après leur parution dans le Nouveau Quotidien, un travail «régulier» qui a donné un coup d’accélérateur à la petite entreprise. <em>«Mais il ne faut pas croire que l’argent coule à flots.»</em>        </p><p>Le 11  janvier se terminait leur exposition à la Maison du dessin de presse à Morges. Le même jour, les lieux rendaient hommage à Charlie Hebdo suite à la tragédie du 7 janvier. <em>«Charlie fait partie de notre culture»</em>, explique Miguel. Une influence importante, tout comme celle de Gotlib, Pierre Dac, Desproges, Tex Avery, les Monty Python… <em>«L’esprit Plonk &amp; Replonk, c’est la somme de tout ce qu’on a lu, de nos révoltes de jeunesse et de notre anticonformisme. On a passé plein de trucs à la moulinette. On a tout mis dans un entonnoir. Et l’entonnoir, ensuite, on l’a retourné !»</em></p><p>L’association Vivre La Chaux-de-Fonds ne pouvait pas, à l’occasion de son 15ème anniversaire, faire autre chose que de créer une exposition à leur échelle et dans leur ville, en guise de remerciements pour services rendus à l’humour. Orner le Pod, créer une exposition fixe, en faire le thème du cortège des promotions ou encore produire de fausses plaques commémoratives, tout sera bon pour rendre hommage à nos lascars et accueillir comme il se doit S.M. Helvetus IV,  Roi de Suisse.</p><p>C’est aussi l’occasion, de collaborer avec la plage des Six Pompes afin de créer un événement festif durant les mois de juin, juillet et août 2016.</p>
                    <p><img src="/sites/default/files/styles/large/public/PlonkReplonkpod01.jpg?itok=ytXsZWuY" alt="" class="image-large" /></p>
                    <h1>Ecologie et recyclage</h1><p>Convaincus que nous pouvons tous participer à la diminution du réchauffement climatique, nous proposons de compenser les émissions de carbone occasionnées par l’organisation de cet événement.</p><p>Grâce aux services d’une entreprise spécialisée, les émissions engendrées sont transformées en francs qui sont versés au service des Espaces Verts pour la plantation d’arbres dans les parcs chaux-de-fonniers.</p><p>Depuis 2010, nous n’utilisons que de la vaisselle recyclable et des gobelets réutilisables lors de nos manifestations. De même, nous mettons tout en œuvre afin de n’utiliser que des matériaux recyclables pour les constructions éphémères de nos manifestations.</p></div>',
                'image'             => 'activities/ki_ke_koi_2016.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Nicolas 2015',
                'slug'              => 'saint_nicolas_2015',
                'subtitle'          => 'Dimanche 6 décembre 2015',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2015.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Soirée de Gala 2015',
                'slug'              => 'soiree_de_gala_2015',
                'subtitle'          => 'Jeudi 7 mai 2015',
                'content'           => 'Les maîtres du temps',
                'image'             => 'activities/soiree_de_gala_2015.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Chasse au trésor 2014',
                'slug'              => 'chasse_au_tresor_2014',
                'subtitle'          => 'Samedi 8 mars 2014',
                'content'           => 'Dans le cadre de la 5e édition du festival de jeux « Ludeso » qui se tiendra du 7 au 9 mars 2014, Vivre la Chaux-de-Fonds vous propose « Histoires de Voir », un jeu de piste historique à travers les rues de la ville. <p><img alt="" class="file-icon" src="/images/svg/file-pdf.svg" title="application/pdf" /><a href="/documents/activities/chasse_au_tresor_2014/questions_et_reponses_des_postes.pdf" title="Réponses aux questions des postes">Réponses aux questions des postes</a></p><p><img alt="" class="file-icon" src="/images/svg/file-pdf.svg" title="application/pdf" /><a href="/documents/activities/chasse_au_tresor_2014/corrections_chasse_au_tresor.pdf" title="Réponses aux guides historiques">Réponses aux guides historiques</a></p>',
                'image'             => 'activities/chasse_au_tresor_2014.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Nicolas 2013',
                'slug'              => 'saint_nicolas_2013',
                'subtitle'          => 'Vendredi 6 décembre 2013',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2013.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Chasse au trésor',
                'slug'              => 'chasse_au_tresor_2012',
                'subtitle'          => 'Vendredi 5 octobre 2012 - Dimanche 7 octobre 2012',
                'content'           => '',
                'image'             => 'activities/chasse_au_tresor_2012.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Calendrier de l\'avent',
                'slug'              => 'calendrier_de_lavent_2011',
                'subtitle'          => 'Jeudi 1 décembre 2011 - Samedi 24 décembre 2011',
                'content'           => '<h2>Noël dans tous les sens pour les dix ans de Vivre La Chaux-de-Fonds</h2><p>Pour le dixième anniversaire de sa renaissance, l’association Vivre La Chaux-de-Fonds offre un Noël dans tous les sens aux Chaux-de-Fonniers. Pendant 24 jours, un Calendrier de l’Avent géant et original va s’effeuiller sur la place Espacité, au cœur de la ville. Cet événement, en forme de cadeau à nos concitoyens, nous permettra de prolonger et de ponctuer les festivités de notre dixième anniversaire. Dix ans marqués par la création et le lancement de nombreuses manifestations ou animations ponctuelles et diverses. Faut-il rappeler ici le succès des Viv’Amitiés organisées sur le thème de la Belgique, l’Italie et Helvetissima? Ou encore celui de notre Chasse au trésor en 2010, de nos Saint-Sylvestre et de nos autres nombreux événements? Depuis 2001, notre association a proposé une cinquantaine d’animations. Vivre La Chaux-de-Fonds voulait témoigner de la vitalité de sa ville et stimuler la création de nouveaux événements. La liste des manifestations organisées témoignent de cette réussite.</p><h2>Un village de Noël féérique</h2><p>Comme annoncé, un nouveau Calendrier de l’Avent va égayer le centre-ville entre le 1er et le 24 décembre prochain. Le thème cette année est les cinq sens, enrichis d’un sens vital: l’humour. A l’image de nos autres animations, celle-ci se veut festive, rassembleuse et conviviale. Tous les jours, 24 personnalités de la ville se mettront en scène et feront partager un de leur souvenir sur le thème des cinq sens. Le tout avec une touche d’humour et dans la bonne humeur.</p><p>Un village de Noël féérique animera tous les jours la place Espacité. Dans une douzaine de chalets, divers artisans, producteurs ou agriculteurs se succèderont pour proposer leurs produits ou créations. Dans l’ambiance de Noël, nos citoyens pourront assister à des animations quotidiennes sur des sujets variés.</p><p>Le tout au cœur de leur ville!</p>',
                'image'             => 'activities/calendrier_de_lavent_2011.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Soirée de Gala 2011',
                'slug'              => 'soiree_de_gala_2011',
                'subtitle'          => 'Vendredi 21 octobre 2011',
                'content'           => '',
                'image'             => 'activities/soiree_de_gala_2011.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint Nicolas 2010',
                'slug'              => 'saint_nicolas_2010',
                'subtitle'          => 'Lundi 6 décembre 2010',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2010.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Le Fabuleux Voyage',
                'slug'              => 'chasse_au_tresor_2010',
                'subtitle'          => 'Samedi 2 octobre 2010 - Dimanche 3 octobre 2010',
                'content'           => '<h2>La Grande Chasse aux trésors a eu lieu!</h2><p>En famille, par groupe, en couple ou individuellement, chacun est parti à la découverte des moments et événements clés qui ont façonnés la ville. <strong>D’énigmes en questions, de quizz en jeux d’adresse ou de réflexion</strong>, les participants ont silloné la ville au gré de leurs réponses, découvrant ainsi des lieux jalonnés de spectacles et d’animations.</p><p><strong>Qui dit chasse au trésor, dit magot, bien sûr !</strong> Chaque équipe a reçu une bourse contenant quelques batz de départ, spécialement frappés pour l’occasion. Le but était de la faire déborder d’or. Chacun a du répondre à des énigmes, si les plus jeunes n\'ont pu que gagner des pièces sonnantes et trébuchantes... attention, les adultes distraits ont parfois perdu jusqu’à leur dernier centime ! Réflexion, adresse et cohésion étaient obligatoire dans les équipes !</p><p>En collaboration avec des acteurs et des musiciens, Vivre La Chaux-de-Fonds a eu la ferme volonté de créer un événement populaire et fédérateur. Les participants étaient encouragés à se déplacer d’un lieu à l’autre par la mobilité douce, à pied, à vélo, en roller ou en transport publics.</p><p><strong>Après la chasse et l’effort, le réconfort.</strong> Le dimanche était réservé à un fabuleux repas, comme l’aurait aimé Jacques Sandoz, fait de sangliers à la broche et d’autres spécialités d’époque. Une tente était aménagée sur la place Espacité pour que ce repas soit un vrai moment de convivialité pour tous, chaux-de-fonniers de toujours ou gens venus d’ailleurs, curieux de découvrir, sous une forme originale, une ville et ses acteurs en lesquels nous croyons.</p>',
                'image'             => 'activities/chasse_au_tresor_2010.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint Nicolas 2009',
                'slug'              => 'saint_nicolas_2009',
                'subtitle'          => 'Dimanche 6 décembre 2009',
                'content'           => 'Au parc Gallet',
                'image'             => 'activities/saint_nicolas_2009.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Calendrier de l\'avent',
                'slug'              => 'calendrier_de_lavent_2008',
                'subtitle'          => 'Lundi 1 décembre 2008 - Mercredi 31 décembre 2008',
                'content'           => '',
                'image'             => 'activities/calendrier_de_lavent_2008.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Les Vivamitiés - Helvetissima',
                'slug'              => 'les_vivamities_helvetissima_2007',
                'subtitle'          => 'Dimanche 1 avril 2007 - Dimanche 22 avril 2007',
                'content'           => '<p><strong>Helvetissima, au travers des clichés helvétiques, un événement sur les multiples aspects culturel de notre pays, un succès largement relayé par les médias, au-delà de nos frontières. </strong></p><p>S’il est parfois plus difficile de croire en ses propres valeurs et qualités qu’en celles des autres, après L’Italie et La Belgique, la population chaux-de-fonnière a eu l’occasion de se rassurer quant à sa créativité et à son énergie. Fondue géante, éclipse musicale, débat sur la lecture de l’heure, mode traditionnelle revisitée, röstis, concerts classiques, folkloriques ou rock ont balisés de moments intenses un mois riche en suisses-attitudes dans lesquelles chacun a pu se reconnaître et découvrir une énergie communicative.</p>',
                'image'             => 'activities/les_vivamities_helvetissima_2007.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint Nicolas 2006',
                'slug'              => 'saint_nicolas_2006',
                'subtitle'          => 'Mercredi 6 décembre 2006',
                'content'           => '',
                'image'             => 'activities/saint_nicolas_2006.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Saint-Sylvestre 2005',
                'slug'              => 'saint_sylvestre_2005',
                'subtitle'          => 'Samedi 31 décembre 2005',
                'content'           => '',
                'image'             => 'activities/saint_sylvestre_2005.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Vivanoël 2005',
                'slug'              => 'vivanoel_2005',
                'subtitle'          => 'Samedi 17 décembre 2005',
                'content'           => '',
                'image'             => 'activities/vivanoel_2005.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Les Vivamitiés - Flandres',
                'slug'              => 'vivamities_2004',
                'subtitle'          => 'Jeudi 1 avril 2004 - Vendredi 30 avril 2004',
                'content'           => '<h2>La Belgique et ses 3 communautés, Flandres-Wallonie-Bruxelles.</h2><p>L’occasion pour les chaux-de-fonniers de découvrir, au-delà des clichés, une région « jumelée » à la nôtre. Si la culture de la BD, du chocolat, du diamant et des moules – frites ne sont pas des légendes, comme ont pu le constater avec enthousiame les habitants de la région, ces semaines « belges » ont été autant d’occasions de reconnaître la créativité des Belges en matière d’arts : mode, cuisine et gastronomie, musique classique, populaire ou jazz, théatre, cinéma et humour.</p><p>Succès sur toute la ligne pour cette manifestation conviviale, ponctuée par une fabuleux final musical réunissant plus de 150 saxophonistes. L’engouement de la population par sa participation et son engagement n’est plus à prouver.</p>',
                'image'             => 'activities/vivamities_2004.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Calendrier de l\'avent 2002',
                'slug'              => 'calendrier_de_lavent_2002',
                'subtitle'          => 'Dimanche 1 décembre 2002 - Mardi 24 décembre 2002',
                'content'           => '',
                'image'             => 'activities/calendrier_de_lavent_2002.jpg',
                'is_published'      => true,
                'is_on_frontpage'   => false
            ],
            [
                'name'              => 'Les Vivamitiés - Italie',
                'slug'              => 'vivamities_2002',
                'subtitle'          => 'Mardi 1 octobre 2002 - Jeudi 31 octobre 2002',
                'content'           => '<h2>L’Italie est à l’honneur à La Chaux-de-Fonds.</h2><p>Plus de 50 événements ont lieu durant tout le mois d’octobre. Populaire ou plus intimiste chaque événement à connu le succès. Un risotto géant sur la place de la gare, des lectures de poésie italienne à la cave à mots, un stade de la charrière occupé par plus de 4000 spectateurs lors d’un match opposant La Suisse et L’Italie des M20, un plongeon dans l’univers de la mode, des conférences, des dégustations, des concerts, des expositions, les commerces, les restaurants, les écoles et la population dans son ensemble ont vécu un mois à l’heure italienne.</p><p>Tous ces moments forts ont permis de rappeller les liens étroits, qui unissent notre ville et la communauté transalpine dont le nombreux représentants en font aussi aujourd\'hui ce qu\'elle est.</p>',
                'image'             => 'activities/vivamities_2002.jpg',
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
                'image'         => 'partenaires/la_semeuse.jpg',
                'contribution'  => 20000,
                // 'end_date'      => '',
                'is_active'     => true
            ],
            [
                'name'          => 'Axa',
                'slug'          => 'axa',
                'image'         => 'partenaires/axa.jpg',
                'contribution'  => 45000,
                // 'end_date'      => '',
                'is_active'     => true
            ],
            [
                'name'          => 'Loterie Romande',
                'slug'          => 'loterie_romande',
                'image'         => 'partenaires/loterie_romande.png',
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
