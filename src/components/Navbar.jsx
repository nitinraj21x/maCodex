import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { brand, navigation } from "../data/siteContent";
import { media } from "../utils/localMedia";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-ruby/8 bg-ivory/85 backdrop-blur-md">
      <div className="section-shell">
        <div className="section-frame flex items-center justify-between gap-6 py-4">
          <Link to="/" className="flex items-center gap-4" onClick={() => setOpen(false)}>
            <img src={media.brandWordmark} alt={brand.name} className="h-10 w-auto sm:h-12" />
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ruby/12 bg-white/40 text-soot lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                className="nav-glow relative text-sm font-medium tracking-[0.22em] text-soot/82 transition hover:text-ruby"
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={brand.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-ruby/14 bg-ruby px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
            >
              Request Details
            </a>
          </nav>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ruby/8 bg-ivory/95 lg:hidden">
          <div className="section-shell py-4">
            <div className="section-frame flex flex-col gap-3">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-ruby/8 bg-white/40 px-4 py-4 text-sm uppercase tracking-[0.24em] text-soot"
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
