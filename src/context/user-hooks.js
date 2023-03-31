import React, {createContext, useState, useContext, useEffect} from "react";
import getData from '../data/data';


const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ error, setError ] = useState(null);
    const [ isDataLoading, setDataLoading ] = useState(false);
    const [ data, setData ] = useState([]);
    const [ option, setOption ] = useState('');
    const [ field, setField ] = useState(0);
    const [ level, setLevel ] = useState([]);
    const [ activeSquares, setActiveSquares] = useState([]);
    const [ activeColor , setActiveColor ] = useState("")
    const [ colors, setColors ] = useState([]);

    useEffect(() => {
        setDataLoading(true);
        getData(`levels.json`)
            .then(res => {
                const { message, code } = res;
                if (code !== '200' && message) throw Error(message);
                setError(null);
                setData(res);
            })
            .catch(setError)
            .finally(() => setDataLoading(false));
    }, []);

    useEffect(() => {
        setDataLoading(true);
        getData(`colors.json`)
            .then(res => {
                const { message, code } = res;
                if (code !== '200' && message) throw Error(message);
                setError(null);
                setColors(res);
            })
            .catch(setError)
            .finally(() => setDataLoading(false));
    }, []);


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
    <AppContext.Provider
      value={{
          isDataLoading,
          setDataLoading,
          error,
          data,
          option,
          setOption,
          field,
          setField,
          level,
          setLevel,
          handleChange,
          handleSubmit,
          colors,
          activeSquares,
          setActiveSquares,
          activeColor,
          setActiveColor,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
