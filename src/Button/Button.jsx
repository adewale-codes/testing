import React, { useContext } from "react";
import "./Button.css";
import { ShopContext } from "../Context/Shop-Context";
import PropTypes from "prop-types";

const Button = ({ className, children, productId }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <>
      <div>
        <button
          id="my-button"
          className={`${className} `}
          onClick={() => addToCart(productId)}
        >
          {children}
        </button>
      </div>
    </>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  productId: PropTypes.number.isRequired,
};

export default Button;
