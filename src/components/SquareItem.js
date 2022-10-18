import React, {useState} from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function SquareItem ({id}) {
    const { isActiveSquare, activeToggle } = useAppData();


    return(
        <div
            onMouseEnter={activeToggle}
            className={`squares-list__item ${isActiveSquare ? 'active' : ''}` }
        id={id}>
        </div>
    );
}

export default SquareItem;