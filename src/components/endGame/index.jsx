import React from 'react';
import Typography from '@mui/material/Typography';

import styles from './endGame.module.css';

const EndGame = (props) => {
  console.log("END GAME", props.currentAnswer.Capital_city);

  return ( <div>
    <h1 className={styles.fillWindow}> Answer: {props.currentAnswer.Capital_city} END GAME!
    </h1>
  </div>
  );
}

export default EndGame