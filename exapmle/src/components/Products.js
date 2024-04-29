import React, { useEffect, useState } from "react";
import { getData } from "../Api";
import ProductCard from "./ProductCard";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import "../Products.css";

const DEFAULT_NUMBER_OF_USERS = 5;

function Products() {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [limit, setLimit] = useState(10);
  const [productCartIds, setProductCartIds] = useState([]);

  function handleShowMore() {
    setLimit(limit + 10);
    getProducts(limit + 10);
  }

  function getProducts(limit) {
    setIsLoading(true);
    getData(limit)
      .then((data) => {
        setProducts(data.products);
      })
      .catch(() => {
        setErrorMessage("Failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function addProduct(id) {
    if (!productCartIds.includes(id)) {
      setProductCartIds([...productCartIds, id]);
    } else {
      const newProductCarIds = productCartIds.filter(function (productCartId) {
        return productCartId !== id
      });

      setProductCartIds(newProductCarIds)
    }
  }

  function handlerAddProducts(){

  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="container" style={{
      padding:"50px 50px"
    }}>

     <Badge badgeContent={productCartIds.length} color="primary">
       <IconButton onClick={handlerAddProducts}>
         <ShoppingCartIcon />
       </IconButton>
     </Badge>
      


      {products.map((product) => (
        <ProductCard key={product.id} {...product} addProduct={addProduct} />
      ))}

      <div style={{ width: "100%" }}>
        <button onClick={handleShowMore}>Show More</button>
      </div>

      {errorMessage && (
        <div style={{ color: "red" }}>
          <span> {errorMessage} </span>
        </div>
      )}

      {isLoading && (
        <div style={{ display: "flex" }}>
          <span>Loading..</span>
        </div>
      )}
    </main>
  );
}

export default Products;
