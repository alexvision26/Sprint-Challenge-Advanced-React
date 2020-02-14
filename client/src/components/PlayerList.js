import React from 'react';
import { useNewStyle } from '../hooks/useNewStyle';

import Player from './Player';

const PlayerList = props => {
    //this is the state value used to change the style. It is defaulted at false where the background is white. When it is set to true, it goes through the custom hook, adds or removes the class of style1 then it goes through the local storage hook and is saved into there.
    const [newStyle, setNewStyle] = useNewStyle('Style 1', false)
    
    // console.log(props.players)

    //this function stops the default behaivor of the button and instead, sets the newStyle state to the opposite of whatever it is set to, triggering it to go through the hooks like mentioned above.
    const styleButton = e => {
        e.preventDefault();
        setNewStyle(!newStyle)
    }

    return (
        <>
        <h2>Change Style: <button onClick={styleButton}>Click me</button></h2>
        <div className='card-container'>
            {props.players.map(e => {
                return (
                    <Player key={e.id} name={e.name} country={e.country}/> 
                )
            })}
        </div>
        </>
    )
}

export default PlayerList;