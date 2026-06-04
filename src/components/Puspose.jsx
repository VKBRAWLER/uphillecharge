import { motion } from "framer-motion";
import {
  FaChargingStation,
  FaTachometerAlt,
  FaMobileAlt,
  FaLeaf,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import PurposeFeature from "./PusposeFeature";

const features = [
  {
    Icon: FaChargingStation,
    title: "Build More Charging Stations",
    desc: "Expand fast and reliable EV charging stations across cities, highways and communities.",
  },
  {
    Icon: FaTachometerAlt,
    title: "Deliver Fast & Reliable Charging",
    desc: "Provide high-performance charging solutions with maximum safety and minimal downtime.",
  },
  {
    Icon: FaMobileAlt,
    title: "Smart, Simple & Seamless",
    desc: "Offer an intelligent platform with easy access, real-time updates and cashless payments.",
  },
  {
    Icon: FaLeaf,
    title: "Enable Clean & Sustainable Energy",
    desc: "Promote the use of clean energy and reduce carbon emissions for a greener tomorrow.",
  },
  {
    Icon: FaUsers,
    title: "Accessible for Everyone",
    desc: "Make EV charging affordable, convenient and accessible for all EV owners.",
  },
  {
    Icon: FaChartLine,
    title: "Innovate & Lead the Future",
    desc: "Continuously innovate with advanced technology to shape the future of mobility.",
  },
];

const Purpose = () => {
  return (
    <section
      id="purpose"
      className="bg-[#020625] py-16 lg:py-24 overflow-hidden"
    >
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-16 lg:mb-24">
          <p className="text-[#95FF00] font-semibold uppercase mb-4">
            Our Purpose
          </p>

          <h2 className="text-white text-3xl md:text-5xl xl:text-7xl font-bold">
            Powering the{" "}
            <span className="text-[#95FF00]">EV</span>{" "}
            Revolution
          </h2>
        </div>

        {/* MOBILE + TABLET + SMALL LAPTOP */}
        <div className="xl:hidden">

          <div className="flex justify-center mb-12">
            <motion.img
              src="/charger.png"
              alt="EV Charger"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="w-[220px] sm:w-[280px] md:w-[320px]"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((item, index) => (
              <PurposeFeature
                key={index}
                Icon={item.Icon}
                title={item.title}
                desc={item.desc}
              />
            ))}
          </div>
        </div>

        {/* LARGE DESKTOP */}
        <div className="hidden xl:block relative h-[850px] 2xl:h-[950px]">

          {/* Center Section */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

            {/* Circle */}
            <div
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[500px] h-[500px]
                2xl:w-[620px] 2xl:h-[620px]
                rounded-full
                border border-dashed
                border-[#95FF00]/40
              "
            />

            {/* Glow */}
            <div
              className="
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[320px] h-[320px]
                2xl:w-[420px] 2xl:h-[420px]
                rounded-full
                bg-[#95FF00]/20
                blur-[120px]
              "
            />

            {/* Charger */}
            <motion.img
              src="/charger.png"
              alt="EV Charger"
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="
                relative z-10
                w-[260px]
                2xl:w-[340px]
              "
            />
          </div>

          {/* LEFT TOP */}
          <div className="absolute left-[5%] top-[60px]">
            <PurposeFeature
              Icon={FaChargingStation}
              title="Build More Charging Stations"
              desc="Expand fast and reliable EV charging stations across cities, highways and communities."
            />
          </div>

          {/* LEFT MIDDLE */}
          <div className="absolute left-[2%] top-[330px]">
            <PurposeFeature
              Icon={FaTachometerAlt}
              title="Deliver Fast & Reliable Charging"
              desc="Provide high-performance charging solutions with maximum safety and minimal downtime."
            />
          </div>

          {/* LEFT BOTTOM */}
          <div className="absolute left-[5%] bottom-[80px]">
            <PurposeFeature
              Icon={FaMobileAlt}
              title="Smart, Simple & Seamless"
              desc="Offer an intelligent platform with easy access, real-time updates and cashless payments."
            />
          </div>

          {/* RIGHT TOP */}
          <div className="absolute right-[5%] top-[60px]">
            <PurposeFeature
              Icon={FaLeaf}
              title="Enable Clean & Sustainable Energy"
              desc="Promote the use of clean energy and reduce carbon emissions for a greener tomorrow."
              right
            />
          </div>

          {/* RIGHT MIDDLE */}
          <div className="absolute right-[2%] top-[330px]">
            <PurposeFeature
              Icon={FaUsers}
              title="Accessible for Everyone"
              desc="Make EV charging affordable, convenient and accessible for all EV owners."
              right
            />
          </div>

          {/* RIGHT BOTTOM */}
          <div className="absolute right-[5%] bottom-[80px]">
            <PurposeFeature
              Icon={FaChartLine}
              title="Innovate & Lead the Future"
              desc="Continuously innovate with advanced technology to shape the future of mobility."
              right
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Purpose;