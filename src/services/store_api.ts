import { productInfo } from "../Types/product_types";


export const getProducts = async ()  => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data : productInfo[] = await res.json();
    return data;
}