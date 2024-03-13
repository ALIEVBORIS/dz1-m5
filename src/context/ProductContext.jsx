import React, { createContext } from 'react';
import { api } from '../api/axios.api';

export const ContextProvider = createContext("");

export const ProductProvider = (props) => {
  const [items, setItems] = React.useState();

  const fetchProducts = async () => {
    const responce = await api.get('/products');
    setItems(responce.data.products);
  };

  const data = { fetchProducts, items: items };
  return (
    <ContextProvider.Provider value={data}>
      {props.children}
    </ContextProvider.Provider>
  );
};
