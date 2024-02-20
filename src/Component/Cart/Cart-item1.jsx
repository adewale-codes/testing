import React, { useContext } from "react";
import { ShopContext } from "../../Context/Shop-Context";
import { FaStar } from "react-icons/fa";

const CartItems = (props) => {
  const { id, image, title, price, category, rating, description } = props.data;

  const {
    addToCart,
    cartItems,
    removeFromCart,
    updateCartItemCount,
    getTotal,
  } = useContext(ShopContext);

  const total = getTotal();

  return (
    <>
      <div className="con">
        <img src={image} alt={title} />
        <div className="Container">
          <h4>{category}</h4>
          <h1>{title}</h1>
          <p className="Rating">
            Rating {rating && rating.rate}
            <div className="star">
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
              <FaStar className="icon" />
            </div>
            <div className="table">
              <input
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <span>*</span>
              <p className="Price">${price}</p>
              <p className="equal">=</p>
              {/* total of price and rate */}
              <p className="total">${total}</p>
            </div>
            <div className="CountHandler">
              <button className="add" onClick={() => removeFromCart(id)}>
                -
              </button>
              <button className="remove" onClick={() => addToCart(id)}>
                +
              </button>
            </div>
            <p className="Description">{description}</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default CartItems;
