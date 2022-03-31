import React from "react";
const Section = ({children, text}) => {
    return(
        <div>
            <h2>{text}</h2>
            <div>{children}</div>
        </div>
    )
}

export default Section;
