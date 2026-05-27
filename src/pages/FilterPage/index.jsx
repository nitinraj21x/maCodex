import { Search } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import FiltersSidebar from "../../components/FiltersSidebar";
import categories from "../../data/categories.json";
import products from "../../data/products.json";
import { filterProducts } from "../../utils/productFilters";
import { formatCurrency, formatWeight } from "../../utils/formatters";
import { withCategoryImages, withProductImages } from "../../utils/localMedia";

const initialFilters = {
  category: "",
  priceRange: "all",
  material: "",
  stone: "",
  collection: "",
  occasion: "",
  bridal: false,
  antique: false,
  sortBy: "featured",
  search: "",
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
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 24, opacity: 0 }}
          onClick={(event) => event.stopPropagation()}
          className="luxury-card luxury-border max-h-[88vh] w-full max-w-4xl overflow-auto rounded-[2rem]"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <img src={product.images[0]} alt={product.name} className="aspect-[4/4.8] h-full w-full rounded-t-[2rem] object-cover lg:rounded-l-[2rem] lg:rounded-tr-none" />
            <div className="p-6 sm:p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-olive">{product.category}</p>
              <h3 className="mt-4 font-serif text-4xl text-maroon">{product.name}</h3>
              <p className="mt-5 text-base leading-8 text-ink/72">{product.description}</p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["Price", formatCurrency(product.price)],
                  ["Material", product.material],
                  ["Stone", product.stone],
                  ["Weight", formatWeight(product.weight)],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-maroon/10 bg-white/55 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-olive/65">{label}</p>
                    <p className="mt-2 text-lg text-maroon">{value}</p>
                  </div>
                ))}
              </div>
              <button type="button" onClick={onClose} className="mt-8 rounded-full border border-maroon/18 px-6 py-3 text-xs uppercase tracking-[0.28em] text-maroon">
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FilterPage() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState(initialFilters);
  const [visibleCount, setVisibleCount] = useState(12);
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  const localCategories = useMemo(() => withCategoryImages(categories), []);
  const localProducts = useMemo(() => withProductImages(products), []);

  const selectedCategory = searchParams.get("category");

  useEffect(() => {
    setFilters((current) => ({
      ...initialFilters,
      category: selectedCategory ?? "",
      search: current.search,
    }));
    setVisibleCount(12);
  }, [selectedCategory]);

  const filterMeta = useMemo(
    () => ({
      materials: [...new Set(products.map((product) => product.material))],
      stones: [...new Set(products.map((product) => product.stone))],
      collections: [...new Set(products.map((product) => product.subcategory))],
      occasions: [...new Set(localProducts.flatMap((product) => product.tags))].filter((tag) =>
        ["Bridal", "Festive", "Reception", "Occasion", "Collector", "Gifting", "Statement", "Luxury", "Wedding"].includes(tag),
      ),
    }),
    [localProducts],
  );

  const currentCategory = localCategories.find((category) => category.title === filters.category) ?? localCategories[0];
  const filteredProducts = useMemo(() => filterProducts(localProducts, filters), [filters, localProducts]);
  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="pt-22">
      <section className="section-shell">
        <div className="section-frame overflow-hidden rounded-[2rem] border border-maroon/10">
          <div className="relative min-h-[420px]">
            <img src={currentCategory.bannerImage} alt={currentCategory.title} className="absolute inset-0 h-full w-full object-cover" />
            <div className="image-tint absolute inset-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(170,38,56,0.2),transparent_34%)]" />
            <div className="relative flex min-h-[420px] items-end p-8 sm:p-10 lg:p-14">
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.35em] text-ivory">Curated Category</p>
                <h1 className="mt-4 font-serif text-5xl text-ivory sm:text-6xl">{currentCategory.collectionTitle}</h1>
                <p className="mt-5 text-base leading-8 text-ivory/84">{currentCategory.description}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.26em] text-ivory/68">{currentCategory.mood}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-16">
        <div className="section-frame grid gap-8 xl:grid-cols-[320px_1fr]">
          <FiltersSidebar
            categories={localCategories}
            filters={filters}
            setFilters={setFilters}
            filterMeta={filterMeta}
          />

          <div>
            <div className="mb-6 flex flex-col gap-4 rounded-[2rem] border border-maroon/10 bg-white/45 p-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1">
                <Search size={16} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-olive/50" />
                <input
                  type="search"
                  value={filters.search}
                  onChange={(event) => setFilters((current) => ({ ...current, search: event.target.value }))}
                  placeholder="Search collections, motifs, stones"
                  className="w-full rounded-full border border-maroon/10 bg-white/70 py-3 pl-11 pr-4 text-sm text-ink outline-none placeholder:text-ink/40"
                />
              </div>
              <p className="text-sm text-ink/72">
                <span className="text-maroon">{filteredProducts.length}</span> pieces discovered
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))}
            </div>

            {!filteredProducts.length && (
              <div className="luxury-card luxury-border mt-8 rounded-[2rem] p-8 text-center">
                <p className="font-serif text-3xl text-maroon">No pieces match this exact filter set.</p>
                <p className="mt-3 text-sm leading-7 text-ink/68">
                  Try broadening the gemstone, collection, or occasion criteria.
                </p>
              </div>
            )}

            {visibleCount < filteredProducts.length && (
              <div className="mt-10 text-center">
                <button
                  type="button"
                  onClick={() => setVisibleCount((current) => current + 9)}
                  className="rounded-full border border-maroon/20 bg-maroon px-8 py-4 text-xs uppercase tracking-[0.3em] text-ivory"
                >
                  Load More
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      <QuickViewModal product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
    </div>
  );
}

export default FilterPage;
