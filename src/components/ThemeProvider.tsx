"use client";
import { useState } from "react";
import { ThemeModeContext } from "../../utils/contexts"

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
    const [darkModeEnabled, setDarkModeEnabled] = useState(false);
    return <ThemeModeContext.Provider value={{ darkModeEnabled, setDarkModeEnabled: (value) => setDarkModeEnabled(value) }}>
        <div
            className={`safe-top safe-left safe-right safe-bottom ${darkModeEnabled ? "dark-theme" : ""
                }`}
        >
            {children}
        </div>
    </ThemeModeContext.Provider>
}