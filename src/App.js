import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import SquareItem from "./components/SquareItem";
import { useAppData } from "./context/user-hooks";


function App() {
    const [ option, setOption ] = useState('');
    const [ field, setField ] = useState(0);
    const [ level, setLevel ] = useState([]);
    const { data, isDataLoading, setIsActiveSquare, rowId, colId } = useAppData();



    useEffect(() => {
            const firstOption = [{name: "Pick mode", field: 0}];
            setLevel([...firstOption, ...data]);

        },
        [data]);

    if(isDataLoading) return <div style={{textAlign: "center",marginTop: "50px",fontWeight: "600"}}>Loading...</div>


    if(!data.length) return <div style={{textAlign: "center",marginTop: "50px",fontWeight: "600"}}>Sorry, there's no info</div>

    const handleChange = (event) => {
        setOption(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectOptions = document.getElementById("modeLevels");
        let modeId = Number(selectOptions.options[selectOptions.selectedIndex].id);
        setField(modeId);
        setIsActiveSquare(false);
    }

    return (
        <div className="App">
            <Header />
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
                    {
                        [...Array(field).keys()].map((num) =>
                        {
                            let rowNumber = num+1;
                            return(
                                <div className="row-items" key={num} id={rowNumber}>
                                    {
                                        [...Array(field).keys()].map((num) =>
                                            <SquareItem
                                                key={num} id={rowNumber+"-"+(num+1)}
                                            />
                                        )
                                    }
                                </div>
                            )
                        }

                        )
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
