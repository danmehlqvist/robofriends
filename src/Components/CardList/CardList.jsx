import React from 'react';

import Card from '../Card/Card';

const CardList = ({ robots }) => {
    return (
        <div>
            {(robots.length === 0) ? <h2>No robots match</h2> : null}
            {robots.map(x => <Card robot={x} key={x.id} />)}
        </div>
    )
}

export default CardList;