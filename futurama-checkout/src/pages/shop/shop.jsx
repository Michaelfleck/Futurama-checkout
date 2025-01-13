import { useEffect, useState } from 'react';
import { CharacterCard } from "../../character/characterCard";
import './shop.css'

const Shop = () => {
    const [characters, setCharacters] = useState([]);

    const getData = async () => {
        try {
            const resp = await fetch('https://api.sampleapis.com/futurama/characters');
            const json = await resp.json();
            setCharacters(json);
        } catch (err) {
            console.error("Failed to fetch characters:", err.message);
        }
    };

    const handleBuy = (character) => {
        alert(`You bought ${character.name.first}!`);
    };

    useEffect(() => {
        getData();
    }, []);

  return (
    <div className="shop-container">
        <h1>Futurama Shop</h1>
        <div className="characters-grid">
            {characters.map((character, index) => (
                <CharacterCard
                    key={index}
                    character={character}
                    onBuy={handleBuy}
                />
            ))}
        </div>
    </div>
  );
};

export default Shop;
