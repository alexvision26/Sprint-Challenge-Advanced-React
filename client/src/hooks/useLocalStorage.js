import { useState } from 'react';

export const useLocalStorage = (key, initialState) => {

    //Create a state variable to store selected style
    const [storedStyle, setStoredStyle] = useState(() => {
        //If statement checks which preferred style is saved in the local storage
        if (JSON.parse(window.localStorage.getItem(key))) {
            //if it's saved, return the saved value
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            //if not saved, set to default state
            window.localStorage.setItem(key, JSON.stringify(initialState))
            return initialState;
        }
    })

    //function that saves the set style to the local storage
    const setStyle = style => {
        setStoredStyle(style)
        window.localStorage.setItem(key, JSON.stringify(style))
    }

    //return the state and function to update the state
    return [storedStyle, setStyle];
}