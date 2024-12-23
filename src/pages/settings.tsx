import { Button } from "@/components/ui/button";
import { toggleTheme } from "@/helpers/theme_helpers";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import React from "react";

type Props = {};

export default function Settings({}: Props) {
  const { theme, loaded, setTheme } = useTheme();

  if (!loaded) {
    return null;
  }

  return (
    <main className="flex w-full flex-1 flex-col space-y-6 p-3">
      <h2 className="text-3xl font-semibold">App Settings</h2>
      <div className="flex w-full items-center justify-between rounded-lg border bg-card p-2 shadow">
        <span className="text-xl font-medium text-card-foreground">Application Theme</span>
        <div className="flex items-center justify-center space-x-2">
          <Button
            className={`rounded-lg px-4 py-2 ${theme === "light" && "border-green-300"}`}
            variant={"outline"}
            onClick={() => {
              if (theme !== "light") {
                setTheme("light");
                toggleTheme();
              }
            }}
          >
            <Sun />
          </Button>
          <Button
            className={`rounded-lg px-4 py-2 ${theme === "dark" && "border-green-900"}`}
            variant={"outline"}
            onClick={() => {
              if (theme !== "dark") {
                setTheme("dark");
                toggleTheme();
              }
            }}
          >
            <Moon />
          </Button>
        </div>
      </div>
    </main>
  );
}
