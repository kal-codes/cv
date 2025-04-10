"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // After mounting, we can show the appropriate icon
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="outline"
        size="icon"
        className="size-8 rounded-md opacity-0"
      >
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-8 rounded-md"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      title={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      <SunIcon 
        className={`h-4 w-4 transition-all ${resolvedTheme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} 
      />
      <MoonIcon 
        className={`absolute h-4 w-4 transition-all ${resolvedTheme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} 
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
