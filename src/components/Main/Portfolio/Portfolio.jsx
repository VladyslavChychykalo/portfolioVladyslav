import React from "react";
import {
  portfolioWrapper,
  description,
  topic,
  border
} from "./Portfolio.module.css";
import portfolio from "../../../storage/portfolio.js";

const Portfolio = () => (
  <>
    <div className={portfolioWrapper}>
      <h3>My portfolio</h3>
      <ul>
        {portfolio.map(({ id, link, info, href, title }) => (
          <li key={id}>
            <a href={link}>
              <img src={href} alt="" />
            </a>
            <p className={topic}>{title}</p>
            <p className={description}>{info}</p>
            <a href={link}>go to website</a>
          </li>
        ))}
      </ul>
    </div>
    <div className={border}></div>
  </>
);

export default Portfolio;
