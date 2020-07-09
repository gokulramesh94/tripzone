import React from "react";
import { Images } from "../../constants";
import "./Image.scss";

function Image({ source, altText }) {
  const addDefaultSrc = event => {
    event.target.src = Images.LOCATION_UNAVAILABLE;
  };
  return <img src={source} alt={altText} onError={addDefaultSrc} />;
}

export default Image;
