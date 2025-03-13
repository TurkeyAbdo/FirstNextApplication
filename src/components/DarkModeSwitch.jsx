"use client"

import {MdLightMode, MdDarkMode, MdLight} from "react-icons/md"
import { useTheme } from 'next-themes';
function DarkModeSwitch() {
    const [theme,setTheme] = useTheme()
    // const currentTheme = theme === "system" ? systemTheme : theme;
    return ( 
        <div>
                <MdDarkMode />
s                :
                <MdLightMode />
        </div>
     );
}

export default DarkModeSwitch;