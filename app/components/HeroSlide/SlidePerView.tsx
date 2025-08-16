"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { SlideData } from "../../types/slide";
interface HeroSliderProps {
  slides: SlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <div className="bg-white">
      <div className="relative container px-[100px] py-5 margin-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={{
            clickable: true,
            // el: ".custom-pagination",
          }}
          modules={[Pagination]}
          className="mySwiper rounded-2xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.imageAlt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
