import React from "react";
const Portfolioitem = (props) => 
  (
  <div>
    <h1>welcome to portfolio page</h1>
    <p>portfolio id {props.match.params.id}</p>
  </div>
);

export default Portfolioitem;
