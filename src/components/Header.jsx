import React from "react";
import { HeaderStyle } from "../styles/HeaderStyle";
import bgdesktop from "../images/bgdesktop.svg";
import bgmobile from "../images/bgmobile.svg";

function Header({ filterBy, setFilterBy }) {
  return (
    <HeaderStyle>
      <img src={bgdesktop} alt="header-bg-desktop" className="bg-desktop" />
      <img src={bgmobile} alt="header-bg-mobile" className="bg-mobile" />
    </HeaderStyle>
  );
}

export default Header;
