import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { config } from "@/lib/config";
import { ChevronRight, Code2, Github } from "lucide-react";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between bg-background text-foreground">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8">
        <Badge className="mb-8" variant="outline">
          <a href={config.portfolio} target="_blank" className="flex items-center gap-2 pl-2">
            <span>See developer portfolio</span>
            <ChevronRight className="size-5" />
          </a>
        </Badge>
        <h2 className="text-5xl font-semibold">Welcome to the Home Page</h2>
        <p className="mt-4 text-center text-muted-foreground">
          This is a template for a desktop application built with Electron, Vite, ShadCN, and
          Tailwind CSS.
        </p>
        <div className="mt-8 flex space-x-4">
          <a
            href={config.github}
            target="_blank"
            className={buttonVariants({
              className: "space-x-2",
              variant: "secondary",
            })}
          >
            <Github />
            <span>See Code</span>
          </a>
          <a
            href={`${config.portfolio}/project/electron-vite`}
            target="_blank"
            className={buttonVariants({
              className: "space-x-2",
              variant: "secondary",
            })}
          >
            <Code2 />
            <span>Learn More</span>
          </a>
        </div>
      </main>
    </div>
  );
}
