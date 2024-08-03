import React, { useState, useEffect, useRef } from "react";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
  Whatsapp,
  NameHeading,
} from "./StyledLawyerContract";
import axios from "axios";
import { Link } from "react-router-dom";
import LawyerNavbar from "../LawyerNavbar/LawyerNavbar";
import LawyerSidebar from "../LawyerSidebar/LawyerSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Whats from "../../Components/Images/whats.webp";
import { useNavigate } from "react-router-dom";

const LawyersContract = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");
  const userRole = localStorage.getItem("user-role");
  const [showSideBar, setShowSideBar] = useState(false);
  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };
  useEffect(() => {
    if (userRole !== "lawyer") {
      alert("Bu Sayfaya Erişim Hakkınız Yok");
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <LawyerNavbar />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <LawyerSidebar showSideBar={showSideBar} />
        <CardContainer>
          <NameHeading>
            Hoşgeldiniz sayın avukat <span> {username}</span>
          </NameHeading>
        </CardContainer>
        <Link to="https://wa.me/+905464200621" target="blank">
          <Whatsapp src={Whats} />
        </Link>
      </MainContainer>
    </>
  );
};

export default LawyersContract;
