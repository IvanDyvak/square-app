import React, { useEffect, useState } from 'react';
import './App.css';
import SquareItem from "./components/SquareItem";

function App() {
    const [ option, setOption ] = useState('');
    const [ field, setField ] = useState(0);
    const [ level, setLevel ] = useState([]);
    const [ activeSquare, setActiveSquare ] = useState(false);

    useEffect(() => {

        fetch(`https://demo7919674.mockable.io`)
            .then((response) => response.json())
            .then((response) => {
                const firstOption = [{name: "Pick mode", field: 0}];
                response = [...firstOption, ...response];
                console.log(response);
                setLevel(response);
            })

            .catch((error) => {
                console.error('Error:', error);
                setLevel(error);
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
      <header className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />
      </header>
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
        <div className="squares-list">
            { field !== 0 ?
                [...Array(field*field).keys()].map((num) =>
                <SquareItem
                    key={num} id={num}
                    onMouseEnter={setActiveSquare}
                    isActive={activeSquare} />
            ) :
               null
            }
        </div>
    </div>
  );
}
export default App;
