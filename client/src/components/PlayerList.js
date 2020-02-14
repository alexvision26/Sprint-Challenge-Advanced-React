import React from 'react';
import { useNewStyle } from '../hooks/useNewStyle';

const PlayerList = props => {
    const [newStyle, setNewStyle] = useNewStyle('Style 1', false)
    
    // console.log(props.players)

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
                    <div className='card'>
                    <h3>{e.name}</h3>
                    <h4>Country: {e.country}</h4>
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default PlayerList;