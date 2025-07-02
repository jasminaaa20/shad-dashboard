import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";

const HomePage = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button variant="default">
        <CirclePlus />
        Click Me
      </Button>
    </div>
  );
};

export default HomePage;
