import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = ({ product }) => {
  const { productId } = useParams();

  // Find the selected product based on the productId
  const selectedProduct = product.find((p) => p.id === parseInt(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <div>
        {selectedProduct.images.map((image, index) => (
          <img key={index} src={image} alt={`Product ${index}`} />
        ))}
      </div>
      <h3>Reviews</h3>
      <ul>
        {selectedProduct.reviews.map((review, index) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductPage;