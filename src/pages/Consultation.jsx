import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import SectionHeading from "../components/SectionHeading";
import { bespokeContent, brand, consultationSteps } from "../data/siteContent";
import { getGalleryImage } from "../utils/localMedia";
import { fadeUp } from "../utils/motion";

function ConsultationPage() {
  return (
    <>
      <PageHero
        eyebrow="Consultation"
        title="Create something personal, or let an heirloom begin again."
        description={bespokeContent.description}
        image={getGalleryImage(3)}
        compact
      />

      <section className="section-shell py-14">
        <div className="section-frame grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow="How It Begins"
            title="A private, story-led conversation."
            description="Consultations are designed to feel considered and calm, allowing sentiment, silhouette, and ceremony to guide the direction."
          />
          <div className="grid gap-5">
            {consultationSteps.map((step, index) => (
              <motion.article key={step} {...fadeUp} className="vellum-card rounded-[1.8rem] p-7">
                <p className="text-xs uppercase tracking-[0.34em] text-ruby">Step {index + 1}</p>
                <p className="mt-4 font-display text-3xl text-soot">{step}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-14">
        <motion.div {...fadeUp} className="section-frame overflow-hidden rounded-[2rem] border border-ruby/10 bg-white/40 shadow-luxury">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative">
              <div className="absolute inset-0 image-fade" />
              <img src={getGalleryImage(0)} alt="Consultation mood" className="h-full min-h-[420px] w-full object-cover" />
            </div>
            <div className="p-8 sm:p-10">
              <SectionHeading
                eyebrow="Connect"
                title="Share your story with the atelier."
                description="No pricing-first prompts, no rushed checkout behavior. Just a measured path toward a meaningful piece."
              />
              <div className="mt-8 space-y-4 text-base leading-8 text-soot/76">
                <p>Email: <a href={`mailto:${brand.email}`} className="text-ruby">{brand.email}</a></p>
                <p>WhatsApp: <a href={brand.whatsappLink} target="_blank" rel="noreferrer" className="text-ruby">{brand.phone}</a></p>
                <p>Atelier: {brand.address}</p>
              </div>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={brand.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-ruby px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-ivory transition hover:bg-garnet"
                >
                  Begin your consultation
                </a>
                <a
                  href={`mailto:${brand.email}?subject=Custom%20Jewelry%20Inquiry`}
                  className="rounded-full border border-ruby/15 bg-white/35 px-7 py-4 text-center text-sm font-semibold uppercase tracking-[0.28em] text-soot transition hover:border-ruby/30 hover:text-ruby"
                >
                  Share your story
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default ConsultationPage;
