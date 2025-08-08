"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { SlideData } from "../../types/slide";
import IconLeftArrow from "../global/IconLeftArrow";
import IconRightArrow from "../global/IconRightArrow";
interface HeroSliderProps {
  slides: SlideData[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  return (
    <div className="bg-white">
      <div className="relative container px-[119px] py-5">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={false}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[Navigation, Pagination]}
          className="mySwiper rounded-2xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.imageAlt} />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconLeftArrow className="custom-swiper-button-prev" />
        <IconRightArrow className="custom-swiper-button-next" />
      </div>
    </div>
  );
}
