import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import capitalsData from '../../data/capitals_data.json';

const UserGuess = (props) => {

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

  const calculateContinent = (guess) => {
    const continent = findContinentByCity(guess)
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
    <Table bordered variant='dark'>
      <thead>
        <tr>
          <th>Capital City</th>
          <th>Population Rank</th>
          <th>Continent</th>
        </tr>
      </thead>
      <tbody>
        {props.guesses.map((guess) => <tr>
          <td>{guess}</td>
          <td 
          style={{backgroundColor: correctPopulationRank(guess) ? 'green' : 'red' }}>
            {calculatePopulation(guess)}
          </td>
          <td 
          style={{backgroundColor: correctContinent(guess) ? 'green' : 'red' }}>
            {calculateContinent(guess)}
          </td>
        </tr>)}
      </tbody>
    </Table>
  );
};

export default UserGuess