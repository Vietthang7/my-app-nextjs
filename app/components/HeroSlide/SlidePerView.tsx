"use client";
import "swiper/css";
import Link from "next/link";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { SlideData } from "../../types/slide";
import IconRight from "../global/IconRight";
interface HeroSliderProps {
  slides: SlideData[];
  title?: string;
  category?: string;
}

export default function SlidePerView({ slides,title, category }: HeroSliderProps) {
  return (
    <div className="bg-white">
      <div className="relative container pt-0 py-30">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl text-secondary font-medium">
            {title} <span className="text-primary">{category}</span>
          </h2>
          <Link
            href="/products"
            className="text-black hover:text-primary flex items-center gap-1"
          >
            View All
            <IconRight />
          </Link>
        </div>
        <div className="border-[1px] mb-10 mt-4"></div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={false}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper rounded-2xl"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="rounded-2xl">
              <img src={slide.image} alt={slide.imageAlt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
