import React from "react";
import './Header.css';

function Header() {

    return(
        <header className="App-header">
            <img src="images/logo.png" className="App-logo" alt="logo" />
            <ul className="instruction">
                <li>Pick your mode</li>
                <li>Press Start</li>
                <li>Create your drawing</li>
                <li>You can set a color from the list</li>
            </ul>
        </header>
    )
}
export default Header;