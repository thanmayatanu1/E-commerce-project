import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product, addToCart }) {
  return (
    <div className='product'>
      {product.map((productItem) => (
        <div key={productItem.id} style={{ width: '50%' }}>
          <div className='product-item'>
            <div>
              <Link to={`/product/${productItem.id}`}>
                <img src={productItem.imageUrl} width="300px" alt={productItem.title} />
              </Link>
              <h2>{productItem.title}</h2>
              <p>Price: Rs. {productItem.price}</p>
              <button onClick={() => addToCart(productItem)}>Add To Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;