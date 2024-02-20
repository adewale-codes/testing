import React, { createContext, useState } from "react";
import { MORE } from "../MoreP";

export const ShopContext = createContext(null);

const getDefualtCart = () => {
  let cart = {};
  for (let i = 1; i < MORE.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefualtCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = MORE.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const getTotal = () => {
    let total = 0;
    for (const itemId in updateCartItemCount) {
      if (updateCartItemCount[itemId] > 0) {
        let itemInfor = MORE.find((product) => product.id === Number(itemId));
        total += updateCartItemCount[item] * itemInfor.price;
      }
    }
    return total;
  };
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    getTotal,
  };

  return (
    <>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </>
  );
};
