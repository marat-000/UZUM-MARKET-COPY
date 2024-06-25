import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext(null);

export const ProductProvider = ({ children }) => {
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://bd9cd79ca39d8b90.mokky.dev/uzum"
      );
      setState(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ProductContext.Provider value={{ state }}>
      {children}
    </ProductContext.Provider>
  );
};
