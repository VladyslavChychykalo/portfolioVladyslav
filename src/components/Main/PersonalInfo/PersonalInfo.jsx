import React from "react";
import {
  personalInfoWrapper,
  personalImage,
  skillsList,
  description,
  name,
  border,
} from "./PersonalInfo.module.css";
import personalImg from "../../../assets/img/personalImage.jpg";

const PersonalInfo = () => (
  <>
    <div id="about_me" className={personalInfoWrapper}>
      <img className={personalImage} src={personalImg} alt="" />

      <div>
        <div>
          <h3>About me:</h3>
          <p className={name}>Vladyslav Chychykalo</p>
          <p className={description}>
            Frontend developer. I do layout adaptive sites. Have knowledge in
            modern technologies like: HTML, CSS (Flexbox, Grid, Scss),
            JavaScript, BEM, Git, React, Redux, Scrum, Gulp, Webpack, Npm.
            Implemented several projects. I don’t sit in one place, I constantly
            develop my professional skills
          </p>
        </div>

        <h3>Skills: </h3>
        <div>
          <ul className={skillsList}>
            <li>Html</li>
            <li>CSS(Sass,Scss)</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Gulp</li>
            <li>Webpack</li>
            <li>BEM</li>
            <li>Scrum</li>
          </ul>
        </div>
      </div>
    </div>
    <div className={border}></div>
  </>
);

export default PersonalInfo;
