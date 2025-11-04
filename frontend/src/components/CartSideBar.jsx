import React, { useContext } from 'react';
import { IoClose } from 'react-icons/io5';
import { CartContext } from '../context/CartContext';


const CartSideBar = ({ onClose }) => {
  const { cartItems = [], addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((t, i) => t + i.price * i.quantity, 0);
  const fmt = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });

  return (
    <aside className="h-full w-full sm:w-[350px] bg-linear-to-b from-pink-500 to-teal-400 p-4 flex flex-col" role="dialog" aria-modal="true" aria-label="Shopping cart">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Your cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="p-2">
          <IoClose size={20} />
        </button>
      </div>

      <div className="mt-4 flex-1 overflow-y-auto">
        {cartItems.length === 0 ? (
          <div className="h-full flex items-center justify-center">Your cart is empty.</div>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="flex gap-3 items-center border-b py-3">
              <img src={item.images?.[0] || '/placeholder.png'} alt={item.title} className="h-16 w-16 object-contain" loading="lazy"/>
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div>Qty: {item.quantity} • {fmt.format(item.price)}</div>
              </div>
              <div className="flex flex-col gap-2">
                <button onClick={() => addToCart(item)} aria-label="Increase">+</button>
                <button onClick={() => removeFromCart(item)} aria-label="Decrease">-</button>
                <button onClick={() => deleteFromCart(item.id)} aria-label="Remove" className="text-sm text-white bg-red-600 px-2 rounded">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 border-t pt-4">
        <div className="flex justify-between">
          <span className="font-semibold">Subtotal</span>
          <span className="font-semibold">{fmt.format(totalPrice)}</span>
        </div>
        <button className="mt-3 w-full py-2 bg-green-600 text-white rounded">Checkout</button>
      </div>
    </aside>
  );
};

export default CartSideBar;