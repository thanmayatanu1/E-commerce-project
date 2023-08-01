import React from 'react';
import { Link } from 'react-router-dom';
import classes from './ProductList.module.css';

function Product({ product, addToCart }) {
  const musicProducts = product.slice(0, 4); // First four products
  const mergeProducts = product.slice(4, 6); // Last two products

  return (
    <div>
      <div>
        <header className={classes.sectionTitle}>Music</header>
        <div className={classes.product}>
          {musicProducts.map((productItem) => (
            <div key={productItem.id} className={classes.productitem}>
              <div>
                <Link to={`/product/${productItem.id}`}>
                  <img src={productItem.imageUrl} width="300px" alt={productItem.title} />
                </Link>
                <h2>{productItem.title}</h2>
                <p>Price: Rs. {productItem.price}</p>
                <button onClick={() => addToCart(productItem)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <header className={classes.sectionTitle}>Merge</header>
        <div className={classes.product}>
          {mergeProducts.map((productItem) => (
            <div key={productItem.id} className={classes.productitem}>
              <div>
                <Link to={`/product/${productItem.id}`}>
                  <img src={productItem.imageUrl} width="300px" alt={productItem.title} />
                </Link>
                <h2>{productItem.title}</h2>
                <p>Price: Rs. {productItem.price}</p>
                <button onClick={() => addToCart(productItem)}>Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
  </div>
  );
}

export default Product;