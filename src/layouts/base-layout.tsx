import DragWindowRegion from "@/components/drag-window-region";
import NavigationMenu from "@/components/navigation-menu";
import React from "react";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col items-start justify-center">
      <DragWindowRegion />
      <main className="flex w-full flex-1 items-stretch overflow-y-scroll border-t-0 *:w-full">
        {children}
      </main>
      <NavigationMenu />
    </div>
  );
}
