import React, { useEffect, useState, useRef } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const capitalCities = ['London', 'Beijing', 'Mexico city', 'Canberra', 'Gitega']

const UserInput = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isEndGame, setIsEndGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const ref = useRef();

  const addGuess = (userGuess) => {
    console.log("userGUESS", userGuess);
    // console.log("e", e.target.value);
    // const formatUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
    props.addGuess(userGuess);
    ref.current.focus();
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
    <>
    <Autocomplete
      disablePortal
      key={""}
      id="combo-box-demo"
      options={capitalCities}
      sx={{ width: 300 }}
      value={userGuess || null}
      onChange={(e, newGuess) => {
          addGuess(newGuess)
          // e.preventDefault()
        }}
      disabled={isGameWon || isEndGame}
      renderInput={(params) => <TextField
        {...params}
        label="Enter capitial city:"
      />}
    />
    <div tabIndex={0} ref={ref}/>
    </>
  );
};

export default UserInput