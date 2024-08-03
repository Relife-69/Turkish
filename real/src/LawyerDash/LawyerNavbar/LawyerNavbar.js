import React, { useState, useEffect } from "react";
import {
  Header,
  LogoContainer,
  Logo,
  RightContainer,
  SearchContainer,
  SearchBar,
  SearchButton,
  BellIcon,
  AdminIcon,
  Humburger,
  UserMenu,
  DropdownMenu,
  DropdownItem,
} from "./StyledNavbar";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Profile from "../../Components/Images/AdminL.png";
import Web from "../../Components/Images/logo.png";
import { Link, useNavigate } from "react-router-dom";

const LawyerNavbar = ({ toggleSideBar }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [userRole, setUserRole] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

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
    <Header>
      <LogoContainer>
        <Logo src={Web}></Logo>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
      </LogoContainer>
      <RightContainer>
        <SearchContainer>
          <SearchBar
            type="text"
            placeholder="Şehir Veya Bölgeye Göre Arama Yapın"
            name="searchbar"
            className="search"
          ></SearchBar>
          <SearchButton>
            <FaSearch />
          </SearchButton>
        </SearchContainer>
        <BellIcon>
          <FaRegBell />
        </BellIcon>
        {isLoggedIn ? (
          <UserMenu onClick={toggleDropdown}>
            {username}
            {showDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
            <DropdownMenu showDropdown={showDropdown}>
              <DropdownItem>
                <Link to="/">Ana Sayfa</Link>
              </DropdownItem>
              <DropdownItem onClick={Log_Out}> Çıkış Yap </DropdownItem>
            </DropdownMenu>
          </UserMenu>
        ) : (
          <AdminIcon src={Profile} alt="Profile"></AdminIcon>
        )}
      </RightContainer>
    </Header>
  );
};

export default LawyerNavbar;
