import {
  CircleDot,
  Crown,
  Gem,
  HeartHandshake,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  ShieldCheck,
  RefreshCcw,
  Gem,
  Sparkles,
  CircleDot,
  Crown,
  HeartHandshake,
};

function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] ?? Gem;

  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="luxury-card luxury-border rounded-[2rem] p-6"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-maroon/10 text-maroon">
        <Icon size={24} />
      </div>
      <h3 className="mt-6 font-serif text-3xl text-maroon">{service.title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink/72">{service.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {service.highlights.map((highlight) => (
          <span
            key={highlight}
            className="rounded-full border border-maroon/10 bg-white/55 px-3 py-2 text-[11px] uppercase tracking-[0.24em] text-olive/85"
          >
            {highlight}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

export default ServiceCard;
