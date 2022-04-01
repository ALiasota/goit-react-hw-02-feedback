import React from "react";
import propTypes from 'prop-types';
const Section = ({children, text}) => {
    return(
        <div className="Section">
            <h2>{text}</h2>
            <div>{children}</div>
        </div>
    )
}

Section.propTypes = {  
    text: propTypes.string.isRequired
  }

export default Section;
