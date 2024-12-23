import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-between bg-background text-foreground">
      <header className="w-full bg-card pt-8 text-primary shadow-md">
        <h1 className="text-center text-5xl font-bold">{config.title}</h1>
      </header>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-8">
        <h2 className="text-2xl font-semibold">Welcome to the Home Page</h2>
        <p className="mt-4 text-center text-muted-foreground">
          This is a template for a desktop application built with Electron, Vite, ShadCN, and
          Tailwind CSS.
        </p>
        <div className="mt-8 flex space-x-4">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </main>
      <footer className="w-full bg-secondary p-4 text-center text-secondary-foreground">
        <p>
          © {new Date().getFullYear()} {config.title}. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
