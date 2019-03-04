import React from 'react';

import Card from '../Card/Card';
import Spinner from '../Spinner/Spinner';


const CardList = ({ robots, isLoading }) => {
    return (
        <div>
            {isLoading ?
                <Spinner />
                :
                <div>
                    {(robots.length === 0) ? <h2>No robots match</h2> : null}
                    {robots.map(x => <Card robot={x} key={x.id} />)}
                </div>
            }
        </div>
    )
}

export default CardList;