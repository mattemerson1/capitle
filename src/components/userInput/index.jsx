import React, { useEffect, useState, useRef } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import capitalsData from '../../data/capitals_data.json';

const UserInput = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isEndGame, setIsEndGame] = useState(false);
  const [isGameWon, setIsGameWon] = useState(false);
  const ref = useRef();

  const addGuess = (userGuess) => {
    // const formatUserGuess = userGuess.charAt(0).toUpperCase() + userGuess.slice(1).toLowerCase();
    props.addGuess(userGuess);
    ref.current.focus();
    setUserGuess("");
    if (userGuess === props.currentAnswer.Capital_city) {
      handleWinGame()
    } else if (props.guesses.length > 6) {
      handleEndGame()
    }
  }

  const handleEndGame = () => {
    setIsEndGame(true)
    props.endGame()
  }

  const handleWinGame = () => {
    setIsGameWon(true)
    props.gameWon()
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
      <Autocomplete
        disablePortal
        key={""}
        id="combo-box-demo"
        options={capitalsData}
        getOptionLabel={city => city.Capital_city}
        sx={{ width: 300 }}
        value={userGuess || null}
        onChange={(e, newGuess) => {
          addGuess(newGuess.Capital_city)
          // e.preventDefault()
        }}
        disabled={props.correctGuess || props.isEndGame}
        renderInput={(params) => <TextField
          {...params}
          label="Enter capital city:"
        />}
      />
      <div tabIndex={0} ref={ref} />
    </div>
  );
};

export default UserInput