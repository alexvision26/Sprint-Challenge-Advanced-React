import React from 'react';

const PlayerList = props => {

    console.log(props.players)

    return (
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
    )
}

export default PlayerList;