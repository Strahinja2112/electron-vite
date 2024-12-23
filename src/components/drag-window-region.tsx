import { config } from "@/lib/config";
import React, { type ReactNode } from "react";
import WindowButtons from "./window-buttons";

export default function DragWindowRegion() {
  return (
    <div className="sticky left-0 top-0">
      <div className="flex w-screen items-stretch justify-between border-b">
        <div className="draglayer w-full">
          {config.title && (
            <span className="flex flex-1 select-none whitespace-nowrap p-1 text-sm text-gray-400">
              {config.title}
            </span>
          )}
        </div>
        <WindowButtons />
      </div>
    </div>
  );
}
