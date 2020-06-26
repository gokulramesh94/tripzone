import React from "react";
import "./DiscountDisplayer.scss";

function DiscountDisplayer({ title, price }) {
  return (
    <div className="discount-displayer-wrapper">
      <div className="discount-displayer-title">
        {title}
      </div>
      <div className="discount-displayer-price">{`$ ${price}`}</div>
    </div>
  );
}

export default DiscountDisplayer;
