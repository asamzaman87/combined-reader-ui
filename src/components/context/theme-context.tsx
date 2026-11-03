"use client";

import { PaletteMode } from "@mui/material";
import React, { createContext, useContext } from "react";

interface ThemeContextType {
  mode: PaletteMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  return context ?? ({} as ThemeContextType);
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = React.useState<PaletteMode>("dark");

  React.useEffect(() => {
    const savedMode =
      typeof window !== "undefined" &&
      (localStorage.getItem("theme") as PaletteMode | null);
    if (savedMode === "light" || savedMode === "dark") {
      setMode(savedMode);
    } else {
      localStorage.setItem("theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const newMode: PaletteMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newMode);
    }
  };

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
