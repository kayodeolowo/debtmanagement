import React, { createContext, useReducer } from "react";
import { BondReducer } from "./BondReducer";
import logo from "../images/LOGO.png";


const myProducts = [
  { id: 1, name: "730 days Savings Bond", price: 5000, tittle: "FGN Savings Bond", image: logo, date: "Due October 12, 2024", percent: "11.382", interest: "Quaterly", opening: "Oct/04/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022"  },
 
  
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
