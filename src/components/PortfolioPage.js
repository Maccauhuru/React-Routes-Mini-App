import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => (
  <div>
    <h1>Welcome to my portfolio page.</h1>
    <Link to="/portfolio/1">One</Link><p></p>
    <Link to="/portfolio/2">Two</Link><p></p>
    <Link to="/portfolio/3">Three</Link><p></p>
    
  </div>
);

export default PortfolioPage;
