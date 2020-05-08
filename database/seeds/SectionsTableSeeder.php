<?php

use App\Section;
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
                'page_id' => 1,
                'name' => 'Présentation',
                'slug' => 'presentation',
                'image' => 'presentation.jpg',
                'content' => "L’Association <b>Vivre La Chaux-de-Fonds</b> a été créée en 2000/2001 et elle est active depuis cette période. A ce jour, elle a déjà organisé plus de 150 événements dont les Vivamitiés avec un regard sur l’Italie en 2002, Wallonie-Flandres-Bruxelles Capitale en 2004, Helvetissima et ses suissitudes en 2007, ainsi qu’une multitude d’autres manifestations impliquant l’ensemble des ressortissants des montagnes neuchâteloises mais aussi des communautés étrangères.<br />L’Association compte actuellement plus de 500 bénévoles qui mettent à sa disposition leurs compétences et savoir-faire. Ce sont environ 7000 heures de bénévolat annuel que l’Association peut relever.<br />Cette Association, à but non lucratif a pour buts de <br />
                <ul>
                <li>favoriser le développement de l’image des montagnes neuchâteloises et de La Chaux-de-Fonds/Le Locle en particulier;</li><li>de promouvoir le développement et l'extension du commerce local par l'organisation de manifestations adéquates;</li><li>de développer l'extension de toutes les activités de nature à animer la ville: entreprises commerciales, artisanales, financières, industrielles et de services, professions libérales, animations culturelles, etc.;</li><li>de resserrer les liens de solidarité qui doivent unir tous les milieux concernés;</li><li>d'assurer la liaison et la collaboration avec les autres institutions travaillant à la défense des intérêts généraux de la cité.</li><br />Vous trouverez tous les renseignements concernant notre association dans ses statuts, sur ce site ainsi qu’un résumé des différents paramètres dans menu Manifestations",
            ],
            [
                'page_id' => 1,
                'name' => 'Cotisations annuelles',
                'slug' => 'cotisations',
                'image' => 'cotisation.jpg',
                'content' => "L’assemblée générale a la compétence de prévoir une cotisation annuelle et en fixe le montant.<br />
                Actuellement, le barème des cotisations annuelles est le suivant:<br /><b>Personnes individuelle, particulier:</b><br />
                Cotisation annuelle minimale de CHF 50.–, sans plafonnement.<br /><b>Sociétés locales, associations:</b><br />
                Cotisation annuelle de CHF 100.– sans plafonnement.<br /><b>Entreprises morales:</b><br />
                Cotisation annuelle minimale de CHF 250.– sans plafonnement<br /><nuxt-link to='/devenir-membre'>Adhérer</nuxt-link>",
            ],
            [
                'page_id' => 1,
                'name' => 'Historique',
                'slug' => 'historique',
                'image' => 'historique.jpg',
                'content' => "Il y a plus de 25 ans, naissait une association ayant pour but la mise en commun des forces commerciales de la cité horlogère.<br />
                Très rapidement, faute de combattants, cette dernière périclita faute d’avoir su déterminer des objectifs communs à l’ensemble du commerce chaux-de-fonnier.<br />
                En 1999/2000, Monsieur Charles Augsburger, alors Président de la ville de La Chaux-de-Fonds, réunissait des membres de toutes les entités commerciales connues à La Chaux-de-Fonds afin de relancer l’idée d’une association ayant pour objectif non seulement le développement commercial, mais aussi le rayonnement de la cité au dehors de ces frontières.<br />
                C’est ainsi que le 16 février 2001, après une année de discussion et de formation d’un réseau avec l’ensemble des groupements professionnels que naquit l’Association Vivre La Chaux-de-Fonds. Forte d’un comité de 14 membre, représentant l’Association des grands magasins, du Commerce indépendant du détail, de membres des sociétés locales, du service économique de la ville ainsi que d’autre personnes œuvrant dans le secteur bancaire, de la construction, ou autres enseignes commerciales régionales.<br />
                Les séances se déroulaient alors dans la salle des commissions du 13ème étage de la tour Espacité.<br />
                En 2004, L’association prend son envol seule, sans le soutien de la ville et de la chancellerie communale. Elle doit maintenant évoluer seule et s’auto financer. Les premières recherches de membres soutiens se développent pour arriver au résultat que l’on connaît maintenant.",
            ],
            [
                'page_id' => 1,
                'name' => 'Le Comité',
                'slug' => 'le-comite',
                'image' => 'comite.jpg',
                'content' => "<b>Le comité</b> est composé de 5 membres au minimum, représentatifs de milieux différents.<br />Le comité comprend au moins:<br />
                <ul>
                    <li>une personne à la présidence,</li>
                    <li>deux à la vice-présidence,</li>
                    <li>une personne en tant que secrétaire,</li>
                    <li>une personne à la trésorerie.</li>
                </ul>
                Il est actuellement composé de la manière suivante :
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
                'page_id' => 1,
                'name' => 'Statuts',
                'slug' => 'statuts',
                'image' => 'statuts.jpg',
                'content' => "",
            ],
            [
                'page_id' => 2,
                'name' => 'Dossier de presse',
                'slug' => 'dossier-de-presse',
                'image' => '',
                'content' => "<table>
                    <tr>
                        <th>Fichier attaché</th>
                        <th>Taille</th>
                    </tr>
                    <tr>
                        <td>2015 - Bilan Saint-Nicolas</td>
                        <td>217.3 Ko</td>
                    </tr>
                </table>",
            ],
            [
                'page_id' => 2,
                'name' => 'Bulletin/VivInfo',
                'slug' => 'bulletin-vivinfo',
                'image' => '',
                'content' => "",
            ],
            [
                'page_id' => 2,
                'name' => 'PV Assemblées Générales',
                'slug' => 'pv-assemblees-generales',
                'image' => '',
                'content' => "",
            ],
            [
                'page_id' => 3,
                'name' => 'Devenir bénévole',
                'slug' => 'devenir-benevole',
                'image' => 'benevole.jpg',
                'content' => "Le Bénévolat est la clé de voute de notre édifice.<br />

                Sans ce volontariat, notre association n’aurait pas les moyens de mettre en œuvre ce qu’elle réalise depuis plus de 10 ans.<br />

                Nous avons besoin de vous tous, experts ou bricoleurs, stratèges ou petites mains votre savoir-faire et pour nous tous gage de réussite<br />

                Alors n’hésitez pas ! Vous désirez vous investir à nos côtés, partager vos expériences ? Intégrer une commission de travail ? Marketing ? Finances ? Programmation ? Logistique ? Etc.,<br />

                Le V de Vivre La Chaux-de-Fonds est également mis en place pour Valoriser, Valider et garantir la Visibilité des bénévoles. C’est une activité non rétribuée et librement consentie qui s’exercent habituellement au sein d’organisation sans buts lucratifs telle que l’Association Vivre La Chaux-de-Fonds.<br />

                L’étymologie du mot vient du latin « benevolus » qui signifie « bonne volonté ».<br />

                Contactez-nous à notre adresse contact@vlcf.ch ou par écrit à l’adresse que vous trouverez dans l’onglet Contacts.<br />

                Nous nous réjouissons d’ores et déjà de construire des futurs événements en votre compagnie.<br />
                Formulaire adhésion (PDF)",
            ],
            [
                'page_id' => 3,
                'name' => 'Devenir membre',
                'slug' => 'devenir-membre',
                'image' => 'membre.jpg',
                'content' => "Peuvent être membres de l’Association Vivre La Chaux-de-Fonds, à condition d’avoir des buts pleinement compatibles avec ceux de l’Association :

                <ol>
                    <li>toute personne physique majeure exerçant ou non son activité professionnelle sur le territoire de la ville de La Chaux-de-Fonds ;</li>
                    <li>toute association (loisir, sportive, culturelle, etc.) et toute personne morale au sens de notre code des obligations (entreprise, association professionnelle, etc.) ;</li>
                    <li>des collectivités publiques.</li>
                </ol>
                L’association peut également comprendre des membres d’honneur et d’autres membres exerçant leurs activités en dehors du territoire communal.<br />

                Toute personne répondant aux conditions fixées ci-dessus présente une demande d’admission écrite, qui comporte l’adhésion aux présents statuts. Le comité est compétent pour se prononcer sur les demandes d’admission. En cas de refus d’une demande, il peut y avoir recours à l’assemblée générale.<br />
                Adhésion entreprises/collectivités (PDF)<br />
                Adhésion individuelle (PDF)",
            ],
            [
                'page_id' => NULL,
                'name' => 'Partenariat',
                'slug' => 'partenariat',
                'image' => 'partenariat.jpg',
                'content' => "Comme son nom l’indique, le partenariat est un engagement plus énergique que le sponsoring qui le plus souvent désigne un soutien financier ou matériel apporté à un événement par un annonceur en échange de différentes formes de visibilité.<br />

                Nous cherchons à développer cette notion d’énergie au travers de partenariat sérieux, ou l’un et l’autre des répondants manifeste sa volonté ferme de mettre en valeur nos performances conjointes afin de mettre en exergues les forces et l’énergie des partenaires.<br />

                Dans la définition de partenaire, nous recherchons également le transfert d’images positives en fonction du type d’événement et des valeurs qui lui sont associées.<br />

                Outre les différentes formes de visibilité à vocations publicitaires, le contrat de partenariat peut prévoir la participation de l’un ou l’autre des mandants à différents événements de l’événement.<br />

                Nous contacter à ce propos<br />

                Nos fidèles partenaires vous dévoilent pourquoi ils ont choisis l’Association Vivre La Chaux-de-Fonds comme support de communication :",
            ],
        ];

        foreach ($sections as $section) {
            Section::create($section);
        }
    }
}
