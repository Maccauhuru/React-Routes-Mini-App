import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";
const PageNotFound = ()=>(<div>
<p>404 Error - Page not found</p>
<NavLink to="/">Home</NavLink>
</div>);

export default PageNotFound;