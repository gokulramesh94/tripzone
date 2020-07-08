import React, { useRef, useImperativeHandle } from "react";
import PropTypes from "prop-types";
import "./SearchInput.scss";

const SearchInput = React.forwardRef(({ value, onChange, onEnter }, ref) => {
  console.log("SearchInput");
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    }
  }));
  return (
    <div className="search-input-wrapper">
      <input
        className="search-field"
        ref={inputRef}
        type="text"
        value={value}
        onChange={event => onChange(event)}
        onKeyDown={event => onEnter(event)}
        placeholder="Type your favorite destination here!"
      />
    </div>
  );
});

SearchInput.defaultProps = {
  value: ""
};

SearchInput.propTypes = {
  value: PropTypes.string,
};

export default React.memo(SearchInput);
