import React from "react";
import { MORE } from "../../MoreP";
import Morepros from "./Pros";
import "./More-Product.css";

const MoreProduct = () => {
  return (
    <>
      <div>
        <div className="shopTitle">
          <div className="title">Lastest Collection</div>
          <hr />
          <div className="Products">
            {MORE.map((product) => (
              <Morepros data={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreProduct;
