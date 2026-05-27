import { Camera, Mail, MapPin, MessageCircle, Phone, Pin, Play } from "lucide-react";
import { Link } from "react-router-dom";
import brandLogo from "../../assets/images/brand-wordmark.png";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-maroon/12 bg-[#f8edd0]">
      <div className="section-shell py-18">
        <div className="section-frame grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.9fr_1fr]">
          <div>
            <img src={brandLogo} alt="Murthy Atelier's by 9th" className="h-14 w-auto" />
            <p className="mt-5 max-w-md text-sm leading-7 text-ink/72">
              A heritage jewelry atelier shaped by temple forms, celebratory color, and the warmth
              of handcrafted South Indian adornment.
            </p>
          </div>

          <div>
            <p className="font-serif text-2xl text-maroon">Quick Links</p>
            <div className="mt-5 flex flex-col gap-3 text-sm text-ink/72">
              <Link to="/">Home</Link>
              <Link to="/collections">Collections</Link>
              <Link to="/services">Services</Link>
              <Link to="/blog">Journal</Link>
            </div>
          </div>

          <div>
            <p className="font-serif text-2xl text-maroon">Contact</p>
            <div className="mt-5 space-y-4 text-sm text-ink/72">
              <p className="flex items-center gap-3"><MapPin size={16} /> Mylapore Atelier, Chennai</p>
              <p className="flex items-center gap-3"><Phone size={16} /> +91 44 0000 0000</p>
              <p className="flex items-center gap-3"><Mail size={16} /> hello@murthyatelier.com</p>
            </div>
          </div>

          <div>
            <p className="font-serif text-2xl text-maroon">Newsletter</p>
            <p className="mt-5 text-sm leading-7 text-ink/72">
              Receive bridal edits, heritage stories, and first access to new collections.
            </p>
            <div className="mt-5 flex rounded-full border border-maroon/12 bg-white/55 p-1">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-ink outline-none placeholder:text-ink/40"
              />
              <button
                type="button"
                className="rounded-full bg-maroon px-5 text-sm font-semibold text-ivory"
              >
                Join
              </button>
            </div>
            <div className="mt-6 flex items-center gap-3 text-olive">
              {[Camera, MessageCircle, Play, Pin].map((Icon, index) => (
                <span key={index} className="luxury-border flex h-10 w-10 items-center justify-center rounded-full bg-white/55">
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-maroon/12 py-5 text-center text-xs uppercase tracking-[0.28em] text-maroon/55">
        Â© 2026 Murthy Atelier's by 9th. Crafted for heirloom futures.
      </div>
    </footer>
  );
}

export default Footer;
