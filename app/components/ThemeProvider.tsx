"use client";

import React, { useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const system = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

    // Menambahkan pengecekan validitas untuk `stored`
    const isValidTheme = (value: string | null): value is "light" | "dark" =>
      value === "light" || value === "dark";

    const initial: "light" | "dark" = isValidTheme(stored) ? stored : system;

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = React.createContext({
  theme: "light",
  toggleTheme: () => {},
});
