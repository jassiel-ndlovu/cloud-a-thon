import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card key={index} imageURL={card.profileImage} name={card.name} rating={card.rating} />
            ))}
        </div>
    );
};

export default CardList;
