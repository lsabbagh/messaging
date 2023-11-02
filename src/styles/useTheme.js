import React from "react";
import { updateColors } from "./theme";

const Theme = () => {
    const [theme, setTheme] = React.useState('dark')

    const updateTheme = (data) => {
        setTheme(data);
    }
    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        console.log('....new..theme', theme);
    }
    React.useEffect(()=>{
        updateTheme(theme)
        updateColors()
    },[theme])
    
    const getTheme = () => theme

    // return null;
    return {
        getTheme,
        updateTheme,
        toggleTheme
    }
}

// export default Theme