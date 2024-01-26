import { motion } from "framer-motion";

const Theme = ({ theme, image }: { theme: string; image?: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      style={{ backgroundImage: image }}
      className="flex items-center bg-gray justify-center w-full h-full bg-cover rounded-[2rem] flex-col shadow-xl hover:shadow-2xl grayscale-[60%]"
    >
      <h2
        style={{ filter: "drop-shadow(2px 4px 6px #1A1A1A)" }}
        className="text-4xl font-bold text-center text-white"
      >
        {theme}
      </h2>
    </motion.div>
  );
};

export default Theme;
