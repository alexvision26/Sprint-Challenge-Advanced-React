import React from 'react';

const Player = props => {

    // console.log(props)

    return (
        <div>
            <div className='card'>
                    <h3>{props.name}</h3>
                    <h4>Country: {props.country}</h4>
                    </div>
        </div>
    )
}

export default Player;