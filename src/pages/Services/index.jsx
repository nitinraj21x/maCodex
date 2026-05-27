import { motion } from "framer-motion";
import { useMemo } from "react";
import ServiceCard from "../../components/ServiceCard";
import services from "../../data/services.json";
import bannerVeil from "../../assets/banners/veil.svg";
import { getImageByIndex, withServiceImages } from "../../utils/localMedia";

const detailedServices = [
  {
    id: "repair",
    title: "Repair",
    description:
      "Structural strengthening, clasp renewal, solder balancing, and invisible corrections handled with a collector's eye.",
    image: getImageByIndex(0),
    cards: ["Clasp & lock restoration", "Joint reinforcement", "Heirloom wear analysis"],
  },
  {
    id: "replacement",
    title: "Replacement",
    description:
      "From a missing pair to a lost central stone, replacements are matched with tonal and structural sensitivity.",
    image: getImageByIndex(1),
    cards: ["Stone sourcing", "Pair recreation", "Hallmarked metal renewal"],
  },
  {
    id: "redesign",
    title: "Redesign",
    description:
      "We transform inherited gold into new heirlooms without erasing the sentiment, proportion, or ceremonial memory of the original.",
    image: getImageByIndex(2),
    cards: ["Concept sketching", "Heirloom recomposition", "Modern bridal remastering"],
  },
];

function ServicesPage() {
  const localServices = useMemo(() => withServiceImages(services), []);

  return (
    <div className="pt-22">
      <section className="section-shell">
        <div className="section-frame relative overflow-hidden rounded-[2rem] border border-maroon/10">
          <img src={getImageByIndex(4)} alt="Atelier services" className="h-[520px] w-full object-cover" />
          <img src={bannerVeil} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-55" />
          <div className="image-tint absolute inset-0" />
          <div className="absolute inset-0 flex items-end p-8 sm:p-10 lg:p-14">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.35em] text-ivory">Atelier Services</p>
              <h1 className="mt-4 font-serif text-5xl text-ivory sm:text-6xl">Care, restoration, and bridal curation with luxury precision</h1>
              <p className="mt-5 text-base leading-8 text-ivory/82">
                Each service is designed to protect not just the jewel, but the memory, ceremony, and craft language it carries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-24">
        <div className="section-frame">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-olive">Service Overview</p>
            <h2 className="mt-4 font-serif text-5xl text-maroon">A premium service suite for heirloom longevity</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {localServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-24">
        <div className="section-frame space-y-10">
          {detailedServices.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="luxury-card luxury-border overflow-hidden rounded-[2rem]"
            >
              <div className={`grid items-center gap-8 ${index % 2 === 0 ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"}`}>
                <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"} relative aspect-[4/3] overflow-hidden`}>
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" loading="lazy" />
                  <div className="image-tint absolute inset-0" />
                </div>
                <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"} p-8 sm:p-10 lg:p-12`}>
                  <p className="text-xs uppercase tracking-[0.34em] text-olive">Signature Service</p>
                  <h3 className="mt-4 font-serif text-5xl text-maroon">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-ink/72">{service.description}</p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    {service.cards.map((card) => (
                      <div key={card} className="rounded-[1.5rem] border border-maroon/10 bg-white/55 p-5">
                        <p className="text-xs uppercase tracking-[0.28em] text-olive">Detail</p>
                        <p className="mt-3 text-sm leading-7 text-ink/70">{card}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
