
import React from "react";
import { createContext } from "react"; /* Using React's Context hook to define a new context to store the books
import { useState } from "react";
import { useContext } from "react"; /* allows me to access the cart from any of my components */

const ShoppingCartContext = createContext();

const shoppingCart = ({children}) => {

    const [cartItems, setCartItems] = useState([]); /* Setting the useState to be an empty array in order to insert the books */

    const addItem = (item) => {
        setCartItems((prevItems) => [...prevItems, item]); //making sure that when usesrs add an item that it comes after the previously added one 
    };

    const removeItem = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };



    return (

        <ShoppingCartContext.Provider
         value={{cartItems, addItem, removeItem, clearCart}}
        >
            {children}
        </ShoppingCartContext.Provider>
    )
};

export const useCart = () => useContext(ShoppingCartContext);

export default shoppingCart; 
