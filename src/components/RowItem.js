import React from 'react';
import './RowItem.css';
import SquareItem from "./SquareItem";
import {useAppData} from "../context/user-hooks";

function RowItem ({rowId}) {

    const { field } = useAppData();

    const buildSquares = (number) => {
        let squareArray = [];
        for(let col = 1; col <= number; col++){
            squareArray.push(<SquareItem key={Math.random()} col={col} row={rowId} />);
        }
        return squareArray;
    }

    return(
        <div className="row-items" id={rowId}>
            {buildSquares(field)}
        </div>
    );
}

export default RowItem;