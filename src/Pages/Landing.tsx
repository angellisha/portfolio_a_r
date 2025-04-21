import { motion } from "framer-motion";

import blobs from "../Assets/Images/blobs.svg";
import chibi_me from "../Assets/Images/chibi_me.svg";

const LandingPage = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-purple-400">
      {/* Animated elements here */}

      <motion.img 
        src={blobs}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Other animated icons */}

      {/* Chibi Character in Center */}
      <motion.img 
        src={chibi_me}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 100 }}
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Welcome Text */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-white"
      >
        Welcome to My Creative World
      </motion.h1>
    </div>
  );
};

export default LandingPage;
