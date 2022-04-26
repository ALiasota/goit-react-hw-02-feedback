import styles from './Notification.module.css';
import propTypes from 'prop-types';
const Notification = ({ text }) => {
  return <h2 className={styles.Notification}>{text}</h2>;
};

Notification.propTypes = {
  text: propTypes.string.isRequired,
};

export default Notification;
