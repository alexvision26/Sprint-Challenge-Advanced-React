import { useLocalStorage } from './useLocalStorage';

export const useNewStyle = (key, initialValue) => {

    //sets the new style state to the value return from the local storage whether it was the saved value in the storage, or the default value for new users
    const [newStyle, setNewStyle] = useLocalStorage(key, initialValue)

    const changeStyle = e => {
        setNewStyle({
            newStyle: !newStyle
        })
    }

    return [newStyle, changeStyle];
}