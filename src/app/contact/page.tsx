"use client";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 justify-center items-center px-30">
      <h1 className="text-4xl">Here is my Email</h1>
      <div className="flex gap-2">
        <Button
          variant={"outline"}
          size={"lg"}
          className="pointer-events-none text-xl"
        >
          souhil.cheurfi05@gmail.com
        </Button>
        <Button
          variant={"default"}
          size={"lg"}
          onClick={() =>
            navigator.clipboard.writeText("souhil.cheurfi05@gmail.com")
          }
        >
          Copy
        </Button>
      </div>
    </div>
  );
};

export default ContactPage;
