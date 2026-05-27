import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

function HeroSlider({ slides }) {
  return (
    <section className="relative h-screen min-h-[760px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        parallax
        loop
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="image-tint absolute inset-0" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,166,74,0.24),transparent_34%)]" />

              <div className="section-shell absolute inset-0 flex items-center pt-20">
                <div className="section-frame">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl"
                    data-swiper-parallax="-250"
                  >
                    <span className="mb-5 inline-flex rounded-full border border-gold/40 bg-black/25 px-4 py-2 text-xs uppercase tracking-[0.34em] text-gold">
                      {slide.tag}
                    </span>
                    <h1 className="font-serif text-5xl leading-[0.95] text-ivory sm:text-7xl lg:text-[6rem]">
                      {slide.title}
                    </h1>
                    <p className="mt-6 max-w-2xl text-base leading-8 text-sand/85 sm:text-lg">
                      {slide.subtitle}
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                      <Link
                        to="/collections"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold to-bronze px-7 py-4 text-sm font-semibold uppercase tracking-[0.22em] text-charcoal"
                      >
                        Shop Collections
                        <ArrowRight size={16} />
                      </Link>
                      <Link
                        to="/services"
                        className="inline-flex items-center gap-2 rounded-full border border-sand/30 bg-white/8 px-7 py-4 text-sm uppercase tracking-[0.22em] text-ivory"
                      >
                        Explore Craft
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;
