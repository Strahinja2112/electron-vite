import { getCurrentTheme, ThemePreferences } from "@/helpers/theme_helpers";
import { ThemeMode } from "@/lib/types/theme-mode";
import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    async function run() {
      const theme = await getCurrentTheme();

      if (theme) {
        setTheme(theme.local);
      }
    }

    run();
  }, []);

  return {
    theme,
    loaded: theme !== null,
    setTheme,
  };
}
