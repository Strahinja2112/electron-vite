import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-between bg-background text-foreground">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8">
        <h2 className="text-5xl font-semibold">Welcome to the Home Page</h2>
        <p className="mt-4 text-center text-muted-foreground">
          This is a template for a desktop application built with Electron, Vite, ShadCN, and
          Tailwind CSS.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </main>
    </div>
  );
}
