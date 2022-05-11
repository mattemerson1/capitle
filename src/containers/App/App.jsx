import UserInput from '../../components/userInput';
import UserGuess from '../../components/userGuess';
import UserGuessCard from '../../components/userGuessCard';
import CorrectGuess from '../../components/correctGuess';
import EndGame from '../../components/endGame';
import AppBar from '../../components/appBar';
import { Helmet } from 'react-helmet';
import './App.css';
import React, { useEffect, useState } from 'react';
import capitalsData from '../../data/capitals_data.json';


const gameContainer = () => {

  const [guesses, setGuesses] = useState([])
  const [currentAnswer, setCurrentAnswer] = useState({})
  const [correctGuess, setCorrectGuess] = useState(false)
  const [isEndGame, setIsEndGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  const randomCapital = () => {
    const randomCapital = capitalsData[Math.floor(Math.random() * capitalsData.length)];
    setCurrentAnswer(randomCapital)
  }

  useEffect(() => {
    randomCapital()
  }, [])

  const addGuess = (guess) => {
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

  const gameWon = () => {
    setIsGameWon(true);
  }

  const restart = () => {
    console.log("RESTART GAME");
    setGuesses([]);
    setCurrentAnswer({});
    setIsEndGame(false);
    randomCapital()

  }


  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title itemProp="name" lang="en">Capitle: like globle but not quite</title>
        <meta name="description" content="Capitals quiz" />
      </Helmet>
      <AppBar />
      {/* <h1>Capitle</h1> */}
      {/* <UserGuess guesses={guesses} currentAnswer={currentAnswer}/> */}
      <UserGuessCard guesses={guesses} currentAnswer={currentAnswer} />
      <UserInput addGuess={addGuess} guesses={guesses} endGame={endGame} gameWon={gameWon} currentAnswer={currentAnswer} isEndGame={isEndGame} isGameWon={isGameWon} />
      {correctGuess && <CorrectGuess guesses={guesses} />}
      {isEndGame && <EndGame currentAnswer={currentAnswer} restart={restart} />}
    </div>
  );
}

export default gameContainer;