import React from "react";
import DashNav from "../DashNavbar/DashNav";
import { MainContainer, CardContain, CardContainer } from "./StyledDelete";
import DashSidebar from "../DashSidebar/DashSidebar";
import Buycard from "../../Components/Card/BuyCard/Buycard";
import CardPic from "../../Components/Images/Buy.png";
import CardPic1 from "../../Components/Images/CardImage.png";

const Delete = () => {
  const cardsData = [
    {
      Pic: CardPic,
      Pic1: CardPic1,
      Name: "Villa Boğaz",
      PPrice: "50,000",
      Beds: "2",
      Washs: "2",
      SqArea: "7 Marla",
      PArea: "1-10",
      PCity: "Istanbul",
      UpTime: "3 saat önce eklendi",
    },
    {
      Pic: CardPic,
      Pic1: CardPic1,
      Name: "Villa Boğaz",
      PPrice: "50,000",
      Beds: "2",
      Washs: "2",
      SqArea: "7 Marla",
      PArea: "1-10",
      PCity: "Istanbul",
      UpTime: "3 saat önce eklendi",
    },
    {
      Pic: CardPic,
      Pic1: CardPic1,
      Name: "Villa Boğaz",
      PPrice: "50,000",
      Beds: "2",
      Washs: "2",
      SqArea: "7 Marla",
      PArea: "1-10",
      PCity: "Istanbul",
      UpTime: "3 saat önce eklendi",
    },
  ];
  return (
    <>
      <DashNav />
      <MainContainer>
        <DashSidebar />
        <CardContain>
          {cardsData.map((card, index) => (
            <CardContainer key={index}>
              <Buycard
                Pic={card.Pic}
                Pic1={card.Pic1}
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

export default Delete;
