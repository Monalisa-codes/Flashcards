import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div>
      <Flashcard 
        flashcard={flashcards[currentIndex]} 
        prevCard={prevCard} 
        nextCard={nextCard}  
      />
    </div>
  );
};

export default FlashcardList;
