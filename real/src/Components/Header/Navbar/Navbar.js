import React, { useState, useEffect } from "react";
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
  UserMenu,
  DropdownMenu,
  DropdownItem,
  Button2,
} from "./StyledNavbar"; // Assuming StyledNavbar file is in the same directory
import Pic from "../../Images/logo.png";
import Humburger from "../../Images/hamburger.png";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  const Sign_up = () => {
    navigate("/signup");
  };

  const Sell = () => {
    navigate("/sell");
  };

  const Log_Out = () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("username");
    localStorage.removeItem("user-role");
    setIsLoggedIn(false);
    setUsername("");
    setUserRole("");
    navigate("/");
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const token = localStorage.getItem("access-token");
    const user = localStorage.getItem("username");
    const role = localStorage.getItem("user-role");
    if (token) {
      setIsLoggedIn(true);
      setUsername(user);
      setUserRole(role);
    }
  }, []);

  return (
    <>
      <NavbarContainer>
        <LogoContainer>
          <Link to="/">
            <Logo src={Pic} alt="Logo" />
          </Link>
        </LogoContainer>
        <SearchContainer>
          <Input
            type="search"
            placeholder="Şehir Veya Bölgeye Göre Arama Yapın"
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
              <NavLink as={Link} to="/buy" onClick={hideMenu}>
                SATILIK
              </NavLink>
            </NavList>
            <NavList>
              <NavLink as={Link} to="/rent" onClick={hideMenu}>
                KİRALIK
              </NavLink>
            </NavList>
            <NavList>
              <NavLink as={Link} to="/trust" onClick={hideMenu}>
                YAPAY ZEKA MODELLERİMİZ
              </NavLink>
            </NavList>
            <NavList>
              <NavLink as={Link} to="/wanted" onClick={hideMenu}>
                DESTEK
              </NavLink>
            </NavList>
            <Button2 onClick={Sell}>ÜCRETSİZ İLAN VERİN</Button2>
            <Button2 onClick={Sign_up}>ÜYE OLUN</Button2>
          </NavMenu>
        </NavMenuContainer>
        <LastContainer>
          <Button onClick={Sell}>ÜCRETSİZ İLAN VERİN</Button>
          {isLoggedIn ? (
            <UserMenu onClick={toggleDropdown}>
              {username}
              {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <DropdownMenu showDropdown={showDropdown}>
                <DropdownItem>
                  {userRole === "admin" && (
                    <Link to="/approvedlwayer">Admin Dashboard</Link>
                  )}
                  {userRole === "lawyer" && (
                    <Link to="/lawyercontracts">Lawyer Dashboard</Link>
                  )}
                  {userRole === "standard" && (
                    <Link to="/allad">Benim Kişisel Sayfam</Link>
                  )}
                </DropdownItem>
                <DropdownItem onClick={Log_Out}>Çıkış Yap</DropdownItem>
              </DropdownMenu>
            </UserMenu>
          ) : (
            <Button onClick={Sign_up}>ÜYE OLUN</Button>
          )}
          <HumburgerCont src={Humburger} alt="Hamburger" onClick={toggleMenu} />
        </LastContainer>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
