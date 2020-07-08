import React from "react";
import "./DiscountDisplayer.scss";

function DiscountDisplayer({ title, price }) {
  console.log("DiscountDisplayer");
  return (
    <div className="discount-displayer-wrapper">
      <div className="discount-displayer-title">
        {title}
      </div>
      <div className="discount-displayer-price">{`$ ${price}`}</div>
    </div>
  );
}

export default React.memo(DiscountDisplayer);
