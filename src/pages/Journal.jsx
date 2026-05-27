import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import JournalCard from "../components/JournalCard";
import { journalFeatures } from "../data/siteContent";
import { getGalleryImage } from "../utils/localMedia";
import { fadeUp } from "../utils/motion";

const editorialTopics = [
  "The Meaning of Heirloom Jewelry",
  "Jewelry Traditions of South India",
  "How to Preserve Antique Pieces",
  "Styling Heritage Jewelry Today",
  "Behind the Making of a Murthy Atelier's by 9th Piece",
  "The Emotional Value of Passing Jewelry Through Generations",
];

function JournalPage() {
  return (
    <>
      <PageHero
        eyebrow="Notes From the Atelier"
        title="An editorial space for memory, care, craft, and culture."
        description="The journal strengthens brand storytelling while supporting organic discoverability around jewelry heritage, styling, craftsmanship, and preservation."
        image={getGalleryImage(1)}
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame grid gap-6 lg:grid-cols-2">
          {journalFeatures.map((article) => (
            <JournalCard key={article.title} article={article} />
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <motion.div {...fadeUp} className="section-frame vellum-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Suggested Topics"
            title="Storytelling-led editorial directions for the atelier."
            description="These themes keep the journal close to the jewelry while adding useful cultural and care context."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {editorialTopics.map((topic) => (
              <div key={topic} className="rounded-2xl border border-ruby/10 bg-ivory/40 px-5 py-5">
                <p className="font-display text-2xl text-soot">{topic}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default JournalPage;
