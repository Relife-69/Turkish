import React, { useState } from "react";
import {
  MainCard,
  Imagecontainer,
  Image,
  Button,
  MiddleContainer,
  TextContainer,
  Heading,
  PriceContainer,
  PriceTag,
  Price,
  Time,
  Place,
  City,
  Components,
  Element,
  ElementIcon,
  ElementNumber,
} from "./StyledBuycard";
import Bed from "../../Images/Bed.png";
import Wash from "../../Images/Wash.png";
import Area from "../../Images/Area.png";
import { Link } from "react-router-dom";

const Buycard = ({
  Pic1,
  Pic,
  Name,
  PPrice,
  Beds,
  Washs,
  SqArea,
  PArea,
  PCity,
  UpTime,
  Href,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [Pic, Pic1];
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <MainCard>
      <Imagecontainer>
        <Image
          src={images[currentImageIndex]}
          alt="Default image"
          onMouseOver={nextImage}
          style={{ cursor: "pointer" }}
        />
      </Imagecontainer>
      <MiddleContainer>
        <TextContainer>
          <Heading>{Name}</Heading>
          <PriceContainer>
            <PriceTag>₺</PriceTag>
            <Price>{PPrice}</Price>
          </PriceContainer>
        </TextContainer>
        <Components>
          <Element>
            <ElementIcon src={Bed}></ElementIcon>
            <ElementNumber>{Beds}</ElementNumber>
          </Element>
          <Element>
            <ElementIcon src={Wash}></ElementIcon>
            <ElementNumber>{Washs}</ElementNumber>
          </Element>
          <Element>
            <ElementIcon src={Area}></ElementIcon>
            <ElementNumber>{SqArea}</ElementNumber>
          </Element>
        </Components>
        <Place>
          <City>{PArea},</City>
          <City>{PCity}</City>
        </Place>
        <Time>{UpTime}</Time>
      </MiddleContainer>
      <Link to={Href}>
        <Button>Mülkü Görüntüle</Button>
      </Link>
    </MainCard>
  );
};

export default Buycard;
