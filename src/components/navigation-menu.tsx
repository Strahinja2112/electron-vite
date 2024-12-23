import { Link } from "@tanstack/react-router";
import React from "react";

export default function NavigationMenu() {
  return (
    <div className="flex w-full gap-2 p-1 text-sm">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/settings">Settings</Link>
    </div>
  );
}
