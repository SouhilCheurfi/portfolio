"use client";
import { AnimatePresence, motion } from "motion/react";
const Loading = ({ loading }: { loading: boolean }) => {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="w-full h-full flex justify-center items-center absolute top-0 left-0 bg-black z-50"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.3, delay: 1 } }}
        >
          <motion.div
            key={"loading"}
            className="rounded-xs bg-white"
            initial={{ width: 48, height: 16, opacity: 0 }}
            animate={{
              opacity: [1, 1, 1, 1, 1],
              width: [48, 16, 16, 16, 48],
              height: [16, 16, 48, 16, 16],
            }}
            transition={{
              duration: 1,
              delay: 1,
              ease: "linear",
              repeat: Infinity,
            }}
            exit={{
              width: [48, 16, 16, 16],
              height: [16, 16, 16, 16],
              opacity: [1, 1, 1, 0],
              borderRadius: ["2px", "2px", "2px", "50%"],
              rotate: [0, 0, 720, 720],
              transition: {
                duration: 1,
              },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loading;
