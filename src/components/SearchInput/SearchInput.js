import React, { useRef, useImperativeHandle } from "react";
import "./SearchInput.scss";

const SearchInput = React.forwardRef(({ value, onChange, onEnter }, ref) => {
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

export default SearchInput;
