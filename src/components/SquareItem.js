import React, { useCallback } from 'react';
import './SquareItem.css';

function SquareItem ({ id, isActive }) {

    return(
        <div
            onMouseEnter={useCallback((e) => {
                e.target.classList.toggle("active");
                isActive = !isActive;
            }, [isActive])}
            className="squares-list__item" id={id}>
        </div>
    );
}

export default SquareItem;