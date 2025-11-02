"use client";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Home() {
  return (
    <div className="relative flex h-full w-full flex-col items-start justify-start overflow-hidden">
      <BackgroundRippleEffect rows={12} />
      <div className="w-full h-full flex flex-col items-center justify-center gap-4">
        <h2 className="z-10 mx-auto max-w-4xl text-center text-2xl text-neutral-800 md:text-4xl lg:text-8xl dark:text-neutral-100 font-dm-sans font-light hover:scale-[1.05] transition-all duration-300 cursor-pointer">
          <LinkPreview url="https://github.com/SouhilCheurfi">
            Souhil Cheurfi
          </LinkPreview>
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-xl text-center text-neutral-800 dark:text-neutral-500">
          A Frontend Developer specializing in crafting engaging and
          user-friendly web experiences. I give a blend of creativity and
          technology to bring ideas to life.
        </p>
      </div>
    </div>
  );
}
