import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="section-shell py-24">
      <div className="section-frame vellum-card rounded-[2rem] p-10 text-center">
        <p className="text-xs uppercase tracking-[0.34em] text-ruby">404</p>
        <h1 className="mt-4 font-display text-5xl text-soot">This page has slipped out of the archive.</h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-soot/76">
          The path you opened does not exist in the current story flow. You can return to the
          collections or begin again from the home page.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link to="/" className="rounded-full bg-ruby px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-ivory">
            Return home
          </Link>
          <Link to="/collections" className="rounded-full border border-ruby/15 px-7 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-soot">
            View collections
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFoundPage;
