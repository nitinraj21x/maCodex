import { ArrowLeft, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useMemo } from "react";
import products from "../../data/products.json";
import ProductCard from "../../components/ProductCard";
import { formatCurrency, formatWeight } from "../../utils/formatters";
import { withProductImages } from "../../utils/localMedia";

function ProductDetailPage() {
  const { productId } = useParams();
  const localProducts = useMemo(() => withProductImages(products), []);
  const product = localProducts.find((item) => item.id === productId);

  if (!product) {
    return (
      <div className="section-shell pt-36 pb-24">
        <div className="section-frame luxury-card luxury-border rounded-[2rem] p-10 text-center">
          <h1 className="font-serif text-5xl text-maroon">Piece not found</h1>
          <p className="mt-4 text-sm leading-7 text-ink/70">The requested jewel is no longer in this curation.</p>
          <Link to="/collections" className="mt-8 inline-flex rounded-full border border-maroon/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-maroon">
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = localProducts
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, 4);

  return (
    <div className="pt-26">
      <section className="section-shell py-12">
        <div className="section-frame">
          <Link to="/collections" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-maroon">
            <ArrowLeft size={14} />
            Back to Collections
          </Link>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {product.images.map((image, index) => (
                <div key={`${product.id}-${index}`} className={`${index === 0 ? "sm:col-span-2" : ""} overflow-hidden rounded-[2rem] border border-maroon/10`}>
                  <img src={image} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>

            <div className="luxury-card luxury-border rounded-[2rem] p-8 sm:p-10">
              <p className="text-xs uppercase tracking-[0.32em] text-olive">{product.category}</p>
              <h1 className="mt-4 font-serif text-5xl text-maroon">{product.name}</h1>
              <div className="mt-5 flex items-center gap-2 text-gold">
                <Star size={16} fill="currentColor" />
                <span>{product.rating}</span>
              </div>
              <p className="mt-6 text-base leading-8 text-ink/72">{product.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  ["Price", formatCurrency(product.price)],
                  ["Material", product.material],
                  ["Stone", product.stone],
                  ["Weight", formatWeight(product.weight)],
                  ["Stock", `${product.stock} available`],
                  ["Collection", product.subcategory],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1.5rem] border border-maroon/10 bg-white/55 p-4">
                    <p className="text-xs uppercase tracking-[0.24em] text-olive/65">{label}</p>
                    <p className="mt-2 text-lg text-maroon">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-gold/20 bg-gold/10 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-olive">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <button type="button" className="rounded-full bg-maroon px-7 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-ivory">
                  Add to Cart
                </button>
                <button type="button" className="rounded-full border border-maroon/20 px-7 py-4 text-xs uppercase tracking-[0.28em] text-maroon">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-frame">
          <h2 className="font-serif text-4xl text-maroon">Related pieces</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {relatedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetailPage;
