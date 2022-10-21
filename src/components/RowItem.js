import React from 'react';
import './RowItem.css';
import SquareItem from "./SquareItem";
import {useAppData} from "../context/user-hooks";

function RowItem ({ rowNumber }) {

    const { field } = useAppData();

    return(
        <div className="row-items" id={rowNumber}>
            {
                [...Array(field).keys()].map((num) =>
                    <SquareItem
                        key={num} id={rowNumber+"-"+(num+1)}
                    />
                )
            }
        </div>
    );
}

export default RowItem;