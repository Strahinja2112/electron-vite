import { Link } from "@tanstack/react-router";
import React from "react";

export default function NavigationMenu() {
  return (
    <ul className="flex w-full gap-2 border-b p-1 text-sm">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  );
}
