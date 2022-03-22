import React, { useEffect, useState } from 'react';

const CorrectGuess = (props) => {
  console.log("yooo");
  console.log(props.guesses[props.guesses.length - 1]);

  return ( <div>
    <h1>{props.guesses[props.guesses.length - 1]} is the correct answer!</h1>
    <h1>It took you {props.guesses.length} attempts</h1>
  </div>
  );
}

export default CorrectGuess