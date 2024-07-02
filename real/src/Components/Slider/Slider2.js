import React, { useRef } from "react";
import {
  MainContainer,
  CardContainer,
  SSlider,
  SliderContainer,
  Lbutton,
  Rbutton,
  ButtonText,
} from "./StyledSlider2";
import CardPic from "../Images/Buy.png";
import CardPic1 from "../Images/CardImage.png";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import Buycard from "../Card/BuyCard/Buycard";

const Slider2 = () => {
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
      Href: "/singleproperty",
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
      Href: "/rentsingleproperty",
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

  // Ref for the product container
  const productContainerRef = useRef(null);

  // Scroll to the previous set of products
  const btnpressprev = () => {
    const width = productContainerRef.current.clientWidth;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft -= width;
    }
  };

  // Scroll to the next set of products
  const btnpressnext = () => {
    const width = productContainerRef.current.clientWidth;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft += width;
    }
  };

  return (
    <MainContainer>
      <SliderContainer>
        <Lbutton onClick={btnpressprev}>
          <ButtonText>
            <BiLeftArrowAlt />
          </ButtonText>
        </Lbutton>
        <SSlider ref={productContainerRef}>
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
                Href={card.Href}
              />
            </CardContainer>
          ))}
        </SSlider>
        <Rbutton onClick={btnpressnext}>
          <ButtonText>
            <BiRightArrowAlt />
          </ButtonText>
        </Rbutton>
      </SliderContainer>
    </MainContainer>
  );
};

export default Slider2;
