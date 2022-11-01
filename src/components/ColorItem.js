import React from 'react';
import './ColorItem.css';
import { useAppData } from '../context/user-hooks';


function ColorItem ({ backgroundColor, id }) {
    const { activeColor, setActiveColor } = useAppData();

    const getColor = () => {
        setActiveColor(id);
    }

    return(
        <li style={{backgroundColor: backgroundColor}} id={id}
            onClick={getColor}
            className={`list-group-item ${activeColor === id ? 'active-color' : '' }`}>
        </li>
    );
}

export default ColorItem;