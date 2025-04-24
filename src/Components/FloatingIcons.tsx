import { motion } from "framer-motion";

interface FloatingIconProps {
  src: string;
  className?: string;
}

const FloatingIcon = ({ src, className }: FloatingIconProps) => {
  return (
    <motion.img
      src={src}
      alt="floating icon"
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingIcon;
