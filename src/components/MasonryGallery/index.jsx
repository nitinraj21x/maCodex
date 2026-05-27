import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const breakpoints = {
  default: 3,
  1024: 2,
  640: 1,
};

function MasonryGallery({ items }) {
  return (
    <div>
      <Masonry breakpointCols={breakpoints} className="-ml-6 flex w-auto" columnClassName="pl-6 bg-clip-padding">
        {items.map((item, index) => (
          <motion.article
            key={item.title}
            whileHover={{ y: -8 }}
            className={`group relative mb-6 overflow-hidden rounded-[2rem] ${index % 3 === 0 ? "aspect-[4/5]" : index % 2 === 0 ? "aspect-[4/4.2]" : "aspect-[4/5.6]"}`}
          >
            <img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="image-tint absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-serif text-3xl text-ivory">{item.title}</p>
              <p className="mt-3 max-w-sm text-sm leading-6 text-sand/80">{item.caption}</p>
            </div>
          </motion.article>
        ))}
      </Masonry>
      <div className="mt-8 text-center">
        <Link
          to="/collections"
          className="inline-flex rounded-full border border-gold/30 bg-gold/10 px-7 py-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          View Collection
        </Link>
      </div>
    </div>
  );
}

export default MasonryGallery;
