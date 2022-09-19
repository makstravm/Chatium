import React from "react";
import ReactDOM from "react-dom";

const Ass = () => {
  console.log("asd");
  return (
    <span>
      Hi
      <span>{}</span>
    </span>
  );
};

ReactDOM.render(
  <div>
    <Ass />
  </div>,
  document.getElementById("root")
);
