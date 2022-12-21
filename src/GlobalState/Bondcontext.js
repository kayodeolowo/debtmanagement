import React, { createContext, useReducer } from "react";
import { BondReducer } from "./BondReducer";

import logo from "../images/LOGO.png";


const myProducts = [
  { id: 1, name: "DSLR", price: 600, image: logo, status: "new" },
  { id: 2, name: "Computer", price: 1000, image: logo, status: "hot" },
  
];

export const bondContext = createContext();

const BondContextProvider = ({ children }) => {
  const [state] = useReducer(BondReducer, myProducts);

  return (
    <bondContext.Provider value={[...state]}>
      {children}
    </bondContext.Provider>
  );
};

export default BondContextProvider;
