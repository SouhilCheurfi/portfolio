"use client";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";
import Loading from "./Loading";
import { usePathname } from "next/navigation";

const ChildrenComponent = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full flex flex-col gap-4 items-center">
      <motion.div
        className="relative w-full max-w-6xl mx-auto aspect-16/8 squircle flex justify-center items-center gap-2 overflow-hidden bg-black shadow-2xl shadow-black/50 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Loading loading={loading} />
        {children}
      </motion.div>
    </div>
  );
};

export default ChildrenComponent;
