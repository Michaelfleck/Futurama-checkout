import React from 'react';
import './characterCard.css';

import defaultImage from '../imgs/missing-image-placeholder.svg'; 

export const CharacterCard = ({ character, onBuy }) => {
    const { name, images } = character;

    const imageUrl = images?.main;

    const [validImage, setValidImage] = React.useState(false);

    React.useEffect(() => {
        const validateImage = async (url) => {
            try {
                const response = await fetch(url, { method: 'HEAD' });
                if (response.ok && !url.includes('placeholder.png')) {
                    setValidImage(true);
                }
            } catch {
                setValidImage(false);
            }
        };
        validateImage(imageUrl);
    }, [imageUrl]);

    return (
        <div className='character-card'>
            <img
                src={validImage ? imageUrl : defaultImage} 
                alt={name?.first || "Character"} 
                className="character-image"
                onError={(e) => {
                    console.log("Error loading image, falling back to default.");
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                }}
            />
            <div className='card-bottom'>
                <div className='name'>
                    {name.first} {name.middle} {name.last} 
                </div>
                <button 
                    className='buy-button' 
                    onClick={()=> onBuy(character)}
                >
                    Buy
                </button>
            </div>
        </div>
    )
}
