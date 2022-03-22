import React, { useEffect, useState } from 'react';

const UserInput = (props) => {
  const [userGuess, setUserGuess] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  
  const addGuess = (userGuess, e) => {
    props.addGuess(userGuess, e);
    setUserGuess("");
    console.log(props.guesses, "<======");
    if (props.guesses.length > 4) {
      handleDisable()
    }
  }

  const handleDisable = () => {
    console.log("DISABLED");
    setIsDisabled(true)
    props.endGame()
  }

  return (
    <form onSubmit={(e) => addGuess(userGuess, e)}>
      <label>Enter capital city:
        <input
          type="text"
          disabled={isDisabled}
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
      </label>
    </form>
  );
};

export default UserInput