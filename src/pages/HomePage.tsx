import LangToggle from "@/components/language-toggle";
import ToggleTheme from "@/components/toggle-theme";
import React from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-bold">{t("title")}</h1>
        <LangToggle />
        <ToggleTheme />
      </div>
    </>
  );
}
