import React from "react";
import { Link } from "react-router-dom";

import "./index.scss";

const image404 = `https://www.admecindia.co.in/sites/default/files/404.gif`

const page404 = () => {
  
  return (
    <div className="not-found">
      <p><Link to="/">&lt;  Back to HomePage</Link></p>
      <img alt="404 Not Found" src={image404} />
    </div>
  );
};

export default page404;
