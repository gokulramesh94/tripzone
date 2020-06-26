import React from "react";
import "./SelectBox.scss";

function SelectBox({ labelText, data, value, handleChange }) {
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
        <option>{`Pick your ${labelText}`}</option>
        {renderOptions()}
      </select>
    </div>
  );
}

export default SelectBox;
