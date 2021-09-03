import React, { createContext, useReducer, Dispatch } from 'react';
import { productReducer,  ProductActions } from './reducers';
import { productInfo } from './Types/product_types';


type InitialStateType = {
  products: productInfo[];
}

const initialState  = {
  products: [],
}


const GlobalContext = createContext<{
  state: InitialStateType;
   dispatch: Dispatch<ProductActions>;
}>({
  state: initialState,
   dispatch: () => null
});

const mainReducer = ({ products}: InitialStateType, action: ProductActions ) => ({
  products: productReducer(products, action),
  
});


const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <GlobalContext.Provider value={
        {
            state,
            dispatch
        }
        
        }>
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalProvider, GlobalContext };