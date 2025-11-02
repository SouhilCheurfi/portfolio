"use client";
import { Button } from "./ui/button";

const CallButton = () => {
  return (
    <Button
      variant="default"
      className="bg-foreground/5 glass absolute right-0 mr-4"
      size={"lg"}
    >
      Book a Call
      <p className="animate-pulse text-lg mb-[0.5px]">👋</p>
    </Button>
  );
};

export default CallButton;
