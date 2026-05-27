import { Link } from "react-router-dom";
import { brand, navigation } from "../data/siteContent";
import { media } from "../utils/localMedia";

const footerLinks = [
  { label: "Instagram", href: `https://instagram.com/${brand.instagram}` },
  { label: "WhatsApp Inquiry", href: brand.whatsappLink },
  { label: "Email", href: `mailto:${brand.email}` },
  { label: "Appointment Booking", href: "/consultation", internal: true },
  { label: "Atelier Location", href: "https://maps.google.com/?q=South+Mada+Street+Mylapore+Chennai" },
  { label: "Care Guide", href: "/journal" },
  { label: "Custom Orders", href: "/consultation", internal: true },
];

function Footer() {
  return (
    <footer className="relative z-10 mt-24 border-t border-ruby/10 bg-[#f8edd0]">
      <div className="section-shell py-14">
        <div className="section-frame grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <img src={media.brandWordmark} alt={brand.name} className="h-14 w-auto" />
            <p className="max-w-2xl text-sm leading-7 text-soot/78">
              A premium jewelry house shaped by Tamil heritage, temple geometry, and a belief
              that the finest jewels are the ones that remain meaningful over time.
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-ruby">{brand.signature}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ruby">Explore</p>
              <div className="mt-4 space-y-3 text-sm text-soot/78">
                {navigation.map((item) => (
                  <Link key={item.href} to={item.href} className="block transition hover:text-ruby">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-ruby">Connect</p>
              <div className="mt-4 space-y-3 text-sm text-soot/78">
                {footerLinks.map((item) =>
                  item.internal ? (
                    <Link key={item.label} to={item.href} className="block transition hover:text-ruby">
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block transition hover:text-ruby"
                    >
                      {item.label}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="ornament-line mt-10" />
        <div className="section-frame mt-6 flex flex-col gap-3 text-sm text-soot/72 sm:flex-row sm:items-center sm:justify-between">
          <p>{brand.address}</p>
          <p>{brand.name} — Heirloom Jewels Crafted to Endure</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
