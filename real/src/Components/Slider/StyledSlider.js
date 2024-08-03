import styled from "styled-components";

// Genel Konteynerler
const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #eef1f9;
  padding: 30px 0px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  position: relative; // Label için
  padding: 10px;
`;

const SliderContainer = styled.div`
  overflow: hidden;
  padding: 20px;
  display: flex;
  gap: 15px; // Dört konteyneri aynı anda gösterecek şekilde ayarlandı
  max-width: 1400px;
  justify-content: center;
  align-items: center;
  position: relative; // Label için

  @media (max-width: 1400px) {
    max-width: 1000px;
    padding: 10px;
  }
  @media (max-width: 1000px) {
    max-width: 700px;
  }
  @media (max-width: 700px) {
    max-width: 500px;
  }
  @media (max-width: 500px) {
    width: 400px;
    gap: 10px; // Dört konteynerin ekranda görünmesini sağlayacak şekilde ayarlandı
  }
  @media (max-width: 400px) {
    width: 300px;
    gap: 10px; // Dört konteynerin ekranda görünmesini sağlayacak şekilde ayarlandı
  }
`;

// Label Bileşenleri
const Label = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #7b2cbf;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 14px;
`;

// Buton Bileşenleri
const Lbutton = styled.button`
  border: none;
  width: 40px; // Genişlik ayarlandı
  height: 40px; // Yükseklik ayarlandı
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1); // Hafif arka plan rengi
  border-radius: 0; // Köşesiz
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); // Hafif gölge
`;

const Rbutton = styled.button`
  border: none;
  width: 40px; // Genişlik ayarlandı
  height: 40px; // Yükseklik ayarlandı
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1); // Hafif arka plan rengi
  border-radius: 0; // Köşesiz
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2); // Hafif gölge
`;

const ButtonText = styled.p`
  font-size: 20px;
  width: 20px;
  cursor: pointer;
`;

const SSlider = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  display: flex;
  gap: 15px; // Dört konteynerin aynı anda görünmesini sağlayacak şekilde ayarlandı
  min-width: 1000px; // Ekranda dört konteynerin görünmesi için yeterli genişlik
  @media (max-width: 800px) {
    gap: 10px;
    min-width: 700px; // Ekranda dört konteynerin görünmesi için yeterli genişlik
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-weight: 600;
  padding-left: 85px;
  font-size: 22px;
  margin: 0%;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-left: 85px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 500px) {
    width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0%;
    text-align: center;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: white;
  color: black;
  &:hover {
    background-color: #7b2cbf;
    color: white;
    border: #7b2cbf;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 240px; // %20 küçültülmüş genişlik
  height: 160px; // %20 küçültülmüş yükseklik
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 160px; // %20 küçültülmüş yükseklik
  overflow: hidden;
  border-bottom: 1px solid #eee;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const PropertyTitle = styled.h2`
  font-size: 18px;
  margin: 0 0 10px;
  color: #333;
`;

const PropertyDetails = styled.p`
  font-size: 14px;
  color: #777;
`;

const Price = styled.p`
  font-size: 20px;
  color: #000;
  margin: 10px 0 0;
`;

const Date = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0 0;
`;

const Tag = styled.span`
  background-color: ${(props) => (props.primary ? "#f39c12" : "#e74c3c")};
  color: white;
  padding: 3px 7px;
  border-radius: 5px;
  font-size: 12px;
  margin-right: 5px;
`;

// Kullanım
export {
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
  Card,
  ImageContainer,
  Image,
  CardContent,
  PropertyTitle,
  PropertyDetails,
  Price,
  Date,
  Tag,
  Label,
};
