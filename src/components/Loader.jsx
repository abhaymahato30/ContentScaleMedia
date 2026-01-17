import { motion } from "framer-motion";
import logo from "../assets/logo-light.png";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="
        fixed inset-0 z-[9999]
        flex items-center justify-center
        bg-[#315B46]
      "
    >
      <div className="flex flex-col items-center gap-6">
        {/* LOGO */}
        <motion.img
          src={logo}
          alt="ContentHouseMedia"
          className="h-14 w-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* LOADING BAR */}
        <div className="relative h-1 w-48 overflow-hidden rounded-full bg-[#EFECCE]/30">
          <motion.div
            className="absolute left-0 top-0 h-full w-1/3 rounded-full bg-[#EFECCE]"
            animate={{ x: ["-100%", "300%"] }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* TEXT */}
        <p className="text-xs tracking-widest text-[#EFECCE]/80 uppercase">
          Loading experience
        </p>
      </div>
    </motion.div>
  );
}
