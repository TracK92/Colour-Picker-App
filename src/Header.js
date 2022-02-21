import React from "react";
import logo from './logo.png';



const Header = () => {
    return (
        <header>
            <img src={ logo } alt="logo"/>
            <h3>Colour Picker</h3>
        </header>
    );
};

export default Header;