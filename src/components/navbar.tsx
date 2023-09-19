import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const logo = require("../images/vickerylogo.png");

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
      <div className="social-links flex-center">
        <a
          href="https://www.facebook.com/profile.php?id=100057636220585"
          className="fa fa-facebook"
        ></a>
        <a href="" className="fa fa-instagram"></a>
        <a href="" className="fa fa-google"></a>
      </div>

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
            <Link key={inx} to={el.path}>
              {el.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
