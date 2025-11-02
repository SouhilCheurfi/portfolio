"use client";
import { motion } from "motion/react";

const AboutPage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center squircle overflow-hidden px-30 py-20 gap-6">
      <div className="w-full h-full flex flex-col items-start justify-center gap-10">
        <motion.h1
          initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ ease: "easeOut" }}
          className="text-7xl font-bold text-foreground"
        >
          Hi Again, I'm Souhil
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -50, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.1, ease: "easeOut" }}
          className="text-3xl font-dm-sans text-foreground"
        >
          I am a Frontend Developer specializing in crafting engaging and
          user-friendly web experiences. I give a blend of creativity and
          technology to bring ideas to life.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
