import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const CorrectGuess = (props) => {
  console.log("yooo");
  console.log(props.guesses[props.guesses.length - 1]);

  const resetApp = () => {
    props.restart()
  }

  return ( <div>
    <Modal
      open={true}
      aria-label="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} >
        <Typography variant='h5'>Correct answer</Typography>
        <Typography variant='h6'>Answer: {props.currentAnswer.Capital_city} </Typography>
        <Typography variant='h6'>It took you {props.guesses.length} attempts</Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={resetApp}
        >
          <RestartAltIcon />
        </IconButton>
      </Box>
    </Modal>
  </div>
  );
}

export default CorrectGuess