import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import RowItem from "./components/RowItem";
import {useAppData} from "./context/user-hooks";


function App() {

    const {
        data,
        isDataLoading,
        rowId,
        colId,
        option,
        field,
        level,
        setLevel,
        handleChange,
        handleSubmit
    } = useAppData();


    useEffect(() => {
            const firstOption = [{name: "Pick mode", field: 0}];
            setLevel([...firstOption, ...data]);

        },
        [data]);

    if (isDataLoading) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Loading...</div>


    if (!data.length) return <div style={{textAlign: "center", marginTop: "50px", fontWeight: "600"}}>Sorry, there's no
        info</div>

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
                <div className="squares-list">
                    {field !== 0 ?
                        [...Array(field).keys()].map((num) => {
                                let rowNumber = num + 1;
                            return (
                                    <RowItem key={num} rowNumber={rowNumber}/>
                                )
                            }
                        )
                        : ""
                    }
                </div>
                <div className="hovered-items-info-wrap">
                    <h2>Hovered squares</h2>
                    <div className="hovered-items-info">
                        <span>row {rowId}</span>
                        <span>col {colId}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
