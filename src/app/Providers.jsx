"use client";
import { ThemeProvider } from "next-themes";

function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className=" min-h-screen transition-colors duration-300 select-none">
                {children}
            </div>
        </ThemeProvider>
    );
}

export default Providers;
