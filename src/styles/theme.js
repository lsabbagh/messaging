// import useTheme from "./ThemeContext";
// import { useContext } from 'react';
// import { ThemeContext } from './ThemeContext';
// export function useTheme() {
//     return useContext(ThemeContext);
// }



export const getColors = (themeName) => {
    if (themeName === 'light') {
        return {
            bg: {
                i: '#fff',      //white
                ii: '#F0F0F0',  //pale grey
                iii: '#bbbbbb',  //grey
                iv: '#4FC0D0',  //torquoise blue
                v: '#0069FB',   //bright blue
                vi: '#098DF3',  //special blue Azure
            },
            font: {
                i: 'white',     //white
                ii: '#bbbbbb',  //grey
                iii: 'black',   //black
                iv: '#888888',  //dark grey
                v: '#ccc',      //light grey
                s: '#0069FB',   //bright blue
            }
        }
    }
    return {
        bg: {
            i: '#333',      //dark gray
            ii: '#444',//'#1A1A1A',  //very dark gray
            iii: '#555555', //medium gray
            iv: '#4FC0D0',  //turquoise blue
            v: '#0069FB',   //bright blue
            vi: '#098DF3',  //special blue Azure
        },
        font: {
            i: 'white',     //white
            ii: '#bbbbbb',  //grey
            iii: 'white',   //white
            iv: '#ccc',     //light grey
            v: '#888888',   //dark grey
            s: '#0069FB',   //bright blue
        }
    };
}


// export const colors = getColors('light')
// export const colors = getColors('dark')
// export const colors = getColors()

export const sizes = {
    huge: 50,
    title: 30,
    par: 20,
    smallPar: 16,
    small: 12,
    tiny: 8,
}

export const colors = {
    bg: {
        i: '#fff',      //white
        ii: '#F2F2F2',  //pale grey
        iii: '#bbbbbb',  //grey
        iv: '#4FC0D0',  //torquoise blue
        v: '#0069FB',   //bright blue
        vi: '#098DF3',  //special blue Azure
    },
    font: {
        i: 'white',     //white
        ii: '#bbbbbb',  //grey
        iii: 'black',   //black
        iv: '#888888',  //dark grey
        v: '#ccc',      //light grey
        s: '#0069FB',   //bright blue
    }
}