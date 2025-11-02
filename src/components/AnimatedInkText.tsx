import { useEffect, useState } from "react";

type AnimatedInkTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  visible?: boolean;
};

const AnimatedInkText = ({
  className,
  children,
  visible,
  ...props
}: AnimatedInkTextProps) => {
  const [maskSrc, setMaskSrc] = useState(``);
  useEffect(() => {
    setMaskSrc(`url(/ink.gif?${Date.now()})`);
  }, []);

  return (
    <p
      style={{
        WebkitMaskImage: maskSrc,
        maskImage: maskSrc,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "cover",
        maskSize: "cover",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      {...props}
      className={className}
    >
      {children}
    </p>
  );
};

export default AnimatedInkText;
