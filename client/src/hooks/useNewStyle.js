import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useNewStyle = (key, initialValue) => {

    //sets the new style state to the value return from the local storage whether it was the saved value in the storage, or the default value for new users
    const [newStyle, setNewStyle] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if (newStyle === true) { 
            return document.querySelector('html').classList.add('style1')
        } else {
            return document.querySelector('html').classList.remove('style1')
        }
    })

    return [newStyle, setNewStyle];
}