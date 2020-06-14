import React from "react";
// import items from "../../../storage/portfolio.json";
import styles from "./DropDownItem.module.css";

const dropDownOptions = [
  {
    id: 1,
    title: "Header",
    linkPage: "#header",
  },
  {
    id: 2,
    title: "About me",
    linkPage: "#about_me",
  },
  {
    id: 3,
    title: "Portfolio",
    linkPage: "#portfolio",
  },
  {
    id: 4,
    title: "Contacts",
    linkPage: "#contacts",
  },
];

const DropDownItem = ({ category }) => (
  <ul className={styles.item}>
    {dropDownOptions
      .filter((item) => item.title === category)
      .map((item) => (
        <li key={item.id}>
          <a href={item.linkPage}>{item.title}</a>
        </li>
      ))}
  </ul>
);

export default DropDownItem;
