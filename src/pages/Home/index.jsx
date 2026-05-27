import { Gem, ShieldCheck, Sparkles, Stamp, Truck, Workflow } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import HeroSlider from "../../components/HeroSlider";
import CategoryCard from "../../components/CategoryCard";
import MasonryGallery from "../../components/MasonryGallery";
import ProductCard from "../../components/ProductCard";
import StorySlider from "../../components/StorySlider";
import ServiceCard from "../../components/ServiceCard";
import products from "../../data/products.json";
import categories from "../../data/categories.json";
import services from "../../data/services.json";
import { certifications, heroSlides, heritageStory, masonryCollection, storySlides } from "../../data/visuals";
import { fadeUp, staggerContainer } from "../../utils/motion";
import { useFeaturedProducts } from "../../hooks/useFeaturedProducts";
import { formatCurrency, formatWeight } from "../../utils/formatters";
import { withCategoryImages, withProductImages, withServiceImages } from "../../utils/localMedia";

const certificationIcons = {
  "BIS Hallmark": Stamp,
  "Certified Diamonds": Gem,
  "Lifetime Service": Workflow,
  "Authentic Craftsmanship": Sparkles,
  "Secure Purchase": ShieldCheck,
};

function QuickViewModal({ product, onClose }) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[70] flex items-center justify-center bg-[rgba(113,72,61,0.35)] p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ duration: 0.35 }}
          onClick={(event) => event.stopPropagation()}
          className="luxury-card luxury-border max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[2rem]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="relative aspect-[4/4.8] overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
              <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" />
              <div className="image-tint absolute inset-0" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-olive">{product.category}</p>
              <h3 className="mt-4 font-serif text-4xl text-maroon">{product.name}</h3>
              <p className="mt-5 text-base leading-8 text-ink/72">{product.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-ink/72">
                <div className="rounded-2xl border border-maroon/10 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive/65">Price</p>
                  <p className="mt-2 text-lg text-maroon">{formatCurrency(product.price)}</p>
                </div>
                <div className="rounded-2xl border border-maroon/10 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive/65">Weight</p>
                  <p className="mt-2 text-lg text-maroon">{formatWeight(product.weight)}</p>
                </div>
                <div className="rounded-2xl border border-maroon/10 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive/65">Material</p>
                  <p className="mt-2 text-lg text-maroon">{product.material}</p>
                </div>
                <div className="rounded-2xl border border-maroon/10 bg-white/55 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-olive/65">Stone</p>
                  <p className="mt-2 text-lg text-maroon">{product.stone}</p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-gold/20 bg-gold/8 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-olive">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="mt-8 rounded-full border border-maroon/18 px-6 py-3 text-xs uppercase tracking-[0.28em] text-maroon"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const localProducts = useMemo(() => withProductImages(products), []);
  const localCategories = useMemo(() => withCategoryImages(categories), []);
  const localServices = useMemo(() => withServiceImages(services), []);
  const featuredProducts = useFeaturedProducts(localProducts);
  const servicePreview = useMemo(() => localServices.slice(0, 4), [localServices]);

  return (
    <div>
      <HeroSlider slides={heroSlides} />

      <section className="section-shell py-24">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="section-frame grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <img src={heritageStory.image} alt={heritageStory.title} className="aspect-[4/5] w-full object-cover" />
            <div className="image-tint absolute inset-0" />
          </div>
          <div className="relative luxury-card luxury-border rounded-[2rem] p-8 sm:p-12">
            <div className="absolute inset-0 temple-pattern opacity-20" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Lineage & Craft</p>
              <h2 className="mt-5 font-serif text-5xl leading-none text-maroon sm:text-6xl">
                {heritageStory.title}
              </h2>
              <p className="mt-6 text-base leading-8 text-ink/74">{heritageStory.description}</p>
              <p className="mt-5 text-base leading-8 text-ink/68">{heritageStory.secondary}</p>
              <div className="gold-line mt-8 h-px w-36" />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Collections</p>
              <h2 className="mt-4 font-serif text-5xl text-maroon">Luxury Category Edit</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/68">
              Eight curated entry points designed around bridal dressing, temple form, and collectible gold craft.
            </p>
          </div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4"
          >
            {localCategories.map((category) => (
              <motion.div key={category.id} variants={fadeUp}>
                <CategoryCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Editorial Gallery</p>
              <h2 className="mt-4 font-serif text-5xl text-maroon">The Collection in Frames</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/68">
              A magazine-led visual sequence of bridal portraiture, stone work, architecture, and atelier texture.
            </p>
          </div>
          <MasonryGallery items={masonryCollection} />
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Featured Products</p>
              <h2 className="mt-4 font-serif text-5xl text-maroon">Rotating Signature Picks</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/68">
              Refreshed every few seconds from the featured archive to keep the storefront feeling alive and curated.
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={featuredProducts.map((item) => item.id).join("-")}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            >
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">The House Story</p>
            <h2 className="mt-4 font-serif text-5xl text-maroon">Five cinematic chapters of the brand</h2>
          </div>
          <StorySlider slides={storySlides} />
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-olive">Atelier Services</p>
              <h2 className="mt-4 font-serif text-5xl text-maroon">Care that extends the life of gold</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-ink/68">
              Repair, redesign, and bridal consultation are treated with the same ceremonial care as the jewel itself.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {servicePreview.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-frame luxury-card luxury-border rounded-[2rem] p-8 sm:p-10 lg:p-12">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Trusted Luxury</p>
            <h2 className="mt-4 font-serif text-5xl text-maroon">Certification and confidence, beautifully delivered</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {certifications.map((item) => {
              const Icon = certificationIcons[item.title] ?? Truck;
              return (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.75rem] border border-maroon/10 bg-white/55 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon/10 text-maroon">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl text-maroon">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/72">{item.copy}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

export default HomePage;
