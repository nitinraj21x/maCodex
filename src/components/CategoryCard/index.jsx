import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function CategoryCard({ category }) {
  const navigate = useNavigate();

  return (
    <motion.button
      whileHover={{ y: -6 }}
      type="button"
      onClick={() => navigate(`/collections?category=${encodeURIComponent(category.title)}`)}
      className="group relative overflow-hidden rounded-[2rem] text-left"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
      </div>
      <div className="image-tint absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-serif text-3xl text-ivory">{category.title}</p>
        <p className="mt-2 max-w-xs text-sm leading-6 text-sand/85">{category.description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
          View Collection
          <ArrowUpRight size={14} />
        </span>
      </div>
    </motion.button>
  );
}

export default CategoryCard;
