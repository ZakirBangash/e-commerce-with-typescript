import { productInfo } from "./Types/product_types";
import { ActionMap } from "./Types/reducer_types";
import { Types } from './Types/reducer_types';
import {ProductPayload} from './Types/reducer_types';


export type ProductActions = ActionMap<ProductPayload>[keyof ActionMap<ProductPayload>];

export const productReducer = (state: productInfo[], action: ProductActions) => {

  switch (action.type) {
    case Types.Add:
      action.payload!.product.quantity! += 1;
      return state;
    case Types.Remove:
      action.payload!.product.quantity! -= 1;
      return state;
    
    case Types.Create:
      return [
        ...state,
        {
          id: action.payload!.product.id,
          category: action.payload!.product.category,
          price: action.payload!.product.price,
          title: action.payload!.product.title,
          image: action.payload!.product.image,
          description: action.payload!.product.description,
          quantity: action.payload!.quantity
        }
      ]
    case Types.Delete:
      return [
        ...state.filter(product => product.id !== action.payload!.id),
      ]
    case Types.Clear:
      return state = []
    default:

      return state;
  }
}
