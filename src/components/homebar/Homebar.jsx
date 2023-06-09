import React from "react";
import "./homebar.css";

import {
  RiPlayCircleLine as LogoIcon,
  RiMenu2Line as HomebarMenu,
  RiHome2Fill as HomeIcon,
  RiMap2Line as Discovery,
  RiCommunityLine as Community,
  RiPlayList2Line as Playlist,
  RiMoneyDollarBoxLine as Subs,
  RiSettings2Line as Settings,
  RiLogoutBoxLine as Logout,
} from "react-icons/ri";

const Homebar = () => {

   // select all list tags (i.e. "li") with the given class
  const activeState = document.querySelectorAll(
    ".flickbase__homebar-menu__content_list-item"
  );

//   Selects all the Icon States
  const activeIconState = document.querySelectorAll(
    ".flickbase__homebar-menu__icon"
  );

  const removeActiveIcon = () => {
    activeIconState.forEach((item) => {
      item.classList.remove("active_icon");
    });
  };

  const addActiveIcon = () => {
    activeIconState.forEach((item) => {
      item.classList.add("active_icon");
    });
  };

  const removeActiveState = () => {
    activeState.forEach((item) => {
      removeActiveIcon();
      item.classList.remove("active");
    });
  };

  activeState.forEach((item) => {
    item.addEventListener("click", () => {
      removeActiveState();
      addActiveIcon();
      item.classList.add("active");
    });
  });

  return (
    <div className="flickbase__homebar">
      <div className="flickbase__homebar-logo animated fadeInDown">
        <LogoIcon
          className="flickbase__homebar-logo__icon"
          color="#ff3c00"
          size={27}
        />
        <h2>FlickBase</h2>
      </div>

      <div className="flickbase__homebar-content">
        <div className="flickbase__homebar-menu">
          <div className="flickbase__homebar-menu__heading animated fadeInLeft" style={{animationDelay: ".15s"}}>
            <HomebarMenu color="#5c5c5c" size={16} />
            <h3 className="grey__text">Menu</h3>
          </div>
          <ul className="flickbase__homebar-menu__content">
            <li className="active flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '.35s'}}>
              <HomeIcon
                className="flickbase__homebar-menu__icon active_icon"
                size={20}
              />
              <p>Home</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '.55s'}}>
              <Discovery className="flickbase__homebar-menu__icon" size={20} />
              <p>Discovery</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '.75s'}}>
              <Community className="flickbase__homebar-menu__icon" size={20} />
              <p>Community</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '.95s'}}>
              <Subs className="flickbase__homebar-menu__icon" size={20} />
              <p>Subscriptions</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '1.15s'}}>
              <Playlist className="flickbase__homebar-menu__icon" size={20} />
              <p>Watchlist</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '1.35s'}}>
              <Community className="flickbase__homebar-menu__icon" size={20} />
              <p>Community</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '1.55s'}} id="mt">
              <Settings className="flickbase__homebar-menu__icon" size={20} />
              <p>Settings</p>
            </li>
            <li className="flickbase__homebar-menu__content_list-item animated fadeInLeft" style={{animationDelay: '1.75s'}}>
              <Logout className="flickbase__homebar-menu__icon" size={20} />
              <p>Logout</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Homebar;
