import React, { useEffect, useState } from 'react';

const UserInput = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isEndGame, setIsEndGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  
  const addGuess = (userGuess, e) => {
    props.addGuess(userGuess, e);
    setUserGuess("");
    if (props.guesses.length > 4) {
      handleEndGame()
    } else if (userGuess === props.currentAnswer.Capital_city) {
      handleWinGame()
    }
  }

  const handleEndGame = () => {
    setIsEndGame(true)
    props.endGame()
  }

  const handleWinGame = () => {
    setIsGameWon(true)
  }

  return (
    <form onSubmit={(e) => addGuess(userGuess, e)}>
      <label>Enter capital city:
        <input
          type="text"
          disabled={isGameWon || isEndGame}
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
      </label>
    </form>
  );
};

export default UserInput