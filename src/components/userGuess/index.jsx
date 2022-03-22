import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import capitalsData from '../../data/capitals_data.json';
// import "bootstrap/dist/css/bootstrap.min.css";


import styles from './userGuess.module.css'

const UserGuess = (props) => {

  // const [populationRank, setPopulationRank] = useState(false)

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
    console.log(guessCityData.Population_rank, "1");
    console.log(props.currentAnswer.Population_rank, "2");
    if (guessCityData.Population_rank === props.currentAnswer.Population_rank) {
      console.log("TRUE");
      return true
    }
    console.log("FALSE");
    return false
  }


  return (
    <Table bordered variant='dark'>
      <thead>
        <tr>
          <th>Capital City</th>
          <th>Population Rank</th>
        </tr>
      </thead>
      <tbody>
        {props.guesses.map((guess) => <tr>
          <td>{guess}</td>
          <td 
          style={{backgroundColor: correctPopulationRank(guess) ? 'green' : 'red' }}>
            {calculatePopulation(guess)}
          </td>
        </tr>)}
      </tbody>
    </Table>
  );
};

export default UserGuess