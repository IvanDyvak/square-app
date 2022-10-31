import React from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function ColorItem ({ backgroundColor, id }) {
    const { getColor } = useAppData();


    return(
        <li style={{backgroundColor: backgroundColor}} id={id}
            onClick={getColor}
        ></li>
    );
}

export default ColorItem;