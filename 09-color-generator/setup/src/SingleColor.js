import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  // console.log(rgb , weight);
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);
  console.log(bcg);

  useEffect(() => {
    const Timeout  = setTimeout(() => {
      setAlert(false);
    } , 3000);
    return () => clearTimeout(Timeout);
  } , [alert])

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hex);
      }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p>copy to clipboard</p>}
    </article>
  );
};

export default SingleColor;
