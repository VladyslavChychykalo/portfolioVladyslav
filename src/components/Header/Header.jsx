import React from "react";
import { headerWrapper, headerBackground } from "./Header.module.css";

const Header = () => (
  <div className={headerBackground}>
    <div className={headerWrapper}>
      <p>Vladyslav Chychykalo</p>
      <p>Front-end developer</p>
    </div>
  </div>
);

export default Header;
