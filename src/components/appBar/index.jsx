import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';


const style = {
  position: 'relative',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 330,
  height: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const cellHeaderStyle = {
  backgroundColor: 'black',
  color: 'white',
};

const cellBodyStyle = {
  backgroundColor: 'lightgrey',
  color: 'black',
};

const createData = (rank, population, area, gdp, temp) => {
  return { rank, population, area, gdp, temp };
}

const rows = [
  createData('1', '>5,000,000', '>500', '>30,000', '>23'),
  createData('2', '5,000,000-1,000,000', '500-150', '30,000-10,000', '23-13'),
  createData('3', '1,000,000-100,000', '150-25', '10,000-2,000', '13-6.5'),
  createData('4', '<100,000', '<25', '<2,000', '<6.5'),
];

const EndGame = () => {
  const [open, setOpen] = useState(false);

  const handleOpenModal = () => setOpen(true);
  const handleCloseModal = () => setOpen(false);

  return (
    <Box>
      <AppBar style={{ position: 'relative', background: '#2E3B55' }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
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
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style} height='100vh' display='flex' flexDirection='column'>
              <Box >
                <Typography id="modal-modal-title" align="center" variant="h5" component="h2" style={{ fontWeight: 600, textDecoration: "underline" }}>
                  How to play Capitle
                  <Box style={{ position: 'absolute', right: 15, top: 15 }} >
                    <IconButton
                      size="large"
                      edge="end"
                      color="inherit"
                      aria-label="menu"
                      onClick={handleCloseModal}
                    >
                      <CloseIcon />
                    </IconButton>
                  </Box>
                </Typography>
                <Typography paragraph={true} id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                  Your aim is to guess the randomly selected capital city using the fewest number of guesses in 8 attempts.
                </Typography>
                <Typography paragraph={true} id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                  For each guess you will be able to see your proximity to the answer based off any matches in the 5 distict categories: Area, Continent, GDP, Population, and Avg Temp.
                </Typography>
                <Typography paragraph={true} id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                  For categories which contain continious data sets the they are ranked into 4 levels, as shown in the table below.
                </Typography>
                <Typography paragraph={true} id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                  If you guess a capital in the correct rank the relative square will be green, if it is incorrect the relative square will be red.
                </Typography>
                <TableContainer style={{ position: 'relative', height: 250 }} component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="left" sx={cellHeaderStyle} >Rank</TableCell>
                        <TableCell align="left" sx={cellHeaderStyle}>Population</TableCell>
                        <TableCell align="left" sx={cellHeaderStyle}>Area (in sq mile)</TableCell>
                        <TableCell align="left" sx={cellHeaderStyle}>GDP (per capita USD)</TableCell>
                        <TableCell align="left" sx={cellHeaderStyle}>Temp (average annual temp per country)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.rank}>
                          <TableCell align="left" sx={cellBodyStyle}>{row.rank}</TableCell>
                          <TableCell align="left" sx={cellBodyStyle}>{row.population}</TableCell>
                          <TableCell align="left" sx={cellBodyStyle}>{row.area}</TableCell>
                          <TableCell align="left" sx={cellBodyStyle}>{row.gdp}</TableCell>
                          <TableCell align="left" sx={cellBodyStyle}>{row.temp}</TableCell>
                        </TableRow>
                      ))}

                    </TableBody>

                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default EndGame;