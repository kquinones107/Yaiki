import React, {createContext, useState} from 'react';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = newProduct => {
    setCart(currentCart => {
      // Check if the product is already in the cart
      const productIndex = currentCart.findIndex(
        product => product.id === newProduct.id,
      );

      if (productIndex > -1) {
        // Product is already in the cart, update the quantity
        const updatedCart = [...currentCart];
        const existingProduct = updatedCart[productIndex];
        updatedCart[productIndex] = {
          ...existingProduct,
          quantity: existingProduct.quantity + 1, // Assuming there's a 'quantity' property
        };
        return updatedCart;
      } else {
        // Product is not in the cart, add as new entry
        return [...currentCart, {...newProduct, quantity: 1}];
      }
    });
  };

  const removeFromCart = productId => {
    setCart(cart.filter(product => product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};
