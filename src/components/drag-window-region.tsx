import React, { type ReactNode } from "react";
import WindowButtons from "./window-buttons";

interface DragWindowRegionProps {
  title?: ReactNode;
}

export default function DragWindowRegion({ title }: DragWindowRegionProps) {
  return (
    <div className="flex w-screen items-stretch justify-between">
      <div className="draglayer w-full">
        {title && (
          <div className="flex flex-1 select-none whitespace-nowrap p-2 text-xs text-gray-400">
            {title}
          </div>
        )}
      </div>
      <WindowButtons />
    </div>
  );
}
