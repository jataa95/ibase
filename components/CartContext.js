"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);
const STORAGE_KEY = "ibase-bag";

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (Array.isArray(saved)) setItems(saved);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback((product, size) => {
    setItems((current) => {
      const key = `${product.slug}-${size}`;
      const existing = current.find((i) => i.key === key);
      if (existing) {
        return current.map((i) => (i.key === key ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [
        ...current,
        {
          key,
          slug: product.slug,
          name: product.name,
          colour: product.colour,
          image: product.images[0],
          size,
          quantity: 1,
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const updateQuantity = useCallback((key, quantity) => {
    setItems((current) =>
      quantity <= 0 ? current.filter((i) => i.key !== key) : current.map((i) => (i.key === key ? { ...i, quantity } : i))
    );
  }, []);

  const value = useMemo(() => {
    const count = items.reduce((n, i) => n + i.quantity, 0);
    return {
      items,
      count,
      isOpen,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      addItem,
      updateQuantity,
    };
  }, [items, isOpen, addItem, updateQuantity]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
