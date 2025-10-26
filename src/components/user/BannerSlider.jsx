





import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


const slides = [
  {
    title: "Where Innovation Meets",
    highlight: "Sustainability",
    subtitle:
      "Leading the way in eco-friendly construction, recycling, and green building practices.",
    description:
      "We believe in creating a sustainable future through responsible construction practices, innovative recycling solutions, and environmentally conscious project execution. Join us in building a greener tomorrow.",
    image: "banner1.jpg",
  },
  {
    title: "Building a Greener",
    highlight: "Tomorrow",
    subtitle:
      "Empowering industries through responsible and sustainable project solutions.",
    description:
      "From manpower to recycling, we’re committed to creating eco-conscious solutions for every industry we serve.",
    image: "banner2.jpg",
  },
  {
    title: "Innovating for",
    highlight: "Eco-Friendly Solutions",
    subtitle: "Transforming ideas into sustainable actions for a better world.",
    description:
      "Our team focuses on sustainable design, green building materials, and recycling initiatives to create projects that make a positive impact on the environment.",
    image: "banner3.jpg",
  },
 
];




const BannerSlider = () => {
  return (
   <div className="relative w-full h-[90vh] overflow-hidden m-0 p-0">
  <Swiper
    modules={[Autoplay, EffectFade, Pagination]}
    effect="fade"
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    loop
    className="h-full w-full !mx-0 !px-0"
  >

        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {/* Background Image with Zoom Effect */}
            <div
              className="relative w-full h-full bg-center bg-cover flex items-center justify-center animate-zoom-slow"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45"></div>

              {/* Text Section */}
              <div className="relative z-10 text-center text-white px-6 max-w-3xl animate-fadeUp">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}{" "}
                  <span className="text-[#f15a29]">{slide.highlight}</span>
                </h1>
                <p className="text-lg md:text-xl font-medium mt-4">
                  {slide.subtitle}
                </p>
                <p className="text-sm md:text-base mt-3 text-gray-300">
                  {slide.description}
                </p>

                {/* Buttons */}
               <div className="mt-6 flex flex-wrap justify-center gap-4">
  <a
    href="/services"
    className="bg-gradient-to-r from-[#d61a46] to-[#c91653] text-white font-medium rounded-md px-5 py-2 hover:opacity-90 transition"
  >
    Explore Our Services
  </a>

  <a
    href="tel:+97444318992"
    className="border border-white text-white font-medium rounded-md px-5 py-2 hover:bg-white hover:text-black transition"
  >
    Contact Us
  </a>
</div>

           
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
