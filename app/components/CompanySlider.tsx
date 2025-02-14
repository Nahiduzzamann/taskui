"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
const companies = [
  { id: 1, logo: "/Images/dummy1.png", name: "INSEE" },
  { id: 2, logo: "/Images/logo.png", name: "AMANN BANGLADESH" },
  { id: 3, logo: "/Images/dummy2.png", name: "Elite Paint" },
  { id: 4, logo: "/Images/logo.png", name: "Crown Cement" },
  { id: 5, logo: "/Images/logo.png", name: "Runner" },
  { id: 6, logo: "/Images/logo.png", name: "BRAC Bank" },
  { id: 7, logo: "/Images/logo.png", name: "BRAC Bank" },
];

const CompanySlider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="relative w-full  py-10 mb-40">
      <h2 className="text-center text-2xl lg:text-3xl font-semibold text-[#0F303B] pt-6 md:pt-10">
        We Collaborate With Many Leading Companies
      </h2>
      <div className="container mx-auto  py-6 ">
      <div className="relative px-10 bg-white mx-3 py-6 rounded-md">
        {/* Left Arrow */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition duration-300 "
        >
          <IoIosArrowBack className="h-8 w-8" />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2} // Force 1 item on mobile
          centeredSlides={true} // Ensure centering on small screens
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            768: { slidesPerView: 3, centeredSlides: false },
            1024: { slidesPerView: 4, centeredSlides: false },
            1280: { slidesPerView: 5, centeredSlides: false },
          }}
          autoplay={{ delay: 2000 }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop
          className="w-full"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id} className="flex justify-center">
              <div className="w-32 h-24 flex items-center justify-center border rounded-lg bg-gray-100 shadow-sm">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={100}
                  height={50}
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Right Arrow */}
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 hover:scale-110 transition duration-300 "
        >
          <IoIosArrowForward className="h-8 w-8" />
        </button>
      </div>
      </div>
      {/* Additional CSS for Centering */}
     
    </div>
  );
};

export default CompanySlider;
