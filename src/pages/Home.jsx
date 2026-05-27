import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import PieceCard from "../components/PieceCard";
import ProcessTimeline from "../components/ProcessTimeline";
import JournalCard from "../components/JournalCard";
import FaqAccordion from "../components/FaqAccordion";
import {
  bespokeContent,
  faqs,
  finalMessage,
  founderStory,
  heroContent,
  journalFeatures,
  legacyStories,
  philosophy,
  processSteps,
} from "../data/siteContent";
import { collections, pieces } from "../data/pieces";
import { media } from "../utils/localMedia";
import { fadeUp } from "../utils/motion";

function HomePage() {
  const featuredPieces = pieces.slice(0, 3);
  const featuredCollections = collections.slice(0, 3);

  return (
    <>
      <section className="section-shell pb-14 pt-8 sm:pt-12">
        <div className="section-frame">
          <motion.div
            {...fadeUp}
            className="relative overflow-hidden rounded-[2.5rem] border border-ruby/10 shadow-luxury"
          >
            <video
              className="h-[78svh] min-h-[640px] w-full object-cover"
              src={heroContent.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={heroContent.image}
            />
            <div className="absolute inset-0 hero-video-fade" />
            <div className="absolute inset-0 hero-video-grain opacity-60" />

            <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.08 }}
                  className="max-w-md rounded-[1.6rem] border border-white/14 bg-[rgba(18,12,11,0.22)] px-5 py-4 backdrop-blur-sm"
                >
                  <p className="text-[11px] uppercase tracking-[0.42em] text-parchment/78">
                    {heroContent.eyebrow}
                  </p>
                  <p className="signature-text mt-4 text-2xl leading-tight text-parchment sm:text-[2rem]">
                    {heroContent.highlight}
                  </p>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.14 }}
                  className="hidden max-w-sm rounded-[1.7rem] border border-white/14 bg-[rgba(250,238,209,0.14)] p-4 text-parchment shadow-velvet backdrop-blur-md lg:block"
                >
                  <p className="text-[11px] uppercase tracking-[0.36em] text-parchment/72">
                    Signature Collections
                  </p>
                  <div className="mt-4 space-y-3">
                    {featuredCollections.map((collection) => (
                      <div
                        key={collection.id}
                        className="rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.05)] px-4 py-3"
                      >
                        <p className="font-display text-2xl text-ivory">{collection.name}</p>
                        <p className="mt-1 text-sm leading-6 text-parchment/72">{collection.mood}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.5fr] lg:items-end">
                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.18 }}
                  className="max-w-4xl"
                >
                  <h1 className="text-balance font-display text-5xl leading-[0.9] text-ivory sm:text-6xl lg:text-7xl xl:text-[5.6rem]">
                    {heroContent.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-parchment/88 sm:text-lg">
                    {heroContent.subtitle}
                  </p>
                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Link
                      to={heroContent.primaryCta.href}
                      className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
                    >
                      {heroContent.primaryCta.label}
                    </Link>
                    <Link
                      to={heroContent.secondaryCta.href}
                      className="rounded-full border border-white/16 bg-[rgba(255,255,255,0.08)] px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:border-parchment/40 hover:bg-[rgba(255,255,255,0.14)]"
                    >
                      {heroContent.secondaryCta.label}
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: 0.24 }}
                  className="hidden lg:block"
                >
                  <div className="overflow-hidden rounded-[1.7rem] border border-white/12 bg-[rgba(255,249,237,0.08)] shadow-velvet backdrop-blur-sm">
                    <img src={heroContent.panelImage} alt="Brand panel" className="h-60 w-full object-cover opacity-95" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]"
          >
            <div className="vellum-card rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.34em] text-ruby">Heritage House</p>
              <p className="mt-4 font-display text-3xl text-soot sm:text-4xl">
                Crafted for memory, lit like an editorial film.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-soot/74">
                The opening frame now lets jewelry, finish, and atmosphere do the talking first,
                while the storytelling enters with more calm and intention.
              </p>
            </div>

            <div className="vellum-card rounded-[1.8rem] p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.34em] text-ruby">Immersive View</p>
              <p className="mt-4 font-display text-3xl text-soot">Close-up gold work and cinematic motion.</p>
              <p className="mt-4 text-sm leading-7 text-soot/72">
                The banner is tuned for quiet immersion rather than sales pressure, making the jewel
                language feel refined from the first second.
              </p>
            </div>

            <div className="vellum-card rounded-[1.8rem] p-6 sm:p-7 lg:hidden">
              <p className="text-xs uppercase tracking-[0.34em] text-ruby">Signature Collections</p>
              <div className="mt-4 space-y-3">
                {featuredCollections.map((collection) => (
                  <div key={collection.id} className="rounded-2xl border border-ruby/10 bg-ivory/40 px-4 py-4">
                    <p className="font-display text-2xl text-soot">{collection.name}</p>
                    <p className="mt-2 text-sm leading-6 text-soot/72">{collection.mood}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <img src={founderStory.image} alt={founderStory.eyebrow} className="h-full min-h-[520px] w-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="vellum-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading eyebrow={founderStory.eyebrow} title={founderStory.founder} description={founderStory.title} />
            <p className="signature-text mt-8 text-3xl text-ruby sm:text-4xl">{founderStory.blessingTamil}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-soot/58">{founderStory.blessingEnglish}</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-soot/76">
              {founderStory.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Made to Outlive Trends"
            title="A philosophy of jewelry that values memory over novelty."
            description="The site experience stays close to the jewel itself: its making, detail, finish, and cultural resonance."
            align="center"
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {philosophy.map((item) => (
              <motion.article key={item.title} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="text-xs uppercase tracking-[0.34em] text-ruby">{item.title}</p>
                <p className="mt-5 font-display text-3xl text-soot">{item.title}</p>
                <p className="mt-4 text-base leading-8 text-soot/74">{item.copy}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Signature Collections"
              title="Editorial collection worlds instead of a conventional catalogue."
              description="Each collection opens into visual and narrative cues that invite a slower, more intimate reading of the jewel."
            />
            <Link to="/collections" className="text-sm font-semibold uppercase tracking-[0.26em] text-ruby">
              View collection stories
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {collections.map((collection, index) => (
              <motion.article
                key={collection.id}
                {...fadeUp}
                className={`overflow-hidden rounded-[2rem] border border-ruby/10 bg-white/40 shadow-luxury ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className={`grid gap-0 ${index === 0 ? "lg:grid-cols-[1.05fr_0.95fr]" : ""}`}>
                  <div className="relative">
                    <div className="absolute inset-0 image-fade" />
                    <img src={collection.image} alt={collection.name} className={`w-full object-cover ${index === 0 ? "h-[420px] lg:h-full" : "h-72"}`} />
                  </div>
                  <div className="p-8">
                    <p className="text-xs uppercase tracking-[0.34em] text-ruby">{collection.name}</p>
                    <h3 className="mt-4 font-display text-4xl text-soot">{collection.mood}</h3>
                    <p className="mt-4 text-base leading-8 text-soot/74">{collection.story}</p>
                    <Link
                      to="/collections"
                      className="mt-8 inline-flex rounded-full border border-ruby/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
                    >
                      Request details
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Featured Pieces"
              title="Scroll-led introductions to the jewels themselves."
              description="Clicking a piece moves the experience from overview to material, finish, and craftsmanship in a more immersive, know-more rhythm."
            />
            <Link to="/collections" className="text-sm font-semibold uppercase tracking-[0.26em] text-ruby">
              Explore pieces
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredPieces.map((piece) => (
              <PieceCard key={piece.slug} piece={piece} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="The Making of an Heirloom"
            title="Craftsmanship revealed through process, not sales language."
            description="From concept and stone selection to bench work and finishing, the process is framed as part of the jewel's story."
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <div className="absolute inset-0 image-fade" />
            <img src={bespokeContent.image} alt={bespokeContent.title} className="h-full min-h-[460px] w-full object-cover" />
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="vellum-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading eyebrow={bespokeContent.eyebrow} title={bespokeContent.title} description={bespokeContent.description} />
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to={bespokeContent.primaryCta.href}
                className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
              >
                {bespokeContent.primaryCta.label}
              </Link>
              <a
                href={bespokeContent.secondaryCta.href}
                className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
              >
                {bespokeContent.secondaryCta.label}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Notes From the Atelier"
              title="Editorial reflections that deepen cultural context and care."
              description="The journal supports the jewelry showcase with heritage, styling, preservation, and design stories."
            />
            <Link to="/journal" className="text-sm font-semibold uppercase tracking-[0.26em] text-ruby">
              Read the journal
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {journalFeatures.map((article) => (
              <JournalCard key={article.title} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Stories That Stay"
            title="Emotional narratives instead of standard reviews."
            description="The voice of the client remains intimate, heritage-rich, and centered on what the jewel came to mean."
          />
          <div className="grid gap-5">
            {legacyStories.map((story) => (
              <motion.blockquote key={story.quote} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="font-display text-3xl leading-tight text-soot sm:text-4xl">“{story.quote}”</p>
                <footer className="mt-5 text-xs uppercase tracking-[0.28em] text-ruby">{story.byline}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Clarity, trust, and gentle guidance for private commissions."
            description="A clean, minimal section to answer the questions that naturally arise around heirloom work and bespoke jewelry."
          />
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="section-shell pb-10 pt-14">
        <motion.div {...fadeUp} className="section-frame relative overflow-hidden rounded-[2.2rem] shadow-luxury">
          <div className="absolute inset-0 image-fade" />
          <img src={finalMessage.image} alt={finalMessage.title} className="h-[540px] w-full object-cover" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-3xl p-8 text-ivory sm:p-12">
              <p className="text-xs uppercase tracking-[0.34em] text-parchment/80">Final Note</p>
              <h2 className="mt-4 text-balance font-display text-5xl leading-[0.94] sm:text-6xl">
                {finalMessage.title}
              </h2>
              <div className="mt-6 space-y-2 text-xl text-ivory/90 sm:text-2xl">
                {finalMessage.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mt-8">
                <img src={media.brandWordmark} alt="Brand wordmark" className="h-12 w-auto brightness-0 invert" />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default HomePage;
