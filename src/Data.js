import React from 'react'
import colorNames from 'colornames';

const Data = ({ colourType, setColourType, setHexColourCode, isDarkColour, setIsDarkColour }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add Colour Type</label>
            <input
                style={{ 
                    backgroundColor: colourType, 
                    color: isDarkColour ? "#000" : "#FFF" 
                }}
                autoFocus
                type='text'
                placeholder='Add Colour Type'
                required
                value={colourType}
                onChange={(e) => {
                    setColourType(e.target.value)
                    setHexColourCode(colorNames(e.target.value))
                }}

            />
            <button onClick={() => setIsDarkColour(!isDarkColour)}>
                Toggle Colour Value
            </button>
        </form>
    );
};

export default Data;