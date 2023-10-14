import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface ISection {
  width: string;
  height: string;
  otherClassName: string;
  children: ReactNode;
}

const Section: React.FC<ISection> = ({
  width,
  height,
  otherClassName,
  children,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
      className={`${width} ${height} ${otherClassName}`}
    >
      {children}
    </motion.div>
  );
};

export { Section };
