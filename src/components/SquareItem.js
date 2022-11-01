import React from 'react';
import './SquareItem.css';
import { useAppData } from '../context/user-hooks';


function SquareItem ({ row, col }) {
    const { activeSquares, setActiveSquares, activeColor, colors } = useAppData();

    // const activeBg = () => {
    //     return colors.find(item =>{
    //         return item === activeColor;
    //     })
    // }

    const isActive = () => {
        return activeSquares.find(item => {
            return item.id === row+"-"+col;
            }
        )
    }

    const handleClick = (e) => {
        let squareClassList = [...e.target.classList];
        const squareId = e.target.id;

        let obj = {
            id: squareId,
            classlist: squareClassList,
            row: row,
            col: col,
        };
        squareClassList.includes('active') ?
            setActiveSquares(activeSquares.filter(item => item.id !== squareId)) :
            setActiveSquares([...activeSquares, obj]);
    }


    return(
        <div
            className={`squares-list__item ${isActive() ? `active ${activeColor}` : ''}` } id={row+"-"+col}
            onClick={handleClick}>
        </div>
    );
}

export default SquareItem;