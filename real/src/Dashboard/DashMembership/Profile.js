import React from "react";
import DashNav from "../DashNavbar/DashNav";
import Prof from "../../Components/Images/Profile.png";
import DashSidebar from "../DashSidebar/DashSidebar";
import {
  MainContainer,
  CardContain,
  Heading,
  ProfileContainer,
  ProfilePic,
  NameContainer,
  Holder,
  Input1,
  Input2,
  Label,
  NameContainer2,
  Button,
} from "./StyledProfile";

const Profile = () => {
  return (
    <>
      <DashNav />
      <MainContainer>
        <DashSidebar />
        <CardContain>
          <Heading>Profili Düzenle</Heading>
          <ProfileContainer>
            <ProfilePic src={Prof} />
            <NameContainer>
              <Holder>
                <Label>İlk adı:</Label>
                <Input1
                  type="text"
                  name="first_name"
                  placeholder="Zana..."
                  id="first_name"
                />
              </Holder>
              <Holder>
                <Label>Soy isim:</Label>
                <Input1
                  type="text"
                  name="Second_name"
                  placeholder="Zana..."
                  id="second_name"
                />
              </Holder>
            </NameContainer>
            <NameContainer2>
              <Label>E-posta</Label>
              <Input2
                type="email"
                name="email"
                placeholder="zana@gmail.com..."
                id="second_name"
              />
            </NameContainer2>
            <NameContainer2>
              <Label>Adres</Label>
              <Input2
                type="text"
                name="address"
                placeholder="İstanbul F-18'de Satılık Villa"
                id="address"
              />
            </NameContainer2>
            <NameContainer>
              <Holder>
                <Label>İletişim Numarası</Label>
                <Input1
                  type="tel"
                  name="phone_number"
                  placeholder="+90....."
                  id="phone_number"
                />
              </Holder>
              <Holder>
                <Label>Durum</Label>
                <Input1
                  type="text"
                  name="situation"
                  placeholder="Turkey...."
                  id="situation"
                />
              </Holder>
            </NameContainer>
            <NameContainer>
              <Holder>
                <Label>Ülke</Label>
                <Input1
                  type="text"
                  name="country"
                  placeholder="Turkey...."
                  id="country"
                />
              </Holder>
              <Holder>
                <Label>Şehir</Label>
                <Input1
                  type="text"
                  name="city"
                  placeholder="Turkey...."
                  id="city"
                />
              </Holder>
            </NameContainer>
            <Button>KAYDET</Button>
          </ProfileContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default Profile;
