'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { cn } from '@/utils/cn';

// Swiper CSS'lerini import et
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface CarouselProps {
  slides: {
    id: string;
    image: string;
    title: string;
    description: string;
    link?: string;
  }[];
  className?: string;
}

const Carousel: React.FC<CarouselProps> = ({ slides, className }) => {
  return (
    <div className={cn('relative group', className)}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-[400px] md:h-[500px] lg:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button className="swiper-button-prev absolute left-6 top-1/2 z-10 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 w-14 h-14 flex items-center justify-center">
        <IconChevronLeft className="h-6 w-6" />
      </button>
      <button className="swiper-button-next absolute right-6 top-1/2 z-10 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg border border-white/20 opacity-0 group-hover:opacity-100 w-14 h-14 flex items-center justify-center">
        <IconChevronRight className="h-6 w-6" />
      </button>

      {/* Custom Pagination */}
      <div className="swiper-pagination absolute bottom-6 left-1/2 z-10 -translate-x-1/2" />
      
      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6 !important;
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-bullet:hover {
          opacity: 0.8 !important;
          transform: scale(1.2) !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          background: white !important;
          transform: scale(1.3) !important;
        }
        .swiper-button-prev,
        .swiper-button-next {
          color: white !important;
        }
        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: rgba(255, 255, 255, 0.25) !important;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
