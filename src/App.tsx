import {useState, useEffect } from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { ProductList } from './components/ProductList';
import { ProductDetail } from './components/ProductDetail';
import { getProducts } from './services/store_api';
import { productInfo } from './Types/product_types';
import { Cart } from './components/Cart/Cart';

const App = () => {

  const [products, setproducts] = useState<productInfo[] | undefined>();


useEffect(() => {

  const fetchData = async () => {
  const Products = await getProducts();
    setproducts(Products);  
  }
fetchData();

}, [])


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ProductHome">
          <Route path="/" element={
          <ProductList products={products!} />} 
          />
          <Route path=":slug"
            element={
              <>
                <ProductDetail />
              </>
            } />
        </Route>
         <Route path="/Cart" element={<Cart />} />
                  
      </Routes>
    </div>
  );
}

export default App;
