import React, {createContext, useState, useContext, useEffect} from "react";

const AppContext = createContext();
export const useAppData = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
    const [ isActiveSquare, setIsActiveSquare ] = useState(false);
    const [colId, setColdId] = useState(0);

        const activeToggle = (e) => {
            setIsActiveSquare(!isActiveSquare);
            setColdId(e.target.id);

            console.log(colId);
        }



  return (
    <AppContext.Provider
      value={{
          isActiveSquare,
          setIsActiveSquare,
          activeToggle,
          colId,
          setColdId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
