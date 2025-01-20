import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

  return (
    <div className="footer text-center">
      <p>
        &#x3c;&#47;&#x3e; with ❤️ by
        <a href="https://www.github.com/ismaeeldev" target="_blank">
          {" "}
          Muhammad Ismaeel
        </a>
        😎
      </p>
      <p className="pink-text-gradient">No. of Visitors &nsbp;|| &nsbp; <img src="https://hitwebcounter.com/counter/counter.php?page=18554175&style=0009&nbdigits=5&type=page&initCount=10" title="Counter Widget" Alt="Visit counter For Websites" border="0" /></p>

    </div>
  );
};

export default Footer;