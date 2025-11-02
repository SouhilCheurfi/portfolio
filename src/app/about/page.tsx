"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

const AboutPage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full h-full flex items-center justify-center squircle overflow-hidden px-30 py-10 gap-6">
      <div className="w-full max-w-sm h-full relative squircle overflow-hidden my-96">
        <Image src={"/globe.svg"} alt="Selfie" fill className="object-cover" />
      </div>
      <div className="w-full max-w-xl h-full flex items-center justify-center">
        {/* <Image src={"/globe.svg"} alt="Selfie" fill className="object-cover" /> */}
      </div>
    </div>
  );
};

export default AboutPage;
