import UserInput from '../../components/userInput'
import UserGuess from '../../components/userGuess'
import CorrectGuess from '../../components/correctGuess'
import EndGame from '../../components/endGame'
import { Helmet } from 'react-helmet';
import './App.css';
import React, { useEffect, useState } from 'react';
import capitalsData from '../../data/capitals_data.json';


const gameContainer = () => {

  const [guesses, setGuesses] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState({})
  const [correctGuess, setCorrectGuess] = useState(false)
  const [isEndGame, setIsEndGame] = useState(false);
   
  const randomCapital = () => {
    const randomCapital = capitalsData[Math.floor(Math.random()*capitalsData.length)];
    setCurrentAnswer(randomCapital)
  }
    
  useEffect(() => {
    randomCapital()
  },[])
  
  const addGuess = (guess) => {
    // event.preventDefault();
    setGuesses([...guesses, guess])
    checkGuess(guess)
  };
    
  const checkGuess = (guess) => {
    console.log("we made it", currentAnswer);
    if (guess === currentAnswer.Capital_city) {
      console.log("Correct Answer");
      setCorrectGuess(true)
    }
  }

  const endGame = () => {
    setIsEndGame(true)
  }
    
    
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title itemProp="name" lang="en">Capitle: like globle but not quite</title>
        <meta name="description" content="Capitals quiz" />
      </Helmet>
      <h1>Capitle</h1>
      <UserInput addGuess={addGuess} guesses={guesses} endGame={endGame} currentAnswer={currentAnswer}/>
      <UserGuess guesses={guesses} currentAnswer={currentAnswer}/>
      {correctGuess && <CorrectGuess guesses={guesses}/>}
      {isEndGame && <EndGame/>}
    </div>
  );
}

export default gameContainer;