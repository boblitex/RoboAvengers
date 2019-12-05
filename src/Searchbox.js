import React from 'react';

const Searchbox = ({searchchange}) => {
    return (
        <div className = 'pa3'>
            <input type="search" 
            placeholder="Search Avengers" 
            className = 'pa3 ba bg-lightest-blue b--silver shadow-4'
            onInput = {searchchange}
            />
        
        </div>

    );
}

export default Searchbox;