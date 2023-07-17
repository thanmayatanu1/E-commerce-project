import React from 'react';
import '../App.css';


function Product ({product, addToCart})  {
return (
    <div className='flex'>
      
        {
            product.map((productItem, productIndex) => {
              return (
              <div style={{ width: '50%' }}>
                <div className='product-item'>
                <div>
                <img src={productItem.imageUrl} width="300px" alt={productItem.title}/> 
                <h2>{productItem.title}</h2>
                <p>Price: Rs. {productItem.price}</p>
                <button onClick={() => addToCart(productItem)} >Add To Cart</button>
                </div>
                 </div>
                </div>
                 )
                })
      }
    </div>
)
};

export default Product;