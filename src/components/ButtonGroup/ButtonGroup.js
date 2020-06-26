import React from "react";
import { Button } from "../../components";
import "./ButtonGroup.scss";

function ButtonGroup({ data, handleclick }) {
  const renderButtons = () => {
    let buttonList = [];
    data &&
      data.forEach((item, index) => {
        buttonList.push(
          <Button
            text={item.BUTTON_TEXT}
            size="small"
            onClick={() => handleclick(item.VALUE)}
            key={index}
          />
        );
      });
    return buttonList;
  };
  return (
    <div className="button-group-wrapper">
      {renderButtons()}
    </div>
  );
}

export default ButtonGroup;
