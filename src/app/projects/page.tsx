import { Button } from "@/components/ui/button";
import Link from "next/link";

const ProjectsPage = () => {
  return (
    <div className="w-full h-full flex flex-col gap-10 items-center justify-center">
      <h1 className="text-4xl font-bold">No Published Projects Yet.</h1>
      <Button variant={"default"} size={"lg"} asChild>
        <Link href="/">Back To Home Page</Link>
      </Button>
    </div>
  );
};

export default ProjectsPage;
