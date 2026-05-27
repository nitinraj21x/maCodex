import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { founderStory, legacyStories } from "../data/siteContent";
import { getGalleryImage } from "../utils/localMedia";
import { fadeUp } from "../utils/motion";

const heritagePoints = [
  "Subtle echoes of temple geometry, kasu sequencing, floral borders, and South Indian ceremonial dressing.",
  "A rooted Chennai sensibility shaped by Mylapore memory, family trust, and intergenerational craft presence.",
  "An editorial restraint that lets heritage inform the jewel without turning the experience into cliché.",
];

function HeritagePage() {
  return (
    <>
      <PageHero
        eyebrow="Heritage"
        title="A jewelry house built around lineage, place, and continuation."
        description="This page gives the founder story room to breathe while tracing the cultural references that shape the design language."
        image={getGalleryImage(5)}
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div {...fadeUp} className="vellum-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading eyebrow={founderStory.eyebrow} title={founderStory.founder} description={founderStory.title} />
            <p className="signature-text mt-8 text-3xl text-ruby sm:text-4xl">{founderStory.blessingTamil}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.28em] text-soot/58">{founderStory.blessingEnglish}</p>
            <div className="mt-8 space-y-5 text-base leading-8 text-soot/76">
              {founderStory.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <img src={founderStory.sketch} alt="Archival atelier mood" className="h-full min-h-[560px] w-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="Tamil Context"
            title="Cultural richness handled with elegance and restraint."
            description="The design language draws from Tamil Nadu without becoming loud. Its references stay material, architectural, and ceremonial."
          />
          <div className="grid gap-5">
            {heritagePoints.map((point) => (
              <motion.article key={point} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="font-display text-3xl text-soot">{point}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Stories That Stay"
            title="Legacy is felt through what clients choose to remember."
            description="Rather than testimonials in a transactional sense, these are short reflections on what the jewelry came to mean."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {legacyStories.map((story) => (
              <motion.blockquote key={story.quote} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="font-display text-3xl leading-tight text-soot">“{story.quote}”</p>
                <footer className="mt-5 text-xs uppercase tracking-[0.28em] text-ruby">{story.byline}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HeritagePage;
