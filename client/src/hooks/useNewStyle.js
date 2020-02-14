import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useNewStyle = (key, initialValue) => {

    //sets the new style state to the value return from the local storage whether it was the saved value in the storage, or the default value for new users
    const [newStyle, setNewStyle] = useLocalStorage(key, initialValue)

    useEffect(() => {
        //checks the state value of newStyle. This toggles the style1 class that changes the background of the application
        if (newStyle === true) { 
            return document.querySelector('html').classList.add('style1')
        } else {
            return document.querySelector('html').classList.remove('style1')
        }
    }, [newStyle])
    //this function only runs when the newStyle state is changed.

    //returns the state value and setter function
    return [newStyle, setNewStyle];
}