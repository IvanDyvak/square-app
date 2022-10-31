import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import RowItem from "./components/RowItem";
import {useAppData} from "./context/user-hooks";
import ColorItem from "./components/ColorItem";

function App() {

    const {
        data,
        isDataLoading,
        option,
        field,
        level,
        setLevel,
        handleChange,
        handleSubmit,
        colors,
        activeSquares,
        getColor
    } = useAppData();


    useEffect(() => {
            const firstOption = [{name: "Pick mode", field: 0}];
            setLevel([...firstOption, ...data]);
        },
        [data]);


    if (isDataLoading) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Loading...</div>


    if (!data.length) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Sorry, there's no
        info</div>

    const buildRows = (number) => {
        let rowArray = [];
        for(let row = 1; row <= number; row++){
            rowArray.push(<RowItem key={Math.random()} rowId={row}/>);
        }
        return rowArray;
    }

    return (
        <div className="App">
            <Header/>
            <form onSubmit={handleSubmit}>
                <label>
                    <select id="modeLevels" value={option} onChange={handleChange}>
                        {level.map(({name, field}) =>
                            <option value={name} key={name} id={field}>{name}</option>
                        )}
                    </select>
                </label>
                <input type="submit" value="Start" className="init-btn"/>
            </form>
            <div className="wrapper">
                        <ul className="colors-list">
                            {colors.map((color, i) =>
                                <ColorItem key={i} backgroundColor={color} id={color}></ColorItem>
                            )}
                        </ul>
                        <div className="squares-list">
                            {buildRows(field)}
                        </div>
                        <div className="hovered-items-info-wrap">
                            <h2>Hovered squares</h2>
                            {
                                activeSquares.map(({row, col}) =>
                                    <div className="hovered-items-info" key={Math.random()}>
                                        <span>row {row}</span>
                                        <span>col {col}</span>
                                    </div>
                                )
                            }

                        </div>
            </div>
        </div>
    )
}

export default App;
