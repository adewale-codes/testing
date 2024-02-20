import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ShopContext } from "../../Context/Shop-Context";

const Navbar = () => {
  const Navigate = useNavigate();
  const { cartItems } = useContext(ShopContext);

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const item in cartItems) {
      totalItems += cartItems[item];
    }
    return totalItems;
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shadow-sm">
          <div className="container">
            <Link className="navbar-brand fw-bold fs-4" to="/">
              D-COLLECTION
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/MoreProduct">
                    More Products
                  </Link>
                </li>
              </ul>
              {/* <div>test</div>
              <div>testing</div> */}
              <form className="d-flex" role="search">
                <button
                  className="btn btn-outline-dark"
                  type="submit"
                  onClick={() => Navigate("/login")}
                >
                  Login
                </button>
                <button className="btn btn-outline-dark mx-2">
                  <Link className="nav-link" to="/cart">
                    <FaShoppingCart className="me-1" />
                    Cart ({getTotalCartItems()})
                  </Link>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
