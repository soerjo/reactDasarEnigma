import React from "react";

export default function ComponentCount(props) {
  console.log(`ini adalah isi dari ComponentCount`, props);
  let { angka, plusHandler, minusHandler } = props;
  return (
    <div>
      <button onClick={() => plusHandler(2)}>+</button>
      <span>{angka}</span>
      <button onClick={() => minusHandler(2)}>-</button>
    </div>
  );
}
