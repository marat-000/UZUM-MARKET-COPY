import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("products"));

  const [basket, setBasket] = useState(storage || []);

  const getBasketData = (data) => {
    const isExist = basket.some((v) => v.id === data.id);
    if (!isExist) {
      setBasket((prevBasket) => [...prevBasket, data]);
    }
  };
  const onDelete = (id) => {
    const newData = basket.filter((v) => v.id !== id);
    setBasket(newData);
  };
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(basket));
  }, [basket]);
  return (
    <BasketContext.Provider value={{ getBasketData, basket, onDelete }}>
      {children}
    </BasketContext.Provider>
  );
};
