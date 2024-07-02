import React from "react";
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
} from "./StyledDashNav";
import { FaRegBell, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Profile from "../../Components/Images/AdminL.png";
import Web from "../../Components/Images/logo.png";

const DashNav = ({ toggleSideBar }) => {
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
            placeholder="Şehir veya bölgeye göre ara"
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
        <AdminIcon src={Profile} alt="Profile"></AdminIcon>
      </RightContainer>
    </Header>
  );
};

export default DashNav;
