import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import PieceCard from "../components/PieceCard";
import { getCollectionById, getPieceBySlug, pieces } from "../data/pieces";
import { fadeUp } from "../utils/motion";

function PieceDetailPage() {
  const { pieceSlug } = useParams();
  const piece = getPieceBySlug(pieceSlug);

  if (!piece) {
    return (
      <section className="section-shell py-24">
        <div className="section-frame vellum-card rounded-[2rem] p-10">
          <p className="text-xs uppercase tracking-[0.34em] text-ruby">Piece not found</p>
          <h1 className="mt-4 font-display text-5xl text-soot">This jewel is not in the current archive.</h1>
          <Link to="/collections" className="mt-8 inline-flex rounded-full bg-ruby px-6 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-ivory">
            Return to collections
          </Link>
        </div>
      </section>
    );
  }

  const collection = getCollectionById(piece.collectionId);
  const relatedPieces = pieces.filter((item) => piece.related.includes(item.slug));

  return (
    <>
      <PageHero
        eyebrow={piece.category}
        title={piece.name}
        description={piece.story}
        image={piece.image}
        primaryCta={{ label: "Request Details", href: "/consultation" }}
        secondaryCta={{ label: "Explore Collection", href: "/collections" }}
        accent={piece.tagline}
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div {...fadeUp} className="grid gap-5 sm:grid-cols-2">
            {piece.gallery.map((image, index) => (
              <div
                key={`${piece.slug}-${image}`}
                className={`relative overflow-hidden rounded-[1.8rem] shadow-luxury ${index === 0 ? "sm:col-span-2" : ""}`}
              >
                <div className="absolute inset-0 image-fade" />
                <img src={image} alt={`${piece.name} view ${index + 1}`} className={`w-full object-cover ${index === 0 ? "h-[420px]" : "h-[280px]"}`} />
              </div>
            ))}
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.08 }} className="vellum-card rounded-[2rem] p-8 sm:p-10">
            <SectionHeading
              eyebrow={collection?.name || "Piece Story"}
              title="Story, craftsmanship, and detail"
              description={piece.craftsmanship}
            />
            <div className="mt-8 space-y-4">
              {piece.details.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-ruby/10 bg-ivory/40 px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-ruby">{detail.label}</p>
                  <p className="mt-2 text-base leading-7 text-soot/78">{detail.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame grid gap-5 lg:grid-cols-3">
          {piece.chapters.map((chapter) => (
            <motion.article key={chapter.title} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
              <p className="text-xs uppercase tracking-[0.34em] text-ruby">{chapter.title}</p>
              <h3 className="mt-4 font-display text-3xl text-soot">{chapter.title}</h3>
              <p className="mt-4 text-base leading-8 text-soot/76">{chapter.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-shell py-14">
        <motion.div {...fadeUp} className="section-frame vellum-card rounded-[2rem] p-8 sm:p-10">
          <SectionHeading
            eyebrow="Request Details"
            title="A softer inquiry path for a jewel that deserves more context."
            description="If this piece speaks to you, the next step is a private conversation about materials, finish adaptations, wearing context, or heirloom redesign possibilities."
          />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/consultation"
              className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
            >
              Begin your consultation
            </Link>
            <Link
              to="/craftsmanship"
              className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
            >
              Know the making process
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="section-shell py-14">
        <div className="section-frame">
          <SectionHeading
            eyebrow="Related Pieces"
            title="Continue through the archive."
            description="Each related jewel extends the same story world through a different silhouette or ceremonial role."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {relatedPieces.map((related) => (
              <PieceCard key={related.slug} piece={related} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default PieceDetailPage;
