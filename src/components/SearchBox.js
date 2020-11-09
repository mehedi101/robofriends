import React from 'react';

const SearchBox = ({searchCange}) => {
    return ( <div className='pa2 sticky'>
        <input 
        className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robot' 
        onChange={searchCange}
        />
    </div> );
}
 
export default SearchBox;