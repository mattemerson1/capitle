import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

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

const EndGame = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Box>
      <AppBar style={{ position: 'relative', background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Capitle
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenModal}
          >
            <HelpOutlineOutlinedIcon />
          </IconButton>
          <Modal
            open={open}
            onBackdropClick={handleCloseModal}
            // onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                How to play capitle
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Your aim is to guess the randomly selected capital city using the fewest number of guesses.
                For each guess you will be able to see your proximity to the answer based off any matches in the 5 distict categories: Area, Continent, GDP, Population, and Avg Temp.
                For categories which contain continious data sets the they are ranked into 4 levels.
                For example: Population is split into 4 levels, capitials over 5m population - rank 1, captials 1m - 5m population - rank 2, capitals 100k - 1m population - rank 3, and capitals under 100k - rank4.
                If you guess a capital in the correct rank the relative square will be green, if it is incorrect the relative square will be red
              </Typography>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default EndGame;