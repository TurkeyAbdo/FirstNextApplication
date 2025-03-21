"use client"

import {MdLightMode, MdDarkMode, MdLight} from "react-icons/md"
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    
    useEffect(() => {
        setMounted(true);
    }, []);
    
    if (!mounted) return null;

    return ( 
        <div>
            {theme === "dark" ? <MdDarkMode className="text-xl cursor-pointer text-purple-400 hover:text-purple-600" onClick={() => setTheme("light")}/> : <MdLightMode className="text-xl cursor-pointer text-amber-400 hover:text-amber-600" onClick={() => setTheme("dark")} />}
        </div>
     );
}

export default DarkModeSwitch;