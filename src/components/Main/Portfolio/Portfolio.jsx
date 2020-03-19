import React from "react";
import { portfolioWrapper } from "./Portfolio.module.css";
import portfolio from "../../../storage/portfolio.json";

const Portfolio = () => (
  <div className={portfolioWrapper}>
    <h3>My portfolio</h3>
    <ul>
      {portfolio.map(({ link, info }) => (
        <li>
          <a href={link}>
            <img src="" alt="" />
          </a>
          <p>{info}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Portfolio;
