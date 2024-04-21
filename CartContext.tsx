import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowSuccessMessage(true);
    setTimeout(() => {
        setShowSuccessMessage(false);
    }, 3000);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, showSuccessMessage }}>
      {children}
    </CartContext.Provider>
  );
};