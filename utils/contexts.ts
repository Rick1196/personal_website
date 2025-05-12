"use client";
import React from "react";

export const ThemeModeContext = React.createContext({ darkModeEnabled: false, setDarkModeEnabled: (value: boolean) => { } });
