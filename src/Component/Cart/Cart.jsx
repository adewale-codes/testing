import React from "react";
import { MORE } from "../../MoreP";
import CartItems from "./Cart-item1";
import { ShopContext } from "../../Context/Shop-Context";
import { useContext } from "react";
import "./Cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);

  //   const totalAmount = getTotalCartAmount();

  //   const navigate = useNavigate();

  return (
    <div className="PRODUCT">
      <div className="text">
        <h1>Your Cart Items</h1>
      </div>
      <div className="CART">
        {MORE.map((product) => {
          if (cartItems[product.id] !== 1) {
            return (
              <>
                <div>
                  <CartItems data={product} />
                </div>
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Cart;
