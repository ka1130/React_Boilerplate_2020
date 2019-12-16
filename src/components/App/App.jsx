import React from 'react';
import MyImage from '../../assets/images/my_image.jpg';
import styles from './styles.module.scss';

const App = ({ title }) => (
  <div className={styles.wrapper}>
    <h2 className={styles.title}>{title}</h2>
    <img src={MyImage} alt="torchlight in the sky" />
  </div>
);

export default App;
