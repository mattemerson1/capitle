import React, { useEffect, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const capitalCities = ['London', 'Beijing', 'Mexico city', 'Canberra', 'Gitega']

const UserInput = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isEndGame, setIsEndGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);

  const addGuess = (userGuess, e) => {
    console.log("add GUESS", userGuess, e.target.value);
    const formatUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
    props.addGuess(formatUserGuess, e);
    setUserGuess("");
    if (props.guesses.length > 4) {
      handleEndGame()
    } else if (formatUserGuess === props.currentAnswer.Capital_city) {
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
    // <form onSubmit={(e) => addGuess(userGuess, e)}>
    //   <label>Enter capital city:
    //     <input
    //       type="text"
    //       disabled={isGameWon || isEndGame}
    //       value={userGuess}
    //       onChange={(e) => setUserGuess(e.target.value)}
    //     />
    //   </label>
    // </form>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={capitalCities}
      sx={{ width: 300 }}
      value={userGuess}
      onChange={(e, userGuess) => addGuess(userGuess, e) && e.preventDefault()}
      disabled={isGameWon || isEndGame}
      renderInput={(params) => <TextField
        {...params}
        label="Enter capitial city:"

      />}
    />
  );
};

export default UserInput