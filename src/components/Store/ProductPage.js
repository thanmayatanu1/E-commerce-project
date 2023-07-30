import React from 'react';
import { useParams, Link } from 'react-router-dom';

function ProductPage({ products }) {
  const { productId } = useParams();

  const selectedProduct = products.find((item) => item.id === parseInt(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const reviews = selectedProduct.reviews || []; // Ensure reviews array is defined

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.imageUrl} alt={selectedProduct.title} />
      <p>Price: Rs. {selectedProduct.price}</p>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <p>{review}</p>
        </div>
      ))}
      <Link to="/">Back</Link>
    </div>
  );
}

export default ProductPage;