import { productInfo } from "./product_types";

// For reducer 
export type ActionMap<M extends { [Key: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
    ? {
      type: Key;
    }
    : {
      type: Key;
      payload?: M[Key];
    }
  };

  export enum Types {
    Create = 'CREATE_PRODUCT',
    Delete = 'DELETE_PRODUCT',
    Add = 'ADD_PRODUCT',
    Remove = 'REMOVE_PRODUCT',
    Clear  = 'CLEAR_CART'
  }



 export type ProductPayload = {
    [Types.Create]: {
      product: productInfo,
      quantity: number
    };
  
    [Types.Delete]: {
      id: number;
    };
    [Types.Add]: {
      product: productInfo
    };
    [Types.Remove]: {
      product: productInfo
    };
    [Types.Clear]: {};
  
  }