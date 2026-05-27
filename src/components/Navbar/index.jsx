import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/images/brand-wordmark.png";

const links = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-b border-maroon/10 bg-[rgba(250,239,208,0.92)] shadow-[0_18px_40px_rgba(105,58,48,0.08)] backdrop-blur-xl"
            : "border-b border-maroon/8 bg-[rgba(250,239,208,0.72)] backdrop-blur-md"
        }`}
      >
        <div className="section-shell">
          <div className="section-frame flex h-22 items-center justify-between gap-6">
            <NavLink to="/" className="flex items-center gap-4">
              <img src={brandLogo} alt="Murthy Atelier's by 9th" className="h-12 w-auto sm:h-14" />
              <div className="hidden sm:block">
                <p className="text-[11px] uppercase tracking-[0.35em] text-olive/80">Jewelry Atelier</p>
                <p className="mt-1 text-sm text-maroon/70">Rooted in ceremonial color and craft</p>
              </div>
            </NavLink>

            <nav className="hidden items-center gap-8 lg:flex">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `nav-glow relative text-sm uppercase tracking-[0.32em] transition-colors ${
                      isActive ? "text-maroon" : "text-ink/75 hover:text-maroon"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              {[Search, Heart, ShoppingBag].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={Icon.name}
                  className="luxury-border flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-olive transition hover:-translate-y-0.5 hover:border-maroon/30 hover:text-maroon"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>

            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen(true)}
              className="luxury-border flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-olive lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[rgba(248,237,203,0.96)] backdrop-blur-xl lg:hidden"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 24, opacity: 0 }}
              transition={{ duration: 0.45 }}
              className="flex min-h-screen flex-col px-6 py-6"
            >
              <div className="mb-16 flex items-center justify-between">
                <div>
                  <img src={brandLogo} alt="Murthy Atelier's by 9th" className="h-12 w-auto" />
                  <p className="mt-2 text-xs uppercase tracking-[0.35em] text-olive/80">Curated in ceremonial color</p>
                </div>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsOpen(false)}
                  className="luxury-border flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-olive"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-8">
                {links.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className="font-serif text-5xl text-maroon transition hover:text-olive"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {[Search, Heart, ShoppingBag].map((Icon, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={Icon.name}
                    className="luxury-border flex h-11 w-11 items-center justify-center rounded-full bg-white/45 text-olive"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
