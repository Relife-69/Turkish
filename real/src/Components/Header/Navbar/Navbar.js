// Navbar.js
import React, { useState } from "react";
import {
  NavbarContainer,
  NavMenuContainer,
  LogoContainer,
  Logo,
  NavMenu,
  NavList,
  Button1,
  NavLink,
  SearchContainer,
  Button,
  Input,
  SearchIcon,
  LastContainer,
  HumburgerCont,
} from "./StyledNavbar"; // Assuming StyledNavbar file is in the same directory
import Pic from "../../Images/logo.png";
import Humburger from "../../Images/hamburger.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  const navigate = useNavigate();

  const Sign_Up = () => {
    navigate("/signup");
  };
  const Sell = () => {
    navigate("/sell");
  };
  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={Pic} alt="Logo"></Logo>
          </Link>
        </LogoContainer>
        <SearchContainer>
          <Input
            type="search"
            placeholder="Şehir veya bölgeye göre ara"
            name="SearchEngine"
          />
          <Button1>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </Button1>
        </SearchContainer>
        <NavMenuContainer>
          <NavMenu showMenu={showMenu}>
            <NavList>
              <NavLink>
                <Link to="/buy" onClick={hideMenu}>
                  SATILIK
                </Link>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                <Link to="/rent" onClick={hideMenu}>
                  KİRALIK
                </Link>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                <Link to="/" onClick={hideMenu}>
                  REKLAM VER
                </Link>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                <Link to="/" onClick={hideMenu}>
                  YAPAY ZEKA MODELİ
                </Link>
              </NavLink>
            </NavList>
            <NavList>
              <NavLink>
                <Link to="/wanted" onClick={hideMenu}>
                  {" "}
                  YARDIM
                </Link>
              </NavLink>
            </NavList>
          </NavMenu>
        </NavMenuContainer>
        <LastContainer>
          <Button onClick={Sell}>ÜCRETSİZ REKLAM</Button>
          <Button onClick={Sign_Up}>Kayıt olmak</Button>
          <HumburgerCont src={Humburger} alt="Hamburger" onClick={toggleMenu} />
        </LastContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
