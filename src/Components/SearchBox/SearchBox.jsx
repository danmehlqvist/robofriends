import React from 'react';

import './SearchBox.css';

const SearchBox = ({searchField, searchChange}) => {
    return (
        <div className='SearchBox p2'>
            <input
                onChange={searchChange}
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search Robots'
            />
        </div>
    )
}

export default SearchBox;