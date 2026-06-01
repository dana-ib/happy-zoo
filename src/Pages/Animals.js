    
import '../Styles/Animals.css';
import { BirdsList } from '../data/BirdsList';
import { MammalsList } from '../data/MammalsList';
import BirdsItem from '../Components/BirdsItem';
import MammalsItem from '../Components/MammalsItem';
import { useState } from 'react';

const Animals = () => {
  const [showBirds, setShowBirds] = useState(true);

  const seeMore = () => {
    alert("Go to Google for more information!");
  };

  return (
    <div>
      <h1>Animals Section 🐾</h1>

      <button onClick={() => setShowBirds(true)}>Birds</button>
      <button onClick={() => setShowBirds(false)}>Mammals</button>

      {showBirds && (
        <div className="animals-container">
          <div className="cards-wrapper">
            {BirdsList.map((bird, index) => (
              <BirdsItem
                key={index}
                image={bird.image}
                name={bird.name}
                canFly={bird.canFly}
                onSeeMore={seeMore}
              />
            ))}
          </div>
        </div>
      )}

      {!showBirds && (
        <div className="animals-container">
          <div className="cards-wrapper">
            {MammalsList.map((mammal, index) => (
              <MammalsItem
                key={index}
                image={mammal.image}
                name={mammal.name}
                nbLegs={mammal.nbLegs}
                onSeeMore={seeMore}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Animals;