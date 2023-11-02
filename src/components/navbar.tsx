import { Link } from "react-router-dom";
import { useState } from "react";
import { TERipple } from "tw-elements-react";
import Socialbar from "./socialbar";

export default function Navbar() {
  const logo = require("../images/vickerylogo-grey-tran.png");

  const [status, setStatus] = useState(false);

  let linkTree = [
    { name: "HOME", path: "/" },
    { name: "CLASS SCHEDULE", path: "/schedule" },
    { name: "INSTRUCTORS", path: "/instructors" },
    { name: "GALLERY", path: "/gallery" },
    { name: "LOCATION", path: "/location" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  const toggleMenu = function () {
    status ? setStatus(false) : setStatus(true);
  };

  const arr = [1, 2, 3];

  return (
    <div className="navbar">
      <div className="logo-container flex-center">
        <img src={logo} alt="" />
      </div>
      <div className="burger-opacity">
        <div className="burger-container">
          <button
            className="burger-menu"
            onClick={toggleMenu}
            aria-controls="nav-links"
            aria-expanded="false"
          ></button>
        </div>
      </div>

      <ul className="nav-links" data-visible={`${status}`} onClick={toggleMenu}>
        {linkTree.map((el, inx) => {
          return (
            <Link className="nav-anchors" key={inx} to={el.path}>
              {el.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
