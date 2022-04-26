import React from 'react';
import styles from './Section.module.css';
import propTypes from 'prop-types';
const Section = ({ children, text }) => {
  return (
    <div className={styles.Section}>
      <h2>{text}</h2>
      <div>{children}</div>
    </div>
  );
};

Section.propTypes = {
  text: propTypes.string.isRequired,
  children: propTypes.element,
};

export default Section;
