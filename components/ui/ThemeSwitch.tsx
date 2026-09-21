"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeSwitch() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <Switch disabled />;
    }

    const currentTheme = theme === "system" ? resolvedTheme : theme;
    const isDark = currentTheme === "dark";

    const handleThemeChange = (checked: boolean) => {
        setTheme(checked ? "dark" : "light");
    };

    return (
        <Switch
            id="airplane-mode"
            checked={isDark}
            onCheckedChange={handleThemeChange}
        />
    );
}