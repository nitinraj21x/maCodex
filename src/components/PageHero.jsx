import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/motion";

function PageHero({
  eyebrow,
  title,
  description,
  image,
  primaryCta,
  secondaryCta,
  accent,
  compact = false,
}) {
  return (
    <section className={`section-shell ${compact ? "pt-16" : "pt-10 sm:pt-16"}`}>
      <div className="section-frame grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div {...fadeUp} className="relative z-10 py-10">
          <p className="text-xs uppercase tracking-[0.36em] text-ruby">{eyebrow}</p>
          <h1 className="mt-5 text-balance font-display text-5xl leading-[0.92] text-soot sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-soot/76 sm:text-lg">
            {description}
          </p>
          {accent ? (
            <p className="signature-text mt-8 text-3xl text-ruby/86 sm:text-4xl">{accent}</p>
          ) : null}
          {(primaryCta || secondaryCta) ? (
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              {primaryCta ? (
                <Link
                  to={primaryCta.href}
                  className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
                >
                  {primaryCta.label}
                </Link>
              ) : null}
              {secondaryCta ? (
                secondaryCta.href.startsWith("/") ? (
                  <Link
                    to={secondaryCta.href}
                    className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
                  >
                    {secondaryCta.label}
                  </Link>
                ) : (
                  <a
                    href={secondaryCta.href}
                    className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
                  >
                    {secondaryCta.label}
                  </a>
                )
              ) : null}
            </div>
          ) : null}
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="relative overflow-hidden rounded-[2rem] shadow-luxury"
        >
          <div className={`absolute inset-0 image-fade ${compact ? "opacity-70" : ""}`} />
          <img
            src={image}
            alt={title}
            className={`w-full object-cover ${compact ? "h-[420px] sm:h-[520px]" : "h-[520px] sm:h-[620px]"}`}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
