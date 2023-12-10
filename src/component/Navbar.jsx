import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiAlignRight } from "react-icons/fi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="btn-navbar-heading">HIPHOPDOGE</div>
      <div className="navbarMenu">
        <Link
          to="home"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          Home
        </Link>

        <Link
          to="roadmap-main"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          Roadmap
        </Link>

        <Link
          to="tokenomics"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >

          Tocknomics
        </Link>

        <Link
          to="footer-icons"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="navbarMenuList"
        >
          
          Contact Us
        </Link>
      </div>
      <button className="navbarBtn">
        <FaRegCommentAlt className="navbarBtnImg" /> Join Telegram
      </button>

      <FiAlignRight
        className="mobMenu"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      />
      <div className="navMenu" style={{ display: showMenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Home
        </Link>

        <Link
          activeClass="active"
          to="roadmap-main"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          Roadmap
        </Link>

        <Link
          activeClass="active"
          to="tokenomics"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          
          Tocknomics
        </Link>

        <Link
          activeClass="active"
          to="footer-icons"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="listItem"
          onClick={() => {
            setShowMenu(false);
          }}
        >
          
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
