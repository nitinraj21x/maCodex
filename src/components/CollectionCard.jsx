import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

function CollectionCard({ collection, pieces, reverse = false }) {
  const layout = reverse ? "lg:grid-cols-[0.9fr_1.1fr]" : "lg:grid-cols-[1.1fr_0.9fr]";

  return (
    <motion.article
      {...fadeUp}
      className={`grid gap-6 overflow-hidden rounded-[2rem] border border-ruby/10 bg-white/40 shadow-luxury ${layout}`}
    >
      <div className={`relative ${reverse ? "lg:order-2" : ""}`}>
        <div className="absolute inset-0 image-fade" />
        <img src={collection.image} alt={collection.name} className="h-full min-h-[360px] w-full object-cover" />
      </div>

      <div className={`flex flex-col justify-between p-8 sm:p-10 ${reverse ? "lg:order-1" : ""}`}>
        <div>
          <p className="text-xs uppercase tracking-[0.34em] text-ruby">{collection.name}</p>
          <h3 className="mt-4 font-display text-4xl text-soot sm:text-5xl">{collection.mood}</h3>
          <p className="mt-5 max-w-2xl text-base leading-8 text-soot/76">{collection.story}</p>
          <div className="mt-8 space-y-3">
            {pieces.map((piece) => (
              <Link
                key={piece.slug}
                to={`/collections/${piece.slug}`}
                className="block rounded-2xl border border-ruby/10 bg-ivory/45 px-5 py-4 transition hover:border-ruby/24 hover:bg-white/60"
              >
                <span className="text-sm uppercase tracking-[0.26em] text-ruby">{piece.category}</span>
                <p className="mt-2 font-display text-2xl text-soot">{piece.name}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <Link
            to="/consultation"
            className="inline-flex rounded-full border border-ruby/16 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/28 hover:text-ruby"
          >
            Request Details
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default CollectionCard;
