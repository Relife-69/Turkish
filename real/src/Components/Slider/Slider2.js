import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Buycard from "../Card/BuyCard/Buycard";
import {
  MainContainer,
  CardContainer,
  SSlider,
  SliderContainer,
  Lbutton,
  Rbutton,
  ButtonText,
  TextContainer,
  Heading,
  ButtonContainer,
  Button,
} from "./StyledSlider";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const Slider2 = () => {
  const [cardsData, setCardsData] = useState([]);
  const productContainerRef = useRef(null);

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.headers["content-type"].includes("application/json")) {
          const advertisements = response.data;

          // Transforming the data to match the required structure for the cards
          const transformedData = advertisements.map((ad) => ({
            Pic: ad.images[0]?.image || " ",
            Pic1: ad.images[1]?.image || " ",
            Name: ad.dynamic_attributes.title,
            PPrice: ad.dynamic_attributes.price,
            Beds: ad.dynamic_attributes.rooms,
            Washs: ad.dynamic_attributes.bathrooms,
            SqArea: ad.dynamic_attributes.area_sqft,
            PArea: ad.dynamic_attributes.neighborhood,
            PCity: ad.location,
            UpTime: ad.created_at,
            Href: `/singleproperty/${ad.id}`,
            isNew: ad.is_new, // Assuming there's a field to indicate if the ad is new
            isFeatured: ad.is_featured, // Assuming there's a field to indicate if the ad is featured
            Purpose: ad.purpose, // Including purpose to filter the cards later
          }));

          setCardsData(transformedData);
        } else {
          console.error("Expected JSON, but received HTML:", response.data);
        }
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    }

    fetchAdvertisements();
  }, []);

  const btnpressprev = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft += width;
    }
  };

  return (
    <MainContainer>
      {cardsData.some((card) => card.Purpose === "Satmak") && (
        <TextContainer>
          <SliderContainer>
            <Lbutton onClick={btnpressprev}>
              <ButtonText>
                <BiLeftArrowAlt />
              </ButtonText>
            </Lbutton>
            <SSlider ref={productContainerRef}>
              {cardsData
                .filter((card) => card.Purpose === "Satmak")
                .map((card, index) => (
                  <CardContainer key={index}>
                    <Buycard
                      Pic={card.Pic}
                      Pic1={card.Pic1}
                      Name={card.Name}
                      PPrice={Number(card.PPrice).toLocaleString("tr-TR", {
                        style: "currency",
                        currency: "TRY",
                      })}
                      SqArea={card.SqArea}
                      Beds={card.Beds}
                      Washs={card.Washs}
                      PArea={card.PArea}
                      PCity={card.PCity}
                      UpTime={new Date(card.UpTime).toLocaleDateString(
                        "tr-TR",
                        {
                          day: "numeric",
                          month: "long",
                        }
                      )}
                      Href={card.Href}
                      isNew={card.isNew}
                      isFeatured={card.isFeatured}
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
        </TextContainer>
      )}
    </MainContainer>
  );
};

export default Slider2;
