import React from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function SquareItem ({ row, col }) {
    const { activeSquares, setActiveSquares, activeColor } = useAppData();

    const isActive = () => {
        return activeSquares.find(({id}) => {
            return id === row+"-"+col;
            }
        )
    }

    function color(item) {
        if (item.id === row+"-"+col)
            return true;
    }
    const checkBg = () => {
        return activeSquares.filter(color).map((item) => {
            return item.background;
        })
    }


    const handleClick = (e) => {
        let squareClassList = [...e.target.classList];
        const squareId = e.target.id;

        let obj = {
            id: squareId,
            classlist: squareClassList,
            row: row,
            col: col,
            background: activeColor
        };
        squareClassList.includes('active') ?
            setActiveSquares(activeSquares.filter(({id}) => id !== squareId)) :
            setActiveSquares([...activeSquares, obj]);
    }


    return(
        <div
            className={`squares-list__item ${isActive() ? `active ${checkBg()}` : ''}` } id={row+"-"+col}
            onClick={handleClick}>
        </div>
    );
}

export default SquareItem;