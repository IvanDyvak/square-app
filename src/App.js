import React, { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import SquareItem from "./components/SquareItem";
import { useAppData } from "./context/user-hooks";


function App() {
    const [ option, setOption ] = useState('');
    const [ field, setField ] = useState(0);
    const [ level, setLevel ] = useState([]);
    const { colId, rowId } = useAppData();

    useEffect(() => {

        fetch(`https://demo7919674.mockable.io`)
            .then((response) => response.json())
            .then((response) => {
                const firstOption = [{name: "Pick mode", field: 0}];
                const data = [...firstOption, ...response];
                console.log(data);
                // if(!data.length) return <div>Sorry, there's no info</div>

                setLevel(data);

            })

            .catch((error) => {
                console.error('Error:', error);
                setLevel(0);
            });
        },
        []);

    const handleChange = (event) => {
        setOption(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const selectOptions = document.getElementById("modeLevels");
        let modeId = Number(selectOptions.options[selectOptions.selectedIndex].id);
        setField(modeId);
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

                            <div className="row-items" key={num} id={num}>
                                {
                                    [...Array(field).keys()].map((num) =>
                                        <SquareItem
                                            key={num} id={num}
                                        />
                                    )
                                }
                            </div>
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
