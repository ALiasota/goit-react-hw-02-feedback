import propTypes from 'prop-types';
const Notification = ({text}) => {
    return(        
            <h2 className="Notification">{text}</h2>        
    )
}

Notification.propTypes = {  
    text: propTypes.string.isRequired
  }

export default Notification;