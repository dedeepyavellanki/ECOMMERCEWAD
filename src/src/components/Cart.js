import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemove = (productId) => {
    removeFromCart(productId);
  };

  return (
    <main className="container mt-5">
      <h1 className="text-center mb-4">Cart</h1>
      {cart.length === 0 ? (
        <h3 className="text-center mb-4">Your cart is currently empty.</h3>
      ) : (
        <div className="row">
          {cart.map((product, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card">
                <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">${product.price}</p>
                  <button className="btn btn-purple" style={{backgroundColor:'#7E57C2'}} onClick={() => handleRemove(product.id)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Cart;