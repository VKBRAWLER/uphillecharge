import { motion } from "framer-motion";

const PurposeFeature = ({
  Icon,
  title,
  desc,
  right = false,
}) => {
  return (
    <motion.div
  whileHover={{ scale: 1.02 }}
  
   className={`flex gap-5 items-start max-w-[280px] 2xl:max-w-[360px]
${right ? "flex-row-reverse text-right" : ""}`}
  
>
  <div className="w-[70px] h-[70px] md:w-[90px] md:h-[90px] rounded-full border-2 border-white/20 bg-white/[0.03] backdrop-blur-sm flex items-center justify-center shrink-0">
    <Icon
      size={28}
      className="text-[#95FF00]"
    />
  </div>

  <div>
    <h3 className="text-white text-lg md:text-xl font-semibold mb-3">
      {title}
    </h3>

    <p className="text-white/60 text-sm md:text-base leading-relaxed">
      {desc}
    </p>
  </div>
</motion.div>
  );
};

export default PurposeFeature;