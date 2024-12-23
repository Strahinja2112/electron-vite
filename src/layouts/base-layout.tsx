import DragWindowRegion from "@/components/drag-window-region";
import NavigationMenu from "@/components/navigation-menu";
import React from "react";

export default function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DragWindowRegion title="electron-shadcn" />
      <NavigationMenu />
      <hr />
      <main>{children}</main>
    </>
  );
}
