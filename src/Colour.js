import React from "react";

const Colour = ({ colourType, hexColourCode, isDarkColour }) => {
    return (
        <section 
            style={{ 
                backgroundColor: colourType,
                color: isDarkColour ? "#000" : "#FFF"
            }}
        >
            <p style={{ fontSize: "5rem" }}>{ colourType ? colourType : "No Colour" }</p>
            <p style={{ fontSize: "1rem" }}>{ hexColourCode ? hexColourCode : null }</p>

        </section>
    );
};

Colour.defaultProps = {
    colourType: "Empty Colour Value"
}


export default Colour;