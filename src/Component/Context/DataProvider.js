import React, { createContext, useState, useEffect } from "react";




export const DataContext = createContext();
export const DataProvider = (props) => {
  const [products, setProducts] = useState([
   

    { _id: 1, name: "730 days Savings Bond", price: 100000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "11.2", interest: "Quaterly", opening: "Oct/04/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },

     { _id: 2, name: "730 days Savings Bond", price: 200000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "9.32", interest: "Quaterly", opening: "Oct/04/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },

      { _id: 3, name: "730 days Savings Bond", price: 300000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "3.82", interest: "Quaterly", opening: "Oct/14/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },
       { _id: 4, name: "730 days Savings Bond", price: 150000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "21.382", interest: "Quaterly", opening: "Oct/3/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },
        { _id: 5, name: "730 days Savings Bond", price: 230000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "11.45", interest: "Quaterly", opening: "Oct/04/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },
         { _id: 6, name: "730 days Savings Bond", price: 140000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "12.6", interest: "Quaterly", opening: "Oct/02/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },
          { _id: 7, name: "730 days Savings Bond", price: 190000, tittle: "FGN Savings Bond", url : "../images/coat.png", date: "Due October 12, 2024", percent: "16.30", interest: "Quaterly", opening: "Oct/04/2022", closing: "Oct/07/2022", settlement: "Oct/12/2022" , count: 1, },
          
    
   
    
    
   
  ]);
  

  const [cart, setCart] = useState([]);
  const addToCart = (id) => {
    const isNotInCart = cart.every((item) => item._id !== id);
    if (isNotInCart) {
      const foundProduct = products.filter((item) => item._id === id);
      setCart([...cart, ...foundProduct]);
    } else {
      alert("Bond is already in cart");
    }
  };

  useEffect(() => {
    const dataInCart = JSON.parse(localStorage.getItem("dataInCart"));
    if (dataInCart) {
      //setCart(dataInCart);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("dataInCart", JSON.stringify(cart));
  }, [cart]);

  const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addToCart: addToCart,
  };

  return (
    <DataContext.Provider value={value}>{props.children}</DataContext.Provider>
  );
};
