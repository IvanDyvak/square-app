import React, { useEffect, useState } from 'react';
import './App.css';
import SquareItem from "./components/SquareItem";

function App() {
    const [ option, setOption ] = useState('Pick mode');
    const [ field, setField ] = useState("0");
    const [ level, setLevel ] = useState([]);
    const [ activeSquare, setActiveSquare ] = useState(false);


    useEffect(() => {

        fetch(`https://demo7919674.mockable.io`)
            .then((response) => response.json())
            .then((response) => {
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
        setField(event.target.id);
        console.log(field);
    }
    console.log(document.querySelectorAll('option')[0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(option, field);
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/logo.png" className="App-logo" alt="logo" />
      </header>
        <form onSubmit={handleSubmit}>
            <label>
                <select value="Pick mode" onChange={handleChange}>
                    <option value={option} id={field}>{option}</option>
                    {level.map(({name, field}) =>
                        <option value={name} key={name} id={field}>{name}</option>
                    )}
                </select>
            </label>
            <input type="submit" value="Start" className="init-btn"/>
        </form>
        <h2>Id: {field}</h2>
        <div className="squares-list">
            {[...Array(15).keys()].map((num) =>
                <SquareItem
                    key={num} id={num}
                    onMouseEnter={setActiveSquare}
                    isActive={activeSquare} />
            )}
        </div>
    </div>
  );
}
export default App;
