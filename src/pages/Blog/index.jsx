import BlogCard from "../../components/BlogCard";
import blogs from "../../data/blogs.json";
import { withBlogImages } from "../../utils/localMedia";

function BlogPage() {
  const localBlogs = withBlogImages(blogs);
  const [featured, ...rest] = localBlogs;
  const heritageStories = rest.filter((post) => post.category === "Heritage Stories" || post.category === "Company History");
  const craftStories = rest.filter((post) => post.category === "Craftsmanship" || post.category === "Artisan Interviews");

  return (
    <div className="pt-22">
      <section className="section-shell py-16">
        <div className="section-frame">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Editorial Journal</p>
            <h1 className="mt-4 font-serif text-6xl text-maroon">A luxury magazine for heritage, craft, and bridal gold</h1>
          </div>
          <BlogCard post={featured} featured />
        </div>
      </section>

      <section className="section-shell pb-12">
        <div className="section-frame grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl text-maroon">Latest Stories</h2>
            <div className="mt-6 space-y-6">
              {rest.slice(0, 3).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-4xl text-maroon">Heritage Stories</h2>
            <div className="mt-6 space-y-6">
              {heritageStories.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-frame">
          <h2 className="font-serif text-4xl text-maroon">Craftsmanship, care, and company memory</h2>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {[...craftStories, ...rest.filter((post) => post.category === "Jewelry Care" || post.category === "Bridal Guidance")].map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPage;
