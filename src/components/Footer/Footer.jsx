import React from "react";
import { footerWrapper, socialLink } from "./Footer.module.css";
import { ReactComponent as GitHub } from "../../assets/svg/github.svg";
import { ReactComponent as Telegram } from "../../assets/svg/telegram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";

const Footer = () => (
  <div id="contacts" className={footerWrapper}>
    <h3>Contacts</h3>
    <div>
      <ul>
        <li>
          <p>Phone number</p>
          <a href="tel:+380996267468">(099)626-74-68</a>
        </li>
        <li>
          <p>E-mail</p>
          <p>valyslav.chychykalo@gmail.com</p>
        </li>
      </ul>
      <ul>
        <li>
          <a href="https://t.me/Vladyslav_Chychykalo">
            <Telegram className={socialLink} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/vladyslav-chychykalo-b045a3166/">
            <LinkedIn className={socialLink} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100010711830394">
            <Facebook className={socialLink} />
          </a>
        </li>
        <li>
          <a href="https://github.com/VladyslavChychykalo">
            <GitHub className={socialLink} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/vlados4agd/?hl=ru">
            <Instagram className={socialLink} />
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
