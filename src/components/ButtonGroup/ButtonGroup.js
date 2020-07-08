import React from "react";
import { Button } from "../../components";
import PropTypes from "prop-types";
import "./ButtonGroup.scss";

function ButtonGroup({ data, selectedItem, handleclick }) {
  console.log("ButtonGroup");
  const renderButtons = () => {
    let buttonList = [];
    data &&
      data.forEach((item, index) => {
        buttonList.push(
          <Button
            text={item.BUTTON_TEXT}
            theme={selectedItem === item.VALUE ? 'light' : 'dark'}
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

ButtonGroup.defaultProps = {
  data: [],
  selectedItem: 0
};

ButtonGroup.propTypes = {
  data: PropTypes.array.isRequired,
  selectedItem: PropTypes.number
};

export default React.memo(ButtonGroup);
