import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import capitalsData from '../../data/capitals_data.json';
import { makeStyles } from '@mui/styles';
import { ReactComponent as Africa } from '../../africa.svg';
import { ReactComponent as Europe } from '../../europe.svg';
import { ReactComponent as NorthAmerica } from '../../north_america.svg';
import { ReactComponent as SouthAmerica } from '../../south_america.svg';
import { ReactComponent as Asia } from '../../asia.svg';
import { ReactComponent as Oceania } from '../../oceania.svg';



const useStyles = makeStyles(theme => ({

  root: {
    flexGrow: 1,
    rowSpacing: 2,
    alignItems: 'center',
    justifyContent: 'center',
    spacing: 2
  },
  guessResultsCard: {
    flexGrow: 1,
    rowSpacing: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 80,
    display: 'flex'
  },
  headings: {
    flexGrow: 1,
    rowSpacing: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 80,
    display: 'flex'
  },
  guessCard: {
    flexGrow: 1,
    rowSpacing: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    height: 25,
    display: 'flex'
  },
  guessName: {
    // flexGrow: 1,
    rowSpacing: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'grey',
    height: 80,
    display: 'flex'
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    color: 'blue',
    backgroundColor: 'green',
    height: 50,
    width: 50,
    display: "flex",
    alignItems: "center"
  },
}))

const UserGuessCard = (props) => {
  const classes = useStyles();
  var isAfrica = false;
  var isAsia = false;
  var isEurope = false;
  var isNorthAmerica = false;
  var isSouthAmerica = false;
  var isOceania = false;


  const calculatePopulation = (guess) => {
    const population = findPopulationByCity(guess)
    return population
  }

  const findPopulationByCity = (guess) => {
    const cityData = capitalsData.find(cityData => cityData.Capital_city === guess);
    console.log(cityData, "CITYDATA");
    return cityData && cityData.Population_rank;
  };
  const correctPopulationRank = (guess) => {
    const guessCityData = capitalsData.find(cityData => cityData.Capital_city === guess);
    if (guessCityData.Population_rank === props.currentAnswer.Population_rank) {
      return true
    }
    return false
  }

  const clearContinents = () => {
    isAfrica = false;
    isEurope = false;
    isAsia = false;
    isSouthAmerica = false;
    isNorthAmerica = false;
    isOceania = false;

  }

  const calculateContinent = (guess) => {
    const continent = findContinentByCity(guess)
    if (continent === "Africa") {
      clearContinents()
      isAfrica = true;
    } else if (continent === "Asia") {
      clearContinents()
      isAsia = true;
    } else if (continent === "Europe") {
      clearContinents()
      isEurope = true;
    } else if (continent === "North America") {
      clearContinents()
      isNorthAmerica = true;
    } else if (continent === "South America") {
      clearContinents()
      isSouthAmerica = true;
    } else if (continent === "Oceania") {
      clearContinents()
      isOceania = true;
    }
    return continent
  }


  const findContinentByCity = (guess) => {
    const cityData = capitalsData.find(cityData => cityData.Capital_city === guess);
    return cityData && cityData.Continent;
  };
  const correctContinent = (guess) => {
    const guessCityData = capitalsData.find(cityData => cityData.Capital_city === guess);
    if (guessCityData.Continent === props.currentAnswer.Continent) {
      return true
    }
    return false
  }

  return (
    // <Grid sx={{ flexGrow: 1 }} container spacing={12} style={{backgroundColor: 'red'}}>
    // <Grid item xs={3} style={{backgroundColor: 'grey'}}>
    // <Grid container xs={{ flexGrow: 1}} justifyContent="center" spacing={4}>
    <div className={classes.root}>
        <Grid container className={classes.root} style={{color: 'white'}}>
          <Grid item xs={2.4} style={{backgroundColor: 'black'}} className={classes.guessCard}>
            {/* <Typography>Population</Typography> */}
            <Typography>Population</Typography>
          </Grid>
          <Grid item xs={2.4} style={{backgroundColor: 'black'}} className={classes.guessCard}>
            <Typography>Area </Typography>
          </Grid>
          <Grid item xs={2.4} style={{backgroundColor: 'black'}} className={classes.guessCard}>
            <Typography>Continent </Typography>
          </Grid>
          <Grid item xs={2.4} style={{backgroundColor: 'black'}} className={classes.guessCard}>
            <Typography>GDP </Typography>
          </Grid>
          <Grid item xs={2.4} style={{backgroundColor: 'black'}} className={classes.guessCard}>
            <Typography>Temp </Typography>
          </Grid>
        </Grid>
      {props.guesses.map((guess) => (
        <div>
        <Grid container className={classes.root}>
          <Grid item className={classes.guessResultsCard}>
            <Paper className={classes.paper} style={{ backgroundColor: correctPopulationRank(guess) ? 'green' : 'red' }}>
              <Typography>{calculatePopulation(guess)}</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.guessResultsCard}>
            <Paper className={classes.paper} >
              <Typography>{calculateContinent(guess)}</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.guessResultsCard}>
            <Paper className={classes.paper} style={{ backgroundColor: correctContinent(guess) ? 'green' : 'red' }}>
              {isAfrica && <Africa />}
              {isEurope && <Europe />}
              {isSouthAmerica && <SouthAmerica />}
              {isNorthAmerica && <NorthAmerica />}
              {isOceania && <Oceania />}
              {isAsia && <Asia />}
            </Paper>
          </Grid>
          <Grid item className={classes.guessResultsCard}>
            <Paper className={classes.paper}>
              <Typography>N/A</Typography>
            </Paper>
          </Grid>
          <Grid item className={classes.guessResultsCard}>
            <Paper className={classes.paper}>
              <Typography>N/A</Typography>
            </Paper>
          </Grid>
          {/* <Grid item className={classes.guessName} direction="column">
            <Typography>{guess}</Typography>
          </Grid> */}
        </Grid>
        <Grid container className={classes.root}>
          <Grid item xs={12} className={classes.guessCard}>
            <Typography>{guess}</Typography>
          </Grid>
        </Grid>
        </div>
      ))}
    </div>
  );
};

export default UserGuessCard