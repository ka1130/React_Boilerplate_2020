import React from 'react';
import styles from './styles.module.scss';

const App = ({ title }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
  </div>
);

export default App;
