import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "TaskForge" },
    { name: "description", content: "Welcome to Task Forge!" },
  ];
}

const HomePage = () => {
  return (
    <div className="w-full h-screen flex gap-4 justify-center items-center">
      <Link to="/sign-in">
        <Button size="sm">Login</Button>
      </Link>
      <Link to="/sign-up">
        <Button size="sm" variant="outline">
          Sign Up
        </Button>
      </Link>
    </div>
  );
};

export default HomePage;
