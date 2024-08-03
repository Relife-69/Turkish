import React from "react";
import {
  MainContainer,
  Design,
  Card,
  PicContainer,
  Pic,
  Heading,
  Text,
  Button,
  Design2,
} from "./StyledHF2";
import Des1 from "../../../Images/D1.png";
import Des2 from "../../../Images/D2.png";
import C1 from "../../../Images/C1.png";
import C2 from "../../../Images/C2.png";
import C3 from "../../../Images/C3.png";
import { Link } from "react-router-dom";

const HF2 = () => {
  return (
    <MainContainer>
      <Design src={Des1}></Design>
      <Design2 src={Des2}></Design2>
      <Card>
        <PicContainer>
          <Pic src={C1}></Pic>
        </PicContainer>
        <Heading> DÜŞÜK EMLAK KOMİSYONLARI </Heading>
        <text> •	Emlak kiralamak veya satın almak için artık fahiş komisyon ödemek zorunda kalmayın </text>
        <text> •	Emlak alımında toplamda %0.8 ve kiralamada kira bedelinin toplamda %40’ını ödeyin </text>
      </Card>
      <Card>
        <PicContainer>
          <Pic src={C2}></Pic>
        </PicContainer>
        <Heading>HUKUKİ GÜVENCE</Heading>
        <text> •	Her ilanın bir avukatı vardır. Bu aynı zamanda her ilanın bilgilerinin doğruluğunun güvencesidir </text>
        <text> •	Tüm alım-satım ve kiralama işlemlerinde avukatlar her iki tarafın hakkını koruyacak sözleşmeler yapar </text>
      </Card>
      <Card>
        <PicContainer>
          <Pic src={C3}></Pic>
        </PicContainer>
        <Heading>YAPAY ZEKÂNIN ÜSTÜN GÜCÜ</Heading>
        <text> •	Dünya’nın en üstün yapay zeka sistemleriyle emlak işlemlerinizde güven, doğruluk ve verimlilik sağladık</text>
      </Card>
    </MainContainer>
  );
};

export default HF2;
