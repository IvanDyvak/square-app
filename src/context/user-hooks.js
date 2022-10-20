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


        // const activeToggle = (e) => {
        //     setIsActiveSquare(!isActiveSquare);
        //     setColdId(Number(e.target.id) + 1);
        //     setRowdId(Number(e.target.parentNode.id) + 1);
        //     console.log(colId);
        // }

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
