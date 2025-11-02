"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CircleUserRound, Globe, Mail, SquareChartGantt } from "lucide-react";
import { AnimatePresence, motion, usePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname = usePathname();
  const links = [
    { name: "About", href: "/about", icon: <CircleUserRound size={24} /> },
    {
      name: "Projects",
      href: "/projects",
      icon: <SquareChartGantt size={24} />,
    },
    { name: "Contact", href: "/contact", icon: <Mail size={24} /> },
    { name: "Socials", href: "/socials", icon: <Globe size={24} /> },
  ];

  return (
    <motion.div
      className="flex justify-center items-center gap-2 w-fit rounded-full bg-foreground/5 backdrop-blur-lg border p-2 border-foreground/10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {links.map((link) => (
          <motion.div
            className={"w-10 h-10"}
            animate={{
              width: hovered === link.name || link.href === pathname ? 100 : 40,
            }}
            transition={{
              ease: "anticipate",
              duration: 0.3,
            }}
            key={link.name}
            layout
          >
            <Link href={link.href}>
              <Button
                variant="default"
                key={link.name}
                className={cn(
                  "w-full h-full flex justify-start items-center",
                  link.href === pathname &&
                    "bg-foreground/10 [box-shadow:inset_1px_1px_1px_0_rgba(255,255,255,0.4),inset_-2px_-2px_1px_0_rgba(255,255,255,0.4),0_2px_10px_0_rgba(255,255,255,0.2)]"
                )}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
              >
                {link.icon}
                {link.name === hovered && link.href != pathname && (
                  <motion.span
                    key={link.name}
                    className="w-full"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                    }}
                    transition={{
                      delay: 0,
                      ease: "anticipate",
                    }}
                    exit={{
                      opacity: 0,
                    }}
                    layout
                  >
                    {link.name}
                  </motion.span>
                )}
                {link.href === pathname && (
                  <span className="w-full">{link.name}</span>
                )}
              </Button>
            </Link>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
