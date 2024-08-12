import React, { useState } from 'react';
import './Flashcard.css';

const Flashcard = ({ flashcard, prevCard, nextCard }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped(!flipped)}>
      <div className="front">
        {flashcard.question}
      </div>
      <div className="back">
        {flashcard.answer}
      </div>
      <div className='btn'>
        <button className='prev-btn' onClick={(e) => { e.stopPropagation(); prevCard(); }}>Previous</button>
        <button className='next-btn' onClick={(e) => { e.stopPropagation(); nextCard(); }}>Next</button>
      </div>
    </div>
  );
};

export default Flashcard;
