import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import ProcessTimeline from "../components/ProcessTimeline";
import SectionHeading from "../components/SectionHeading";
import { brand, processSteps } from "../data/siteContent";
import { getGalleryImage } from "../utils/localMedia";
import { fadeUp } from "../utils/motion";

const craftsmanshipPrinciples = [
  {
    title: "Bench-led judgment",
    text: "Proportion, drape, and finish are resolved by eye and hand, not by template alone.",
  },
  {
    title: "Material warmth",
    text: "Gold, stone, and pearl are selected for how they sit together in natural and ceremonial light.",
  },
  {
    title: "Cultural restraint",
    text: "Temple geometry and South Indian ornament traditions are referenced with quiet confidence, never noise.",
  },
];

function CraftsmanshipPage() {
  return (
    <>
      <PageHero
        eyebrow="The Making of an Heirloom"
        title="Craftsmanship as a visible part of the story."
        description={`At ${brand.name}, the making process is not hidden behind the finished object. It is part of the jewel's emotional value, from first conversation to final handover.`}
        image={getGalleryImage(2)}
        primaryCta={{ label: "Begin a Consultation", href: "/consultation" }}
        secondaryCta={{ label: "Explore Pieces", href: "/collections" }}
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Flow Layout"
            title="Concept, stones, handwork, detailing, and finally, belonging."
            description="The process is deliberately paced so every choice supports wearability, significance, and longevity."
          />
          <div className="mt-10">
            <ProcessTimeline steps={processSteps} />
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div {...fadeUp} className="relative overflow-hidden rounded-[2rem] shadow-luxury">
            <div className="absolute inset-0 image-fade" />
            <img src={getGalleryImage(6)} alt="Close-up craftsmanship" className="h-full min-h-[460px] w-full object-cover" />
          </motion.div>
          <div className="grid gap-5">
            {craftsmanshipPrinciples.map((item) => (
              <motion.article key={item.title} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="text-xs uppercase tracking-[0.34em] text-ruby">{item.title}</p>
                <h3 className="mt-4 font-display text-3xl text-soot">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-soot/76">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <motion.div {...fadeUp} className="section-frame vellum-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Why It Matters"
            title="A jewel that is well made feels different before anyone explains it."
            description="That difference lives in softened edges, considered weight, balanced stone setting, and the ease with which a piece becomes wearable memory."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/consultation"
              className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
            >
              Start your piece
            </Link>
            <Link
              to="/journal"
              className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
            >
              Read atelier notes
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default CraftsmanshipPage;
