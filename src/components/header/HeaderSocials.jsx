import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import "./header.css";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkdin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="http://linkdin.com" target="_blank">
        <BsGithub />
      </a>
      <a href="http://linkdin.com" target="_blank">
        <BsFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
