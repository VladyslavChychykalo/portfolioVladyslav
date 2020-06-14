import React from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { headerWrapper, headerBackground } from "./Header.module.css";

const Header = () => (
  <div id="header" className={headerBackground}>
    <DropDownMenu />
    <div className={headerWrapper}>
      <p>Vladyslav Chychykalo</p>
      <p>Front-end developer</p>
    </div>
  </div>
);

export default Header;
