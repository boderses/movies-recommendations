import React, { useReducer, createContext } from "react";
import { useDefaultContext } from "./defaultContext";
import { STORAGE_KEY } from '../../const';
import { saveToStorage } from '../../utils/localStorage';

const AppContext = createContext();

const SET_LOCALE = "setLocale";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOCALE:
      saveToStorage(STORAGE_KEY, action.locale);
      return { ...state, locale: action.locale };
    default:
      console.warn(`Unhandled action type: ${action.type}`);
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const defaultContext = useDefaultContext() || { locale: "en" }; // Provide a default value if needed
  const [state, dispatch] = useReducer(reducer, defaultContext);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };