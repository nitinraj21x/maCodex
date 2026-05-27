import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

function PieceCard({ piece }) {
  return (
    <motion.article
      {...fadeUp}
      className="group overflow-hidden rounded-[2rem] border border-ruby/10 bg-white/40 shadow-luxury"
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 image-fade transition duration-500 group-hover:opacity-80" />
        <img
          src={piece.image}
          alt={piece.name}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-8">
        <p className="text-xs uppercase tracking-[0.34em] text-ruby">{piece.category}</p>
        <h3 className="mt-4 font-display text-3xl text-soot">{piece.name}</h3>
        <p className="mt-4 text-base leading-8 text-soot/76">{piece.tagline}</p>
        <Link
          to={`/collections/${piece.slug}`}
          className="mt-8 inline-flex rounded-full border border-ruby/14 bg-ivory/55 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
        >
          Know More
        </Link>
      </div>
    </motion.article>
  );
}

export default PieceCard;
