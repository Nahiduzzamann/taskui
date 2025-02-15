'use client'
import { createContext, useContext, useState } from "react";
import { CardData } from "../types";
import { toast } from 'react-toastify';


interface CardContextType {
  cart: CardData[];
  addToCart: (card: CardData) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CardData[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const addToCart = (card: CardData) => {
    // Check if the card is already in the cart
    const isAlreadyInCart = cart.some((item) => item.id === card.id);
  
    if (isAlreadyInCart) {
      toast.info('This item is already in your cart!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      const updatedCart = [...cart, card];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success('Item added in your cart!', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  };

  return (
    <CardContext.Provider value={{ cart, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("useCardContext must be used within a CardProvider");
  }
  return context;
};
