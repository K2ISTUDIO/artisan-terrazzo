import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { ButtonLink } from "@/components/ui/Button";
import { CheckIcon } from "@/components/ui/Icons";
import { buildMetadata } from "@/lib/metadata";
import { JsonLd, organizationSchema } from "@/lib/schema";
import { clientReferences } from "@/data/references";

export const metadata: Metadata = buildMetadata({
  title: "Qui sommes-nous ? — Savoir-faire familial",
  description:
    "Découvrez l'histoire d'Artisan Terrazzo, entreprise familiale spécialisée dans le terrazzo, le granito et les réalisations sur mesure à Paris, en Île-de-France et partout en France.",
  path: "/qui-sommes-nous",
});

const gestes = [
  { n: "01", title: "Comprendre le support", detail: "Diagnostic de la dalle existante, de son état et de ses contraintes." },
  { n: "02", title: "Préparer", detail: "Traitement des points singuliers, ragréage, mise en place des joints." },
  { n: "03", title: "Composer", detail: "Choix du liant, des granulats et de la granulométrie." },
  { n: "04", title: "Couler", detail: "Mise en œuvre sur le chantier, en une ou plusieurs couches." },
  { n: "05", title: "Poncer", detail: "Plusieurs passes, de la plus grossière à la plus fine." },
  { n: "06", title: "Polir", detail: "Révéler la profondeur et le contraste des granulats." },
  { n: "07", title: "Protéger", detail: "Traitement de finition adapté à l'usage de la pièce." },
];

const matieres = [
  "Marbre",
  "Quartz",
  "Granulats naturels",
  "Granulats recyclés, lorsque techniquement appropriés",
  "Granulométries variées",
  "Pigments",
  "Teintes sur mesure",
  "Finition mate",
  "Finition satinée",
  "Finition brillante",
];

const valeurs = [
  { title: "Transmission", text: "Préserver les connaissances acquises au fil des années et les transmettre à la génération suivante." },
  { title: "Exigence", text: "Ne jamais considérer qu'un détail est trop petit pour mériter notre attention." },
  { title: "Matière", text: "Comprendre les matériaux avant de chercher à les transformer." },
  { title: "Durabilité", text: "Réaliser aujourd'hui des surfaces pensées pour accompagner les lieux pendant de nombreuses années." },
];

