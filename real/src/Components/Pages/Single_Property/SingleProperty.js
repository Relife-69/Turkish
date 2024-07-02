import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContaniner,
  Image,
  ImageContainer,
  Image2,
  HeadingContainer,
  IconContainer,
  Icon,
  Head,
  IconText,
  Price,
  PriceContainer,
  IconImage,
  ExtraContainer,
  Pricetag,
  ComponentContain,
  SingleComponent,
  ComponentIcon,
  ComponentText,
  Main,
  Time,
  AreaContainer,
  AreaHeading,
  AreaText,
  DefText,
  DefinationContainer,
  DefHeading,
  MapContainer,
  MapIframe,
  Search,
  ButtonContainer,
  Button,
  ButtonIcon,
  ButtonText,
} from "./StyledSingleProperty";
import P0 from "../../Images/Main.png";
import P1 from "../../Images/Main1.png";
import P2 from "../../Images/Main2.png";
import P3 from "../../Images/Main3.png";
import P4 from "../../Images/Share.png";
import P5 from "../../Images/Call.png";
import P6 from "../../Images/Bed1.png";
import P7 from "../../Images/Wash1.png";
import P8 from "../../Images/Area1.png";
import LikeButton from "../../LikeButton/LikeButton";
import { RxHamburgerMenu } from "react-icons/rx";
import ExtraFrame3 from "../../Frames/ExtraFrame/ExtraFrame3";
import { BsHospital } from "react-icons/bs";
import { FaSchool } from "react-icons/fa6";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa6";
import {
  Component,
  Component1,
  ComponentContainer,
  Container,
  Heading,
  Text,
  Text2,
} from "../../Frames/ExtraFrame/StyledExtraFrame1";

const properties = [
  { label: "Konum", value: "Şehir İsmi", componentType: "Component" },
  { label: "Asansör", value: "Evet", componentType: "Component" },
  { label: "Net m2", value: "2 metre", componentType: "Component1" },
  { label: "Otopark", value: "Açık Otopark", componentType: "Component1" },
  { label: "Oda Sayısı", value: "1.5+1", componentType: "Component" },
  { label: "Sitede", value: "Evet", componentType: "Component" },
  { label: "Bina Yaşı", value: "0, 1", componentType: "Component1" },
  { label: "Aidat", value: "Evet", componentType: "Component1" },
  { label: "Binadaki kat sayısı", value: "2 ", componentType: "Component" },
  { label: "Kullanım durumu", value: "Boş", componentType: "Component" },
  {
    label: "Dairenin bulunduğu kat",
    value: "Giriş -3",
    componentType: "Component1",
  },
  { label: "Kredi uygunluğu", value: "HAYIR", componentType: "Component1" },
  { label: "Isıtma sistemi", value: "Doğal gaz", componentType: "Component" },
  { label: "Tapu durumu", value: "Tapu durumu", componentType: "Component" },
  { label: "Banyo sayısı", value: "3", componentType: "Component1" },
  { label: "Takas", value: "HAYIR", componentType: "Component1" },
  { label: "Balkon", value: "4", componentType: "Component" },
  {
    label: "Elektrik tesisatında, prizlerde, butonlarda sorun mu var?",
    value: "HAYIR",
    componentType: "Component",
  },
  {
    label: "Sıhhi tesisat, musluklar, su giderlerinde sorun mu var?",
    value: "Evet",
    componentType: "Component1",
  },
  {
    label: "Doğalgaz kesisatında, kombide veya fırında sorun mu var?",
    value: "Evet",
    componentType: "Component1",
  },
  {
    label: "Mutfak mobilyası, mutfak lavabosunda sorun mu Var?",
    value: "HAYIR",
    componentType: "Component",
  },
  {
    label: "Duvarlarda veya zeminlerde çatlak veya hasar var mı?",
    value: "HAYIR",
    componentType: "Component",
  },
  { label: "Ev boyalı mı?", value: "Evet", componentType: "Component1" },
  {
    label: "İç Kapı ve pencerelerde sorun mu var?",
    value: "Evet",
    componentType: "Component1",
  },
  { label: "Mahalle adı:", value: "Mahalle adı:", componentType: "Component" },
];

