import { Eye, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/formatters";

function ProductCard({ product, onQuickView }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      className="luxury-card luxury-border group overflow-hidden rounded-[2rem]"
    >
      <Link to={`/collections/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-[4/4.8] overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />
          <div className="image-tint absolute inset-0 opacity-70" />
          <span className="absolute left-4 top-4 rounded-full border border-ivory/60 bg-[rgba(170,38,56,0.82)] px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-ivory">
            {product.category}
          </span>
          {onQuickView && (
            <button
              type="button"
              onClick={(event) => {
                event.preventDefault();
                onQuickView(product);
              }}
              className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-ivory/60 bg-[rgba(73,92,45,0.85)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-ivory opacity-0 transition group-hover:opacity-100"
            >
              <Eye size={14} />
              Quick View
            </button>
          )}
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-serif text-2xl text-maroon">{product.name}</p>
            <p className="mt-1 text-sm text-ink/62">{product.subcategory}</p>
          </div>
          <div className="flex items-center gap-1 rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs text-gold">
            <Star size={12} fill="currentColor" />
            {product.rating}
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-maroon">{formatCurrency(product.price)}</p>
          <Link to={`/collections/${product.id}`} className="text-xs uppercase tracking-[0.28em] text-olive transition hover:text-maroon">
            View Detail
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default ProductCard;
