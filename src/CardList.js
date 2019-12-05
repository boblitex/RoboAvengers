import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardcomponent = robots.map(user => {
        return (<Card
            key={user.id + 1}
            id={user.id}
            name={user.name}
            email={user.email}
        />)
    })
    return (
        <div>
            {cardcomponent}
        </div>
    );
}

export default CardList; 