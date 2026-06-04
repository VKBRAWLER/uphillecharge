import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import LocationCard from "./LocationCard";
import { locationData } from "../data/locationData";

const Locations = () => {
  const showNavigation = locationData.length > 3;

  return (
    <section
      id="locations"
      className="bg-[#020625] py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#95FF00] font-semibold uppercase tracking-widest mb-4">
            Our Locations
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold">
            Charging Stations
          </h2>
        </motion.div>

        {/* Slider Container */}

        <div className="relative px-10">

          {/* Left Arrow */}

          {showNavigation && (
            <button
              className="
              locations-prev
              absolute
              left-0
              top-1/2
              -translate-y-1/2
              z-20
              w-14
              h-14
              rounded-full
              bg-[#0A0D26]
              border
              border-white/20
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#95FF00]
              hover:text-black
              transition-all
              duration-300
            "
            >
              <HiArrowLeft size={22} />
            </button>
          )}

          {/* Right Arrow */}

          {showNavigation && (
            <button
              className="
              locations-next
              absolute
              right-0
              top-1/2
              -translate-y-1/2
              z-20
              w-14
              h-14
              rounded-full
              bg-[#0A0D26]
              border
              border-white/20
              text-white
              flex
              items-center
              justify-center
              hover:bg-[#95FF00]
              hover:text-black
              transition-all
              duration-300
            "
            >
              <HiArrowRight size={22} />
            </button>
          )}

          {/* Swiper */}

          <Swiper
            modules={[Navigation]}
            navigation={
              showNavigation
                ? {
                    prevEl: ".locations-prev",
                    nextEl: ".locations-next",
                  }
                : false
            }
            spaceBetween={30}
            slidesPerView={3}
            speed={800}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              768: {
                slidesPerView: 2,
              },

              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {locationData.map((location) => (
              <SwiperSlide key={location.id}>
                <LocationCard
                  image={location.image}
                  city={location.city}
                />
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default Locations;