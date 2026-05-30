import { createContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity?: number;
};

type CartContextType = {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

export const CartContext =
  createContext<CartContextType | null>(null);

export const CartProvider = ({
  children,
}: {
  children: ReactNode;
}) => {

  const [cart, setCart] = useState<Product[]>([]);

  // LOAD CART
  useEffect(() => {

    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }

  }, []);

  // SAVE CART
  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  // ADD TO CART
  const addToCart = (product: Product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: (item.quantity || 1) + 1,
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }
  };

  // REMOVE
  const removeFromCart = (id: number) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // INCREASE
  const increaseQty = (id: number) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: (item.quantity || 1) + 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  // DECREASE
  const decreaseQty = (id: number) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              (item.quantity || 1) > 1
                ? (item.quantity || 1) - 1
                : 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};