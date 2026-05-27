import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

function JournalCard({ article }) {
  return (
    <motion.article
      {...fadeUp}
      className="overflow-hidden rounded-[2rem] border border-ruby/10 bg-white/40 shadow-luxury"
    >
      <div className="relative">
        <div className="absolute inset-0 image-fade" />
        <img src={article.image} alt={article.title} className="h-72 w-full object-cover" />
      </div>
      <div className="p-8">
        <h3 className="font-display text-3xl text-soot">{article.title}</h3>
        <p className="mt-4 text-base leading-8 text-soot/76">{article.excerpt}</p>
        <p className="mt-6 text-xs uppercase tracking-[0.32em] text-ruby">Notes From the Atelier</p>
      </div>
    </motion.article>
  );
}

export default JournalCard;
