import React from "react";

import LogoHeaders from '../../img/headers/logo_icon.svg';
import SearchIcon from '../../img/headers/search_icon.svg';
import LikeIcon from '../../img/headers/like_icon.svg';
import UnionIcon from '../../img/headers/union_icon.svg';
const Headers = () => {
  return (
    <>
      <header className={"mobile-headers"}>
        <a href={'#'} className="log-wrp">
        <img  src={LogoHeaders} alt={"Logo"} />
        </a>

        <nav className="nav-wrp">
          <a href={'#'}> 
            <img src={SearchIcon} alt={"search engine logo"}/>
            </a>
          <a href={'#'}>
          <img src={LikeIcon} alt={"like logo"}/>
          </a>
          <a href={'#'}>
          <img src={UnionIcon} alt={"like logo"}/>
          </a>
        </nav>
      </header>
    </>
  );
};
export default Headers;
