import React, {useCallback} from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function SquareItem ({ id }) {
    const { isActiveSquare, setIsActiveSquare, setColdId, setRowdId } = useAppData();


    return(
        <div
            onMouseEnter={useCallback((e) => {
                setIsActiveSquare(e.target.classList.toggle("active"));
                const squareId = e.target.id.split("-");
                setRowdId(Number(squareId[0]));
                setColdId(Number(squareId[1]));
            }, [isActiveSquare])}
            className="squares-list__item" id={id}>
        </div>
    );
}

export default SquareItem;