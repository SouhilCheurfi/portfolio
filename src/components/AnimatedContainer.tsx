import { motion, type Easing } from "motion/react";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type AnimatedContainerProps = HTMLAttributes<HTMLDivElement> & {
  duration?: number;
  delay?: number;
  ease?: Easing;
  interactive?: boolean;
};

const AnimatedContainer = ({
  className,
  duration,
  delay,
  ease,
  interactive,
  ...props
}: AnimatedContainerProps) => {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center",
        interactive &&
          "cursor-pointer hover:bg-muted/30 transition-colors duration-300",
        className
      )}
      {...props}
    >
      <motion.div
        className="absolute z-50 -top-px w-[calc(100%+100px)] h-1 rounded-[150%] bg-[linear-gradient(to_right,transparent_0%,var(--color-muted)_30px,var(--color-muted)_calc(100%-30px),transparent_100%)]"
        initial={{
          width: 0,
        }}
        animate={{
          width: "calc(100% + 100px)",
        }}
        transition={{
          duration: duration || 1,
          ease: ease || "easeOut",
        }}
      />
      <motion.div
        className="absolute z-50 -bottom-px w-[calc(100%+100px)] h-1 rounded-[150%] bg-[linear-gradient(to_right,transparent_0%,var(--color-muted)_30px,var(--color-muted)_calc(100%-30px),transparent_100%)]"
        initial={{
          width: 0,
        }}
        animate={{
          width: "calc(100% + 100px)",
        }}
        transition={{
          duration: duration || 1,
          ease: ease || "easeOut",
        }}
      />
      <motion.div
        className="absolute z-50 -right-px w-1 h-[calc(100%+100px)] rounded-[150%] bg-[linear-gradient(to_bottom,transparent_0%,var(--color-muted)_30px,var(--color-muted)_calc(100%-30px),transparent_100%)]"
        initial={{
          height: 0,
        }}
        animate={{
          height: "calc(100% + 100px)",
        }}
        transition={{
          duration: duration || 1,
          delay: delay || 0.3,
          ease: ease || "easeOut",
        }}
      />
      <motion.div
        className="absolute z-50 -left-px w-1 h-[calc(100%+100px)] rounded-[150%] bg-[linear-gradient(to_bottom,transparent_0%,var(--color-muted)_30px,var(--color-muted)_calc(100%-30px),transparent_100%)]"
        initial={{
          height: 0,
        }}
        animate={{
          height: "calc(100% + 100px)",
        }}
        transition={{
          duration: duration || 1,
          delay: delay || 0.3,
          ease: ease || "easeOut",
        }}
      />
      {props.children}
    </div>
  );
};

export default AnimatedContainer;
