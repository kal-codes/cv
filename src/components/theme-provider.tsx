"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Using useEffect to ensure this only runs on the client side
  const [mounted, setMounted] = React.useState(false);
  
  React.useEffect(() => {
    setMounted(true);
  }, []);
  
  // Avoid rendering anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }
  
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
