import React from "react";
// import items from "../../../storage/portfolio.json";
import styles from "./DropDownItem.module.css";

const dropDownOptions = [
  {
    id: 1,
    title: "About me"
  },
  {
    id: 2,
    title: "Portfolio"
  },
  {
    id: 3,
    title: "Contacts"
  }
];

const DropDownItem = ({ category }) => (
  <ul className={styles.item}>
    {dropDownOptions
      .filter(item => item.title === category)
      .map(item => (
        <li key={item.id}>
          <a href={item.linkPage}>{item.title}</a>
        </li>
      ))}
  </ul>
);

export default DropDownItem;
