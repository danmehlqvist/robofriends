import React from 'react';

const Card = (props) => {
    const {robot} = props;
    const {name, email,username} = robot;
    
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${username}?200x200`} alt={`Pic of ${name}`} height={200} width={200}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;