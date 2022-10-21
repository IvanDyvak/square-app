import React, {createContext, useState, useContext, useEffect} from "react";
import getData from '../data/data';


const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ isActiveSquare, setIsActiveSquare ] = useState(false);
    const [rowId, setRowdId] = useState("");
    const [colId, setColdId] = useState("");
    const [error, setError] = useState(null);
    const [isDataLoading, setDataLoading] = useState(false);
    const [data, setData] = useState([]);
    const [ option, setOption ] = useState('');
    const [ field, setField ] = useState(0);
    const [ level, setLevel ] = useState([]);

    useEffect(() => {
        setDataLoading(true);
        getData()
            .then(res => {
                const { message, code } = res;
                if (code !== '200' && message) throw Error(message);
                setError(null);
                setData(res);
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
        setIsActiveSquare(false);
    }

  return (
    <AppContext.Provider
      value={{
          isActiveSquare,
          setIsActiveSquare,
          colId,
          setColdId,
          rowId,
          setRowdId,
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