const SingleProperty = () => {
  return (
    <>
      <Navbar />
      <MainContaniner>
        <Main>
          <Image src={P0}></Image>
          <ImageContainer>
            <Image2 src={P1}></Image2>
            <Image2 src={P2}></Image2>
            <Image2 src={P3}></Image2>
          </ImageContainer>
          <HeadingContainer>
            <Head>İstanbul F-18'de Satılık 7 Marla Ev, İstanbul</Head>
          </HeadingContainer>
          <ExtraContainer>
            <PriceContainer>
              <Pricetag> ₺</Pricetag>
              <Price>50,0000</Price>
            </PriceContainer>
            <IconContainer>
              <Icon>
                <IconImage src={P4}></IconImage>
                <IconText>İlan sahibini ara</IconText>
              </Icon>
              <Icon>
                <IconImage src={P5}></IconImage>
                <IconText>İlanı paylaş</IconText>
              </Icon>
              <Icon>
                <LikeButton />
                <IconText>Favorilere ekle</IconText>
              </Icon>
              <Icon>
                <RxHamburgerMenu />
                <IconText>İlanı karşılaştırma listesine ekle</IconText>
              </Icon>
            </IconContainer>
          </ExtraContainer>
          <ComponentContain>
            <SingleComponent>
              <ComponentIcon src={P6}></ComponentIcon>
              <ComponentText>2</ComponentText>
            </SingleComponent>
            <SingleComponent>
              <ComponentIcon src={P7}></ComponentIcon>
              <ComponentText>2</ComponentText>
            </SingleComponent>
            <SingleComponent>
              <ComponentIcon src={P8}></ComponentIcon>
              <ComponentText>5 Marla</ComponentText>
            </SingleComponent>
          </ComponentContain>
          <Time>3 saat önce eklendi</Time>
          <AreaContainer>
            <AreaHeading>Durum</AreaHeading>
            <AreaText>Yepyeni</AreaText>
          </AreaContainer>
          <DefinationContainer>
            <DefHeading>Tanım</DefHeading>
            <DefText>
              Ev rahat bir sokakta, parka ve su filtreleme tesisine yakın.
              İstanbul Uluslararası Hastanesi arabayla 3 dakika uzaklıktadır.
            </DefText>
          </DefinationContainer>
        </Main>
        <Container>
          <Heading>İlan Bilgileri</Heading>
          <ComponentContainer>
            {properties.map((property, index) => {
              const ComponentType =
                property.componentType === "Component1"
                  ? Component1
                  : Component;
              return (
                <ComponentType key={index}>
                  <Text>{property.label}</Text>
                  <Text2>{property.value}</Text2>
                </ComponentType>
              );
            })}
          </ComponentContainer>
        </Container>
        <ExtraFrame3 />
        <Main>
          <Search>Konum ve yakındaki tesisler</Search>
          <ButtonContainer>
            <Button>
              <ButtonIcon>
                <FaBuilding />
              </ButtonIcon>
              <ButtonText>TÜM</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <FaSchool />
              </ButtonIcon>
              <ButtonText>Okullar</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <BsHospital />
              </ButtonIcon>
              <ButtonText>Hastaneler</ButtonText>
            </Button>
            <Button>
              <ButtonIcon>
                <IoRestaurantOutline />
              </ButtonIcon>
              <ButtonText>Restoranlar</ButtonText>
            </Button>
          </ButtonContainer>
          <MapContainer>
            <MapIframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12422.904120464987!2d35.24441127147063!3d38.88450960062937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x152b1e6055a09571%3A0x2ddd8337a07a4010!2sYemliha%2C%2038090%20Kocasinan%2FKayseri%2C%20T%C3%BCrkiye!5e0!3m2!1sen!2s!4v1717087062323!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </Main>
      </MainContaniner>
      <Footer />
    </>
  );
};

export default SingleProperty;
