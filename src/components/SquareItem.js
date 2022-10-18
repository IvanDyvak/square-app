import React, {useCallback} from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function SquareItem ({id }) {
    const { isActiveSquare, setIsActiveSquare, setColdId, setRowdId } = useAppData();


    return(
        <div
        //     onMouseEnter={activeToggle}
        //     className={`squares-list__item ${isActiveSquare ? 'active' : ''}` }
        // id={id}
            onMouseEnter={useCallback((e) => {
                setIsActiveSquare(e.target.classList.toggle("active"));
                setColdId(Number(e.target.id) + 1);
                setRowdId(Number(e.target.parentNode.id) + 1);
            }, [isActiveSquare])}
            className="squares-list__item" id={id}>
        </div>
    );
}

export default SquareItem;