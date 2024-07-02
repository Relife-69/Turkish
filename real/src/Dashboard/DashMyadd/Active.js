import React, { useState, useEffect } from "react";
import {
  MainContainer,
  CardContain,
  CardContainer,
  Humburger,
} from "./StyledActive";
import Buycard from "../../Components/Card/BuyCard/Buycard";
import DashNav from "../DashNavbar/DashNav";
import DashSidebar from "../DashSidebar/DashSidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import axios from "axios";

const Active = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  const toggleSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          // "https://b074-103-191-122-108.ngrok-free.app/checkServer",
          "https://3675-156-146-51-75.ngrok-free.app/api/advertisements/",
          {
            headers: {
              "Content-Type": "application/json",
              "ngrok-skip-browser-warning": "any-value",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        console.log(response);
        // if (response.status === 200) {
        //   if (Array.isArray(response.data))
        //     //  {
        //     // const data = response.data.map((item) => ({
        //     //   Pic: item.images[0]?.image,
        //     //   Pic1: item.images[1]?.image,
        //     //   Name: item.dynamic_attributes.title,
        //     //   PPrice: item.dynamic_attributes.price,
        //     //   Beds: item.dynamic_attributes.rooms,
        //     //   Washs: item.dynamic_attributes.bathrooms,
        //     //   SqArea: item.dynamic_attributes.area_sqft,
        //     //   PArea: item.dynamic_attributes.floors,
        //     //   PCity: item.location,
        //     //   UpTime: item.created_at,
        //     // }));
        //     setCardsData(data);
        //   } else {
        //     console.error("API response data is not an array:", response.data);
        //   }
        // } else {
        //   console.error("Unexpected response status:", response.status);
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <DashNav />
      <MainContainer>
        <Humburger onClick={toggleSideBar}>
          <GiHamburgerMenu />
        </Humburger>
        <DashSidebar showSideBar={showSideBar} />
        <CardContain>
          {cardsData.map((card, index) => (
            <CardContainer key={index}>
              <Buycard
                Name={card.Name}
                PPrice={card.PPrice}
                SqArea={card.SqArea}
                Beds={card.Beds}
                Washs={card.Washs}
                PArea={card.PArea}
                PCity={card.PCity}
                UpTime={card.UpTime}
              />
            </CardContainer>
          ))}
        </CardContain>
      </MainContainer>
    </>
  );
};

export default Active;
