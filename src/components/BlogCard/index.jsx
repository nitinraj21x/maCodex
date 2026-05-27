import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

function BlogCard({ post, featured = false }) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className={`overflow-hidden rounded-[2rem] border border-maroon/10 bg-white/45 ${
        featured ? "lg:grid lg:grid-cols-[1.1fr_0.9fr]" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-auto min-h-[380px]" : "aspect-[4/3]"}`}>
        <img src={post.image} alt={post.title} loading="lazy" className="h-full w-full object-cover" />
        <div className="image-tint absolute inset-0" />
      </div>
      <div className="p-6 sm:p-8">
        <span className="inline-flex rounded-full border border-gold/25 bg-gold/8 px-3 py-1 text-[11px] uppercase tracking-[0.28em] text-gold">
          {post.category}
        </span>
        <h3 className={`mt-5 font-serif text-maroon ${featured ? "text-5xl" : "text-3xl"}`}>{post.title}</h3>
        <p className="mt-4 text-sm leading-7 text-ink/72">{post.excerpt}</p>
        <div className="mt-5 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.24em] text-olive/70">
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readTime}</span>
        </div>
        <button type="button" className="mt-7 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-maroon">
          Read More
          <ArrowRight size={14} />
        </button>
      </div>
    </motion.article>
  );
}

export default BlogCard;
