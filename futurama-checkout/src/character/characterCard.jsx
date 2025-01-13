import React from 'react';
import './characterCard.css';

export const CharacterCard = ({ character, onBuy }) => {
    const { name, images } = character;

    return (
        <div className='character-card'>
            <img src={images.main} alt={name.first} className="character-image" />
            <h3>{name.first} {name.middle} {name.last} </h3>
            <button className='buy-button' onClick={()=> onBuy(character)}></button>
        </div>
    )
}