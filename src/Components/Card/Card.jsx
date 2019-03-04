import React from 'react';

import './Card.css';

const Card = (props) => {
    const { robot, onClick } = props;
    const { id, name, email, username } = robot;
 
    return (
        <div className='Card bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick={() => onClick(id)}>
            <img src={`https://robohash.org/${username}?200x200`} alt={`Pic of ${name}`} height={200} width={200} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}



export default Card;