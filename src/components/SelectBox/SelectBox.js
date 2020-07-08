import React from "react";
import PropTypes from "prop-types";
import "./SelectBox.scss";

function SelectBox({ labelText, data, value, handleChange }) {
  console.log("SelectBox");
  const renderOptions = () => {
    let options = [];
    data &&
      data.forEach((item, index) => {
        options.push(
          <option value={item.code} key={index}>
            {item.name}
          </option>
        );
      });
    return options;
  };

  return (
    <div className="select-box-wrapper">
      <label className="label-text" htmlFor="select-box">
        {labelText}
      </label>
      <select
        className="select-box"
        name="select-box"
        value={value}
        onChange={event => handleChange(event.target.value)}
      >
        <option value="">{`Pick your ${labelText}`}</option>
        {renderOptions()}
      </select>
    </div>
  );
}

SelectBox.defaultProps = {
  labelText: "",
  data: [],
  value: ""
};

SelectBox.propTypes = {
  labelText: PropTypes.string,
  data: PropTypes.array,
  value: PropTypes.string
};

export default React.memo(SelectBox);
