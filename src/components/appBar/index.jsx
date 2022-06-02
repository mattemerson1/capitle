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
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { makeStyles } from "@material-ui/core/styles";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 330,
  height: 850,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const useStyles = makeStyles(theme => ({
  cell_short: {
    fontSize: "10px",
    width: 10,
  },
}))

const createData = (rank, population, area, gdp, temp) => {
  return { rank, population, area, gdp, temp };
}

const rows = [
  createData('1', '> 5,000,000', '> 500', '> 30,000', '> 23'),
  createData('2', '5,000,000 - 1,000,000', '500 - 150', '30,000 - 10,000', '23 - 13'),
  createData('3', '1,000,000 - 100,000', '150 - 25', '10,000 - 2,000', '13 - 6.5'),
  createData('4', '< 100,000', '< 25', '< 2,000', '< 6.5'),
];

const EndGame = () => {
  const classes = useStyles();
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
                How to play Capitle
              </Typography>
              <Typography id="modal-modal-description" variant="body2" sx={{ mt: 2 }}>
                Your aim is to guess the randomly selected capital city using the fewest number of guesses.
                For each guess you will be able to see your proximity to the answer based off any matches in the 5 distict categories: Area, Continent, GDP, Population, and Avg Temp.
                For categories which contain continious data sets the they are ranked into 4 levels, as shown in the table below.
                If you guess a capital in the correct rank the relative square will be green, if it is incorrect the relative square will be red
              </Typography>
              <TableContainer component={Paper}>
                <Table style={{ position: 'relative', width: 10 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="left" className={classes.cell_short}>Rank</TableCell>
                      <TableCell align="left" className={classes.cell_short}>Population</TableCell>
                      <TableCell align="left" className={classes.cell_short}>Area (in sq mile)</TableCell>
                      <TableCell align="left" className={classes.cell_short}>GDP (per capita USD)</TableCell>
                      <TableCell align="left" className={classes.cell_short}>Temp (average annual temp per country)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.rank}>
                        <TableCell align="left" className={classes.cell_short}>{row.rank}</TableCell>
                        <TableCell align="left" className={classes.cell_short}>{row.population}</TableCell>
                        <TableCell align="left" className={classes.cell_short}>{row.area}</TableCell>
                        <TableCell align="left" className={classes.cell_short}>{row.gdp}</TableCell>
                        <TableCell align="left" className={classes.cell_short}>{row.temp}</TableCell>
                      </TableRow>
                    ))}

                  </TableBody>

                </Table>
              </TableContainer>
            </Box>
          </Modal>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default EndGame;