export default function QuiSommesNousPage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <Breadcrumbs items={[{ name: "Qui sommes-nous", path: "/qui-sommes-nous" }]} />

      {/* 1. HERO */}
      <section className="py-14 md:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-4">Qui sommes-nous</p>
            <h1 className="font-display text-4xl md:text-5xl text-ink text-balance leading-[1.08]">
              Une histoire de famille. Un savoir-faire de terrain.
            </h1>
            <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed max-w-xl">
              Depuis plusieurs générations, notre famille travaille les sols, les matières minérales et le terrazzo
              avec la même exigence : créer des surfaces uniques, durables et réalisées dans les règles de l&rsquo;art.
            </p>
            <p className="mt-4 text-base text-ink/70 leading-relaxed max-w-xl">
              Aujourd&rsquo;hui, Artisan Terrazzo perpétue cette transmission en accompagnant particuliers,
              architectes et grandes entreprises dans leurs projets en France.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ButtonLink href="#histoire">Découvrir notre savoir-faire</ButtonLink>
              <ButtonLink href="/demande-devis" variant="secondary">
                Nous confier un projet
              </ButtonLink>
            </div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/qui-sommes-nous/mains-composition.jpg"
              alt="Mains composant un mélange de terrazzo sur un chantier"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* 2. NOTRE HISTOIRE */}
      <section id="histoire" className="py-16 md:py-24 border-t border-line scroll-mt-20">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Notre histoire</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">
              Une histoire qui commence sur les chantiers
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone lg:sticky lg:top-28">
              <Image
                src="/images/qui-sommes-nous/atelier-equipe.jpg"
                alt="L'équipe au travail sur des compositions de terrazzo en atelier"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-base text-ink/75 leading-relaxed">
              <p>L&rsquo;histoire d&rsquo;Artisan Terrazzo ne commence pas derrière un bureau.</p>
              <p>Elle commence sur les chantiers.</p>
              <p>
                Dans notre famille, le métier s&rsquo;est transmis au fil des années par l&rsquo;observation, la
                pratique et le travail quotidien de la matière.
              </p>
              <p>
                Avant même que le terrazzo retrouve sa place dans les magazines de décoration, les hôtels, les
                boutiques et les projets d&rsquo;architectes, nous travaillions déjà les sols minéraux, le granito et
                les techniques de finition qui demandent patience et précision.
              </p>
              <p className="font-display text-xl text-ink italic">Le métier s&rsquo;apprend d&rsquo;abord avec les mains.</p>
              <p>
                Préparer correctement un support. Comprendre comment réagit une matière. Ajuster un mélange. Choisir
                la bonne granulométrie. Savoir quand commencer le ponçage. Reprendre une imperfection. Obtenir une
                surface homogène. Faire ressortir la profondeur des granulats au polissage.
              </p>
              <p>
                Ce sont ces détails qui font la différence entre une surface simplement réalisée et un terrazzo
                véritablement maîtrisé.
              </p>
              <p>Cette connaissance s&rsquo;est transmise de génération en génération.</p>
              <p>
                D&rsquo;abord en regardant faire.
                <br />
                Puis en aidant.
                <br />
                Puis en réalisant.
                <br />
                Et enfin en transmettant à son tour.
              </p>
              <p>Aujourd&rsquo;hui, Artisan Terrazzo est l&rsquo;expression contemporaine de cette histoire familiale.</p>
              <p>
                Nous utilisons les techniques, les outils et les solutions actuelles, mais nous conservons la même
                philosophie : respecter la matière, maîtriser chaque étape et ne jamais considérer le terrazzo comme
                un simple revêtement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DE PÈRE EN FILS */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">De père en fils</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Le même respect du métier
            </h2>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed">
              <p>Dans les métiers artisanaux, tout ne s&rsquo;apprend pas dans un manuel.</p>
              <p>
                Il existe des gestes, des réflexes et une manière de regarder un chantier que seule l&rsquo;expérience
                peut transmettre.
              </p>
              <p>Dans notre famille, les connaissances ont circulé naturellement d&rsquo;une génération à l&rsquo;autre.</p>
              <p>
                Un père montre.
                <br />
                Un fils observe.
                <br />
                Puis un jour, les rôles changent.
              </p>
              <p>
                La nouvelle génération apporte de nouvelles techniques, de nouveaux outils et une nouvelle approche
                esthétique, tandis que les fondamentaux restent les mêmes.
              </p>
              <p>
                Le respect du support.
                <br />
                La précision du geste.
                <br />
                La patience.
                <br />
                Et la volonté de laisser derrière nous un travail dont nous pouvons être fiers.
              </p>
              <p>C&rsquo;est cette continuité qui constitue aujourd&rsquo;hui l&rsquo;identité d&rsquo;Artisan Terrazzo.</p>
            </div>
            <blockquote className="mt-8 border-l-2 border-brass pl-5 font-display text-xl md:text-2xl text-ink text-balance italic">
              Notre métier ne consiste pas seulement à couler une matière. Il consiste à savoir ce qu&rsquo;elle va
              devenir.
            </blockquote>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/5] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/qui-sommes-nous/poncage-plan.jpg"
              alt="Artisan concentré sur le ponçage d'un plan en terrazzo"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. LE GESTE */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Méthode</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Le terrazzo est une succession de gestes
            </h2>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed mb-8">
              <p>Le résultat final dépend de chacune de ces étapes.</p>
              <p>Une erreur lors de la préparation peut apparaître bien plus tard.</p>
              <p>Un mélange mal équilibré peut modifier la lecture des granulats.</p>
              <p>Un ponçage trop précoce ou trop agressif peut transformer complètement la surface.</p>
              <p>
                C&rsquo;est pourquoi nous considérons chaque réalisation comme un processus complet plutôt que comme
                une simple pose.
              </p>
            </div>
            <ol className="divide-y divide-line border-t border-b border-line">
              {gestes.map((g) => (
                <li key={g.n} className="flex gap-5 py-4">
                  <span className="font-display text-2xl text-brass-dark/70 w-9 shrink-0">{g.n}</span>
                  <div>
                    <h3 className="text-base font-medium text-ink">{g.title}</h3>
                    <p className="mt-1 text-sm text-ink/60 leading-relaxed">{g.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-3xl overflow-hidden bg-stone lg:sticky lg:top-28">
            <Image
              src="/images/realisations/chantier-08.jpg"
              alt="Ponçage et finition d'un terrazzo sur chantier"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 5. L'EXPÉRIENCE */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone order-2 lg:order-1">
            <Image
              src="/images/qui-sommes-nous/chantier-grande-surface.jpg"
              alt="Équipe au travail sur un chantier de grande envergure"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Notre matière première</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              L&rsquo;expérience ne se voit pas toujours. Jusqu&rsquo;au moment où elle devient indispensable.
            </h2>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed">
              <p>Sur un chantier neuf et parfaitement préparé, beaucoup de choses semblent simples.</p>
              <p>Mais les projets les plus complexes racontent une autre histoire.</p>
              <p>
                Supports anciens. Différences de niveaux. Rénovation. Raccord avec une surface existante. Escaliers.
                Angles. Grandes surfaces. Contraintes architecturales. Réparation d&rsquo;un granito ancien.
              </p>
              <p>
                C&rsquo;est précisément dans ces situations que l&rsquo;expérience du terrain prend tout son sens.
              </p>
              <p className="font-display text-xl text-ink italic">
                Notre métier consiste autant à savoir réaliser qu&rsquo;à savoir anticiper.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LES MATIÈRES */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">La matière</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Des possibilités presque infinies
            </h2>
            <p className="text-base text-ink/75 leading-relaxed mb-8">
              Chaque composition peut être pensée en fonction d&rsquo;un espace, d&rsquo;une lumière ou d&rsquo;un
              projet architectural. Le terrazzo permet de travailler la matière comme une véritable palette.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
              {matieres.map((m) => (
                <li key={m} className="flex items-start gap-2.5 text-sm text-ink/75">
                  <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/qui-sommes-nous/granulats-selection.jpg"
              alt="Sélection de granulats avant composition d'un terrazzo"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 7. LES RÉFÉRENCES */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Nos références</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
                Des particuliers aux grandes signatures
              </h2>
              <p className="text-base text-ink/75 leading-relaxed">
                Au fil des projets, notre savoir-faire nous a amenés à intervenir dans des environnements très
                différents : résidences privées, commerces, projets tertiaires, espaces recevant du public et
                réalisations liées à de grands groupes. Cette diversité nous oblige à conserver la même exigence,
                qu&rsquo;il s&rsquo;agisse de quelques mètres carrés ou d&rsquo;un projet beaucoup plus important.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
              <Image
                src="/images/qui-sommes-nous/chantier-couloir.jpg"
                alt="Chantier de grande envergure en cours de finition"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-white p-10 md:p-14">
            <p className="text-xs uppercase tracking-[0.2em] text-mineral mb-10 text-center">Parmi nos références</p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10">
              {clientReferences.map((ref) => (
                <div key={ref.name} className="relative h-10 w-36 shrink-0">
                  <Image
                    src={ref.logo}
                    alt={ref.name}
                    fill
                    sizes="144px"
                    className="object-contain grayscale opacity-70 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-ink/60 text-center max-w-xl mx-auto leading-relaxed">
              Notre savoir-faire nous a notamment amenés à intervenir sur des projets liés à des acteurs tels que
              Hermès, Vinci, LVMH, Google ou l&rsquo;architecte d&rsquo;intérieur Pierre Yovanovitch. Chaque chantier
              reste avant tout une relation de confiance.
            </p>
          </div>
        </div>
      </section>

      {/* 8. MÊME NIVEAU D'EXIGENCE */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-11.jpg"
              alt="Sol en terrazzo dans une maison particulière"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Notre exigence</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Une grande référence ne change pas notre manière de travailler
            </h2>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed">
              <p>Travailler sur des projets exigeants nous a appris une chose : il n&rsquo;existe pas de petit détail.</p>
              <p>Mais notre niveau d&rsquo;exigence ne dépend pas du nom inscrit sur le dossier.</p>
              <p>Une cuisine dans une maison particulière mérite la même attention qu&rsquo;un projet commercial.</p>
              <p>Un plan de travail mérite la même précision qu&rsquo;un hall.</p>
              <p>Un escalier mérite la même qualité de finition qu&rsquo;une grande surface.</p>
              <p className="font-display text-xl text-ink italic">
                Le métier reste le même. Et notre engagement aussi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. PARTICULIERS */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Particuliers</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Chez vous, chaque détail compte
            </h2>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed">
              <p>
                Le terrazzo entre aujourd&rsquo;hui dans les cuisines, les salles de bains, les entrées, les salons
                et les escaliers.
              </p>
              <p>Nous accompagnons les particuliers depuis les premières réflexions jusqu&rsquo;à la réalisation.</p>
              <p>Couleur. Granulats. Dimensions. Finition. Contraintes techniques.</p>
              <p>Nous vous aidons à définir une solution cohérente avec votre intérieur et votre usage.</p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/contact">Parler de mon projet</ButtonLink>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-24.jpg"
              alt="Cuisine avec sol en terrazzo réalisée pour un particulier"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 10. ARCHITECTES */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-25.jpg"
              alt="Terrazzo sur mesure dans un projet d'architecte"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Architectes & architectes d&rsquo;intérieur</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Une matière au service de l&rsquo;architecture
            </h2>
            <p className="text-base text-ink/75 leading-relaxed mb-6">
              Nous apprécions particulièrement le travail avec les architectes et architectes d&rsquo;intérieur.
              Plans, références matières, teintes, échantillons, détails techniques ou intention esthétique : nous
              pouvons intervenir dès la phase d&rsquo;étude pour transformer une intention en solution réalisable.
            </p>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-8">
              {["Études techniques", "Échantillons", "Prototypes", "Choix des granulats", "Couleurs personnalisées", "Métrés", "Contraintes chantier", "Détails architecturaux"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <ButtonLink href="/architectes">Nous soumettre un projet</ButtonLink>
          </div>
        </div>
      </section>

      {/* 11. ENTREPRISES / HÔTELS / COMMERCES */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Entreprises, hôtels, restaurants, commerces</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Des surfaces pensées pour être belles. Et pour être utilisées.
            </h2>
            <ul className="space-y-2.5">
              {["Trafic important", "Contraintes de planning", "Durabilité", "Entretien simplifié", "Identité architecturale", "Grandes surfaces", "Coordination avec les autres corps d'état"].map(
                (item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <CheckIcon className="w-4 h-4 text-brass-dark shrink-0 mt-0.5" />
                    {item}
                  </li>
                )
              )}
            </ul>
            <div className="mt-8">
              <ButtonLink href="/entreprise-terrazzo" variant="secondary">
                Découvrir nos solutions professionnelles
              </ButtonLink>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/qui-sommes-nous/chantier-commerce.jpg"
              alt="Équipe au travail sur un sol terrazzo dans un espace commercial en construction"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 12. PLAN DE TRAVAIL TERRAZZO */}
      <section className="py-16 md:py-24 border-t border-line">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-stone">
            <Image
              src="/images/realisations/chantier-02.jpg"
              alt="Plan de travail en terrazzo aux granulats colorés"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Mobilier sur mesure</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance mb-6">
              Le terrazzo jusque dans le mobilier
            </h2>
            <p className="text-base text-ink/75 leading-relaxed mb-4">Notre métier ne s&rsquo;arrête pas aux sols.</p>
            <p className="text-base text-ink/75 leading-relaxed mb-6">
              Nous réalisons également des plans de travail, plans vasques, îlots et éléments sur mesure en
              terrazzo. Ces pièces permettent de prolonger la matière dans l&rsquo;architecture intérieure et de
              créer une véritable continuité visuelle.
            </p>
            <ButtonLink href="/plan-de-travail-terrazzo">Découvrir nos plans de travail</ButtonLink>
          </div>
        </div>
      </section>

      {/* 13. NOS VALEURS */}
      <section className="py-16 md:py-24 border-t border-line bg-bone-dark/40">
        <div className="container-page">
          <div className="max-w-2xl mb-12">
            <p className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-3">Nos valeurs</p>
            <h2 className="font-display text-3xl md:text-4xl text-ink text-balance">Ce qui guide chaque chantier</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valeurs.map((v, i) => (
              <div key={v.title} className="border-t-2 border-brass pt-5">
                <span className="font-display text-2xl text-stone">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 text-lg font-medium text-ink">{v.title}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 14. NOTRE SIGNATURE */}
      <section className="relative py-20 md:py-32 border-t border-line overflow-hidden bg-anthracite terrazzo-texture">
        <div className="container-page relative text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-brass-light mb-6">Notre signature</p>
          <h2 className="font-display text-3xl md:text-5xl text-bone text-balance max-w-3xl mx-auto leading-[1.15]">
            Créer des surfaces que l&rsquo;on regarde aujourd&rsquo;hui et que l&rsquo;on conservera demain.
          </h2>
          <div className="mt-8 max-w-xl mx-auto space-y-4 text-base text-bone/70 leading-relaxed text-left sm:text-center">
            <p>Certaines tendances passent. Les belles matières restent.</p>
            <p>
              Notre ambition n&rsquo;est pas de produire le plus grand nombre de mètres carrés. Elle est de réaliser
              des projets dont la qualité se révèle dans le temps.
            </p>
            <p>Une surface minérale possède quelque chose d&rsquo;unique : elle fait partie de l&rsquo;architecture.</p>
            <p>Elle vieillit avec le lieu. Elle porte les traces d&rsquo;une époque.</p>
            <p>
              Et lorsque le travail a été correctement réalisé, elle peut traverser les années sans perdre son
              caractère.
            </p>
          </div>
        </div>
      </section>

      {/* 15. CTA FINAL */}
      <CTASection
        title="Parlons de votre projet"
        description="Vous avez un projet de terrazzo, granito, rénovation ou plan de travail ? Présentez-nous votre projet en quelques minutes. Nous étudierons sa faisabilité et les solutions techniques adaptées."
        primaryLabel="Demander une étude de projet"
        secondaryLabel="Voir nos réalisations"
        secondaryHref="/realisations"
        dark={false}
      />

      {/* Maillage interne */}
      <section className="py-14 border-t border-line">
        <div className="container-page">
          <h2 className="text-xs uppercase tracking-[0.2em] text-brass-dark mb-5">Pour aller plus loin</h2>
          <ul className="flex flex-wrap gap-3">
            {[
              { label: "Terrazzo coulé sur place", href: "/terrazzo-coule" },
              { label: "L'artisan à Paris", href: "/artisan-terrazzo-paris" },
              { label: "Le granito", href: "/granito" },
              { label: "Plans de travail terrazzo", href: "/plan-de-travail-terrazzo" },
              { label: "Rénovation de terrazzo", href: "/renovation-terrazzo" },
              { label: "Nos réalisations", href: "/realisations" },
              { label: "Demander une étude", href: "/demande-devis" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2.5 text-sm text-ink/80 hover:text-ink hover:border-brass/40 transition-colors duration-200 focus-ring"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
