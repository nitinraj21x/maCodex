import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function StorySlider({ slides }) {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop
      className="overflow-hidden rounded-[2rem] border border-maroon/10 bg-white/45"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.title}>
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative aspect-[4/3] overflow-hidden rounded-t-[2rem] lg:rounded-l-[2rem] lg:rounded-tr-none">
              <img src={slide.image} alt={slide.title} loading="lazy" className="h-full w-full object-cover" />
              <div className="image-tint absolute inset-0" />
            </div>
            <div className="p-6 sm:p-8 lg:p-12">
              <p className="text-xs uppercase tracking-[0.34em] text-olive">Story Slide</p>
              <h3 className="mt-4 font-serif text-4xl text-maroon">{slide.title}</h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink/72">{slide.text}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default StorySlider;
