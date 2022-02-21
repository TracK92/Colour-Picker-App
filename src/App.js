import React from 'react';
import { useState } from 'react';
import Colour from './Colour';
import Data from './Data';
import Footer from './Footer';
import Header from './Header';

function App() {
  const [colourType, setColourType] = useState('');
  const [hexColourCode, setHexColourCode] = useState('');
  const [isDarkColour, setIsDarkColour] = useState(true);

  return (
    <div className="App">
      <Header />
      <Colour 
        colourType={colourType}
        hexColourCode={hexColourCode}
        isDarkColour={isDarkColour}
      />
      <Data
        colourType={colourType}
        setColourType={setColourType}
        setHexColourCode={setHexColourCode}
        isDarkColour = {isDarkColour}
        setIsDarkColour={setIsDarkColour}
      />
      <Footer />
    </div>
  );
}

export default App;
