// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FlashcardList from './components/FlashcardList';
import './App.css';
const App = () => {
  const flashcards = [
    { id: 1, question: 'What is React?', answer: 'A JavaScript library for building user interfaces' },
    {id: 2, question: 'What is Javascript?', answer: 'A browser language for maintaining and enabling HTML files dynamics'},
    // More flashcards can be added in same fashion
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<FlashcardList flashcards={flashcards} />} />
      </Routes>
    </Router>
  );
};

export default App;
