import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { IoClose } from "react-icons/io5";

const CartSideBar = () => {
  const {
    cartItems = [],
    addToCart,
    removeFromCart,
    deleteFromCart,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (!cartItems.length) {
    return (
      <aside className="bg-linear-to-b from-pink-500 to-teal-400  h-full  p-4 flex flex-col justify-start">
        <div className="flex justify-between items-center text-xl text-gray-800">
          <h1 className=" ">Your cart</h1>
          <IoClose size={18} className="text-gray-800" />
        </div>
        <hr className="text-gray-400 mt-5" />
        <div className="flex text-center justify-center items-center h-full">
          <p className="text-lg text-gray-900  ">Your cart is empty.</p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="bg-linear-to-b from-pink-500 to-teal-400 h-full w-full p-4 flex flex-col justify-start overflow-y-auto">
      <div className="flex justify-between items-center text-xl text-gray-800">
        <h1 className=" ">Your cart</h1>
        <IoClose size={18} className="text-gray-800" />
      </div>

      <hr className="text-gray-400 mt-5 mb-10" />
      {/* display cart items */}
      <div className="flex flex-col gap-4">
        {cartItems.map((item) => {
          const imgSrc = item.images?.[0] || "/placeholder.png";
          const title = item.title ?? item.name ?? "Product";
          return (
            <div
              key={item.id}
              className="border-b-2 border-gray-300 p-4 flex items-center gap-4"
            >
              <img
                src={imgSrc}
                alt={title}
                className="object-contain h-20 w-20"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{title}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <button
                  type="button"
                  className="bg-amber-300 text-2xl p-2"
                  onClick={() => addToCart(item)}
                  aria-label={`Increase quantity for ${title}`}
                >
                  +
                </button>
                <button
                  type="button"
                  className="bg-amber-300 text-2xl p-2"
                  onClick={() => removeFromCart(item)}
                  aria-label={`Decrease quantity for ${title}`}
                >
                  -
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white p-2 text-sm"
                  onClick={() => deleteFromCart(item.id)}
                  aria-label={`Remove ${title}`}
                >
                  Delete
                </button>
              </div>
              <div className="w-full mt-4">
                <strong>Total: </strong> ${item.price * item.quantity}
              </div>
            </div>
          );
        })}
      </div>

      {/* Cart total summary */}
      <div className="mt-6 pt-4 border-t-2 border-gray-300">
        <h2 className="text-lg font-semibold">Cart Summary</h2>
        <p className="mt-2">
          <strong>Subtotal:</strong> ${totalPrice.toFixed(2)}
        </p>
        {/* Add checkout button or other actions here */}
      </div>
    </aside>
  );
};

export default CartSideBar;
