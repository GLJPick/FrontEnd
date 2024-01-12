import React from 'react';
import Card from './Card';

const CardSection = ({data}) => {
    if(!data) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {data.map(item=> (
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}

export default CardSection;