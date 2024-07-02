// StyledNavbar.js
import styled from "styled-components";

const NavbarContainer = styled.nav`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 5px;
`;

const LogoContainer = styled.div`
  width: 100px;
  height: 90px;
`;

const Logo = styled.img`
  height: 90px;
  width: 100px;
  cursor: pointer;
`;

const NavMenuContainer = styled.div``;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  gap: 15px;
  @media (max-width: 1100px) {
    flex-direction: ${({ showMenu }) => (showMenu ? "column" : "row")};
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    right: 0px;
    background: #eef1f9;
    padding: 20px 0px;
    top: 75px;
    width: 100%;
    z-index: 9999;
  }
`;

const NavList = styled.li`
  @media (max-width: 1100px) {
    border-bottom: 1px solid silver;
  }
`;

const NavLink = styled.a`
  a {
    text-decoration: none;
    color: black;
    font-size: 14px;
    font-weight: 600;
  }
`;

const SearchContainer = styled.div`
  width: 360px;
  height: 41px;
  display: flex;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Input = styled.input`
  width: 290px;
  padding: 5px 10px;
  height: 41px;
  background-color: whitesmoke;
  border: none;
  border-radius: 10px 0px 0px 10px;
  font-size: 14px;
  font-weight: 300;
  &:focus {
    outline: none;
  }
  &:active {
    outline: none;
  }

  &::placeholder {
    color: gray;
  }
`;

const Button1 = styled.button`
  width: 50px;
  height: 41px;
  border-radius: 0px 15px 15px 0px;
  border: none;
  background-color: #7b2cbf;
  color: white;
  position: relative;
  cursor: pointer;

  &:hover {
    background-color: #5a1f8d;
  }
`;

const SearchIcon = styled.i`
  font-size: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  max-width: 150px;
  padding: 7px;
  height: 41px;
  border-radius: 10px;
  border: 2px solid #7b2cbf;
  background-color: white;
  color: black;
  font-size: 14px;
  cursor: pointer;
  a {
    text-decoration: none;
  }

  &:hover {
    a {
      background-color: #7b2cbf;
      color: white;
    }
    background-color: #7b2cbf;
    color: white;
  }
  @media (max-width: 500px) {
    display: none;
  }
`;

const LastContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media (max-width: 500px) {
    gap: 0px;
  }
`;

const HumburgerCont = styled.img`
  display: none;

  @media (max-width: 1100px) {
    display: block;
    width: 50px;
    height: 40px;
  }
`;

export {
  NavbarContainer,
  NavMenuContainer,
  LogoContainer,
  Logo,
  NavMenu,
  Button1,
  NavList,
  NavLink,
  SearchContainer,
  Button,
  Input,
  SearchIcon,
  LastContainer,
  HumburgerCont,
};
