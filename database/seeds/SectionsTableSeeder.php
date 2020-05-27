<?php

use App\Section;
// use DB;
use Illuminate\Database\Seeder;

class SectionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $sections = [
            [
                // 'page_id' => 1,
                'name' => 'Bienvenue',
                'slug' => 'bienvenue',
                'image' => '',
                'content' => '<h3 style="text-align: center;"><span style="color: #E1B124;">L’Association</span> Vivre La Chaux-de-Fonds <span style="color: #E1B124;">vous souhaite une cordiale bienvenue</span></h3>
                <h5 style="text-align: center;">
                    Favoriser le développement et l’animation de la ville de La Chaux-de-Fonds, créer des ponts, tisser des liens entre les différents milieux actifs en ville et la population,
                    tels sont les buts principaux de l’Association Vivre La Chaux-de-Fonds.
                </h5>',
            ],
            [
                // 'page_id' => 1,
                'name' => 'Informations',
                'slug' => 'informations',
                'image' => '',
                'content' => '<h3 style="text-align: center;">Assemblée Générale 2020</h3>Nous avons le regret de vous informer que notre Assemblée générale prévue le 28 avril 2020 est annulée et décalée pour une date encore inconnue.<br />

                Nous ne manquerons pas de vous informer de la suite dès que sera passée cette crise sanitaire. Le comité vous souhaite courage pour cette épreuve!<br />

                Meilleures salutations.',
            ],
            [
                // 'page_id' => 2,
                'name' => 'Présentation',
                'slug' => 'presentation',
                'image' => 'pages/presentation.jpg',
                'content' => "L’Association <b>Vivre La Chaux-de-Fonds</b> a été créée en 2000/2001 et elle est active depuis cette période. A ce jour, elle a déjà organisé plus de 150 événements dont les Vivamitiés avec un regard sur l’Italie en 2002, Wallonie-Flandres-Bruxelles Capitale en 2004, Helvetissima et ses suissitudes en 2007, ainsi qu’une multitude d’autres manifestations impliquant l’ensemble des ressortissants des montagnes neuchâteloises mais aussi des communautés étrangères.<br /><br />
                L’Association compte actuellement plus de 500 bénévoles qui mettent à sa disposition leurs compétences et savoir-faire. Ce sont environ 7000 heures de bénévolat annuel que l’Association peut relever.<br /><br />
                Cette Association, à but non lucratif a pour buts de <br /><br />
                <ul>
                <li>favoriser le développement de l’image des montagnes neuchâteloises et de La Chaux-de-Fonds/Le Locle en particulier;</li><li>de promouvoir le développement et l'extension du commerce local par l'organisation de manifestations adéquates;</li><li>de développer l'extension de toutes les activités de nature à animer la ville: entreprises commerciales, artisanales, financières, industrielles et de services, professions libérales, animations culturelles, etc.;</li><li>de resserrer les liens de solidarité qui doivent unir tous les milieux concernés;</li><li>d'assurer la liaison et la collaboration avec les autres institutions travaillant à la défense des intérêts généraux de la cité.</li>
                </ul>
                <br />
                Vous trouverez tous les renseignements concernant notre association dans ses statuts, sur ce site ainsi qu’un résumé des différents paramètres dans menu Manifestations",
            ],
            [
                // 'page_id' => 2,
                'name' => 'Cotisations annuelles',
                'slug' => 'cotisations',
                'image' => 'pages/cotisation.jpg',
                'content' => "L’assemblée générale a la compétence de prévoir une cotisation annuelle et en fixe le montant.<br />
                Actuellement, le barème des cotisations annuelles est le suivant:<br /><b>Personnes individuelle, particulier:</b><br />
                Cotisation annuelle minimale de CHF 50.–, sans plafonnement.<br /><br /><b>Sociétés locales, associations:</b><br />
                Cotisation annuelle de CHF 100.– sans plafonnement.<br /><br /><b>Entreprises morales:</b><br />
                Cotisation annuelle minimale de CHF 250.– sans plafonnement<br /><br /><br /><router-link to='/devenir-membre'>Adhérer</router-link>",
            ],
            [
                // 'page_id' => 2,
                'name' => 'Historique',
                'slug' => 'historique',
                'image' => 'pages/historique.jpg',
                'content' => "Il y a plus de 25 ans, naissait une association ayant pour but la mise en commun des forces commerciales de la cité horlogère.<br /><br />

                Très rapidement, faute de combattants, cette dernière périclita faute d’avoir su déterminer des objectifs communs à l’ensemble du commerce chaux-de-fonnier.<br /><br />

                En 1999/2000, Monsieur Charles Augsburger, alors Président de la ville de La Chaux-de-Fonds, réunissait des membres de toutes les entités commerciales connues à La Chaux-de-Fonds afin de relancer l’idée d’une association ayant pour objectif non seulement le développement commercial, mais aussi le rayonnement de la cité au dehors de ces frontières.<br /><br />

                C’est ainsi que le 16 février 2001, après une année de discussion et de formation d’un réseau avec l’ensemble des groupements professionnels que naquit l’Association Vivre La Chaux-de-Fonds. Forte d’un comité de 14 membre, représentant l’Association des grands magasins, du Commerce indépendant du détail, de membres des sociétés locales, du service économique de la ville ainsi que d’autre personnes œuvrant dans le secteur bancaire, de la construction, ou autres enseignes commerciales régionales.<br /><br />

                Les séances se déroulaient alors dans la salle des commissions du 13ème étage de la tour Espacité.<br />
                En 2004, L’association prend son envol seule, sans le soutien de la ville et de la chancellerie communale. Elle doit maintenant évoluer seule et s’auto financer. Les premières recherches de membres soutiens se développent pour arriver au résultat que l’on connaît maintenant.",
            ],
            [
                // 'page_id' => 2,
                'name' => 'Le Comité',
                'slug' => 'le-comite',
                'image' => 'pages/comite.jpg',
                'content' => "<b>Le comité</b> est composé de 5 membres au minimum, représentatifs de milieux différents.<br /><br />

                Le comité comprend au moins:<br /><br />

                <ul>
                    <li>une personne à la présidence,</li>
                    <li>deux à la vice-présidence,</li>
                    <li>une personne en tant que secrétaire,</li>
                    <li>une personne à la trésorerie.</li>
                </ul>
                Il est actuellement composé de la manière suivante:<br /><br />

                <ul>
                    <li>Musitelli Delio, Président</li>
                    <li>Andrea Moretti, Vice-président</li>
                    <li>Michel Ponti, Secrétaire général</li>
                    <li>Charles-André Comtesse, Secrétaire général</li>
                    <li>Benoist Vaucher, Responsable gastro, Trésorier</li>
                    <li>Othenin-Girard Michael, Responsable communication</li>
                    <li>Jonathan Marty,</li>
                    <li>Pascal Ruedi  Responsable gastro, Trésorier</li>
                    <li>Carlos Lima,  Webmaster</li>
                    <li>Bühler Mélina Responsable communication</li>
                    <li>Patricia Dos Santos,  Responsable communication</li>
                </ul>
                Les membres du comité directeur pilotent des sous-commissions lorsqu’elles s’avèrent nécessaires à la réalisation d’un événement.",
            ],
            [
                // 'page_id' => 2,
                'name' => 'Statuts',
                'slug' => 'statuts',
                'image' => 'pages/statuts.jpg',
                'content' => '<div style="text-align: center;"><span style="font-size: 1rem;">Télécharger les statuts de l\'Association&nbsp;</span><a href="/documents/VLCF_Statuts.pdf" type="application/pdf" title="VLCF_Statuts" target="_blank" style="font-size: 1rem;">Statuts (PDF)</a><span style="font-size: 1rem;">.</span></div>',
            ],
            [
                // 'page_id' => 3,
                'name' => 'Dossier de presse',
                'slug' => 'dossier-de-presse',
                'image' => '',
                'content' => '
                <div><b>Fichier attaché</b>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<b>Taille</b></div><div><a href="http://vivre-la-chaux-de-fonds.test/documents/Dossiers%20de%20presse/2015%20-%20Bilan%20Saint-Nicolas.pdf" type="application/pdf" title="Dossiers de presse/2015 - Bilan Saint-Nicolas" target="_blank" style="">2015 - Bilan Saint-Nicolas</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;222 Ko<b><br></b></div><div><a href="/documents/Dossiers de presse/2010 - Affiche Jacques Sandoz.pdf" type="application/pdf" title="Dossiers de presse/2010 - Affiche Jacques Sandoz" target="_blank">2010 - Affiche Jacques Sandoz</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1227 Ko</div><div><a href="http://vivre-la-chaux-de-fonds.test/documents/Dossiers%20de%20presse/2012%20-%20Programme%20Jacques%20Sandoz.pdf" type="application/pdf" title="Dossiers de presse/2012 - Programme Jacques Sandoz" target="_blank" style="">2012 - Programme Jacques Sandoz</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;3406 Ko<br></div><div><a href="http://vivre-la-chaux-de-fonds.test/documents/Dossiers%20de%20presse/2012%20-%20Communique%CC%81%20Jacques%20Sandoz.pdf" type="application/pdf" title="Dossiers de presse/2012 - Communiqué Jacques Sandoz" target="_blank" style="">2012 - Communiqué Jacques Sandoz</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;226 Ko<br></div><div><a href="/documents/Dossiers de presse/2011 - Avent.pdf" type="application/pdf" title="Dossiers de presse/2011 - Avent" target="_blank">2011 - Avent</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1460 Ko</div><div><a href="/documents/Dossiers de presse/2011 - Noel dans tous les sens.pdf" type="application/pdf" title="Dossiers de presse/2011 - Noel dans tous les sens" target="_blank">2011 - Noël dans tous les sens</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2081 Ko</div><div><a href="/documents/Dossiers de presse/2011 - Plaquette gala.pdf" type="application/pdf" title="Dossiers de presse/2011 - Plaquette gala" target="_blank">2011 - Plaquette gala</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;768 Ko</div><div><a href="/documents/Dossiers de presse/2012 - Affiche Jacques Sandoz.pdf" type="application/pdf" title="Dossiers de presse/2012 - Affiche Jacques Sandoz" target="_blank">2012 - Affiche Jacques Sandoz</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1227 Ko</div>',
            ],
            [
                // 'page_id' => 3,
                'name' => 'Bulletin/VivInfo',
                'slug' => 'bulletin-vivinfo',
                'image' => '',
                'content' => '<div><span style="font-weight: bolder;">Fichier attaché</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-weight: bolder;">Taille</span></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2016.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2016" target="_blank">Vivinfo 2016</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-size: 1rem;">2700 Ko</span><span style="font-size: 1rem;"><br></span></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2015.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2015" target="_blank">Vivinfo 2015</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1153 Ko<span style="font-size: 1rem;"><br></span></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2014.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2014" target="_blank">Vivinfo 2014</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;<span style="font-size: 1rem;">1464</span><span style="font-size: 1rem;">&nbsp;Ko</span><br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2013.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2013" target="_blank">Vivinfo 2013</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 401 Ko<span style="font-size: 1rem;"><br></span></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2012.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2012" target="_blank">Vivinfo 2012</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1297 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2011.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2011" target="_blank">Vivinfo 2011</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 6252 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2010.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2010" target="_blank">Vivinfo 2010</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 4010 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2007_1.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2007_1" target="_blank">Vivinfo 2007_1</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1532 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2007_2.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2007_2" target="_blank">Vivinfo 2007_2</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;1918 Ko</div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2006_1.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2006_1" target="_blank">Vivinfo 2006_1</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;350 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2006_2.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2006_2" target="_blank">Vivinfo 2006_2</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;300 Ko<br></div><div><a href="http://vivre-la-chaux-de-fonds.test/documents/Bulletins%20Vivinfo/Vivinfo%202006_3.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2006_3" target="_blank" style="">Vivinfo 2006_3</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;794 Ko<br></div><div><a href="/documents/Bulletins Vivinfo/Vivinfo 2005.pdf" type="application/pdf" title="Bulletins Vivinfo/Vivinfo 2005" target="_blank">Vivinfo 2005</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 254 Ko<br></div>',
            ],
            [
                // 'page_id' => 3,
                'name' => 'PV Assemblées Générales',
                'slug' => 'pv-assemblees-generales',
                'image' => '',
                'content' => '<div><span style="font-weight: bolder;">Fichier attaché</span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span style="font-weight: bolder;">Taille</span></div><div><a href="/documents/PV Assembées Générales/PV AG 2018.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2018" target="_blank">PV AG 2018</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 508 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2017.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2017" target="_blank">PV AG 2017</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 1201 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2015.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2015" target="_blank">PV AG 2015</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 289 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2014.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2014" target="_blank">PV AG 2014</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 259 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2013.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2013" target="_blank">PV AG 2013</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 301 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2012.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2012" target="_blank" style=" font-size: 1rem;">PV AG 2012</a><span style="font-size: 1rem;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 158 Ko</span></div><div><a href="/documents/PV Assembées Générales/PV AG 2011.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2011" target="_blank">PV AG 2011</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 61 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2010.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2010" target="_blank">PV AG 2010</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 102 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2009.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2009" target="_blank">PV AG 2009</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 24 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2008.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2008" target="_blank">PV AG 2008</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 19 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2007.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2007" target="_blank">PV AG 2007</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 60 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2006.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2006" target="_blank">PV AG 2006</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 98 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2005.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2005" target="_blank">PV AG 2005</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 87 Ko<br></div><div><a href="/documents/PV Assembées Générales/PV AG 2004.pdf" type="application/pdf" title="PV Assembées Générales/PV AG 2004" target="_blank">PV AG 2004</a>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 85 Ko<br></div>',
            ],
            [
                // 'page_id' => 4,
                'name' => 'Devenir bénévole',
                'slug' => 'devenir-benevole',
                'image' => 'pages/benevole.jpg',
                'content' => 'Le Bénévolat est la clé de voute de notre édifice.<br /><br />

                Sans ce volontariat, notre association n’aurait pas les moyens de mettre en œuvre ce qu’elle réalise depuis plus de 10 ans.<br /><br />

                Nous avons besoin de vous tous, experts ou bricoleurs, stratèges ou petites mains votre savoir-faire et pour nous tous gage de réussite<br /><br />

                Alors n’hésitez pas ! Vous désirez vous investir à nos côtés, partager vos expériences ? Intégrer une commission de travail ? Marketing ? Finances ? Programmation ? Logistique ? Etc.,<br /><br />

                Le <b>V</b> de Vivre La Chaux-de-Fonds est également mis en place pour Valoriser, Valider et garantir la Visibilité des bénévoles. C’est une activité non rétribuée et librement consentie qui s’exercent habituellement au sein d’organisation sans buts lucratifs telle que l’Association Vivre La Chaux-de-Fonds.<br /><br />

                L’étymologie du mot vient du latin « benevolus » qui signifie « bonne volonté ».<br /><br />

                Contactez-nous à notre adresse contact@vlcf.ch ou par écrit à l’adresse que vous trouverez dans l’onglet <router-link to="/contact">Contact</router-link>.<br /><br />

                Nous nous réjouissons d’ores et déjà de construire des futurs événements en votre compagnie.<br />
                ><a href="/documents/Formulaires/formulaire_adhesion_benevole.pdf" type="application/pdf" title="Formulaire d\'adhésion bénévole" target="_blank">Formulaire adhésion (PDF)</a>.',
            ],
            [
                // 'page_id' => 4,
                'name' => 'Devenir membre',
                'slug' => 'devenir-membre',
                'image' => 'pages/membre.jpg',
                'content' => 'Peuvent être membres de l’Association Vivre La Chaux-de-Fonds, à condition d’avoir des buts pleinement compatibles avec ceux de l’Association:<br />

                <ol>
                    <li>toute personne physique majeure exerçant ou non son activité professionnelle sur le territoire de la ville de La Chaux-de-Fonds ;</li>
                    <li>toute association (loisir, sportive, culturelle, etc.) et toute personne morale au sens de notre code des obligations (entreprise, association professionnelle, etc.) ;</li>
                    <li>des collectivités publiques.</li>
                </ol>
                L’association peut également comprendre des membres d’honneur et d’autres membres exerçant leurs activités en dehors du territoire communal.<br /><br />

                Toute personne répondant aux conditions fixées ci-dessus présente une demande d’admission écrite, qui comporte l’adhésion aux présents statuts. Le comité est compétent pour se prononcer sur les demandes d’admission. En cas de refus d’une demande, il peut y avoir recours à l’assemblée générale.<br /><br />

                <a href="/documents/Formulaires/formulaire_adhesion_entreprise_collectivites.pdf" type="application/pdf" title="Formulaire d\'adhésion Entreprise-Collectivités" target="_blank">Formulaire adhésion Entreprise-Collectivités (PDF)</a><br /><br />

                <a href="/documents/Formulaires/formulaire_adhesion_individuelle.pdf" type="application/pdf" title="Formulaire d\'adhésion individuelle" target="_blank">Formulaire adhésion individuelle (PDF)</a>',
            ],
            [
                // 'page_id' => 4,
                'name' => 'Partenariat',
                'slug' => 'partenariat',
                'image' => 'pages/partenariat.jpg',
                'content' => 'Comme son nom l’indique, le partenariat est un engagement plus énergique que le sponsoring qui le plus souvent désigne un soutien financier ou matériel apporté à un événement par un annonceur en échange de différentes formes de visibilité.<br /><br />

                Nous cherchons à développer cette notion d’énergie au travers de partenariat sérieux, ou l’un et l’autre des répondants manifeste sa volonté ferme de mettre en valeur nos performances conjointes afin de mettre en exergues les forces et l’énergie des partenaires.<br /><br />

                Dans la définition de partenaire, nous recherchons également le transfert d’images positives en fonction du type d’événement et des valeurs qui lui sont associées.<br /><br />

                Outre les différentes formes de visibilité à vocations publicitaires, le contrat de partenariat peut prévoir la participation de l’un ou l’autre des mandants à différents événements de l’événement.<br /><br />

                <router-link to="/contact">Nous contacter à ce propos</router-link><br /><br />

                Nos fidèles partenaires vous dévoilent pourquoi ils ont choisis l’Association Vivre La Chaux-de-Fonds comme support de communication.',
            ],
        ];

        foreach ($sections as $section) {
            Section::create($section);
        }

        $pageSections = [
            [
                'page_id' => 1,
                'section_id' => 1,
            ],
            [
                'page_id' => 1,
                'section_id' => 2,
            ],
            [
                'page_id' => 2,
                'section_id' => 3,
            ],
            [
                'page_id' => 2,
                'section_id' => 4,
            ],
            [
                'page_id' => 2,
                'section_id' => 5,
            ],
            [
                'page_id' => 2,
                'section_id' => 6,
            ],
            [
                'page_id' => 2,
                'section_id' => 7,
            ],
            [
                'page_id' => 3,
                'section_id' => 8,
            ],
            [
                'page_id' => 3,
                'section_id' => 9,
            ],
            [
                'page_id' => 3,
                'section_id' => 10,
            ],
            [
                'page_id' => 4,
                'section_id' => 11,
            ],
            [
                'page_id' => 4,
                'section_id' => 12,
            ],
            [
                'page_id' => 4,
                'section_id' => 13,
            ],
        ];

        foreach ($pageSections as $pageSection) {
            DB::table('page_section')->insert([
                'page_id' => $pageSection['page_id'],
                'section_id' => $pageSection['section_id'],
            ]);
        }

    }
}
