import { useMemo, useState } from 'react';
import CopyToClipboard from "react-copy-to-clipboard";
import React from "react";
import { toast } from "react-toastify";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import 'react-toastify/dist/ReactToastify.css';

const generateSquareCharacters = (proximity) => {
  const characters = [];
  const greenSquareCount = Math.floor(proximity)
  characters.fill("🟩", 0, 3);
  return characters;
}

const Share = (props) => {
  // const [shareText, setShareText] = useState("");
  const win = props.guesses[props.guesses.length - 1];
  const guessCount = win ? props.guesses.length : "X";
  const title = `#Worldle ${guessCount}/6`;
  const theme = "light";
  let shareText



  const guessString = props.guesses
    .map((guess) => {
      const squares = generateSquareCharacters(theme).join("");
      return `${squares}`;
    })
    .join("\n");

  if (props.gameWon == true) {
    console.log("render");
    shareText = `Capitle score: ${props.guesses.length}/8 ✅`;
  }
  else {
    shareText =`Capitle score: ${props.guesses.length}/8 ❌`;
  }


  return (
    <CopyToClipboard
      text={shareText}
      onCopy={() => toast.success('Copied results to clipboard', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })}
      options={{
        format: "text/plain",
      }}
    >
      <Button variant="outlined" style={{ backgroundColor: 'white', color: 'black', borderColor: 'black' }} endIcon={<SendIcon style={{ color: 'black' }} />}>
        Share
      </Button>
    </CopyToClipboard>
  );
};
export default Share;