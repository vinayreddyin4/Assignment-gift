import React from 'react';


export const ProductCard = ({ product }) => {
    return (
      <div className="product-card">
          <div className="product">
              <div className="product-img"><img src={product.picture} alt={product.name}/></div>
              <div className="product-name">{product.name}</div>
              <div className="product-price">${product.price}</div>
          </div>
      </div>
    )
};