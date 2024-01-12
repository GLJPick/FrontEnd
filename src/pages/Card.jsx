import React from 'react';

const Card = ({item}) => {
    return (
        <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
        </div>
    )
}

export default Card;