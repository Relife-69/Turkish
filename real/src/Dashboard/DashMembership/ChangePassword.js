import React from "react";
import DashSidebar from "../DashSidebar/DashSidebar";
import DashNav from "../DashNavbar/DashNav";
import {
  MainContainer,
  CardContain,
  PasswordContainer,
  DeviceContainer,
  HeadingContainer,
  LowerBody,
  PasswordField,
  PasswordInput,
  InputField,
  IconContainer,
  Button,
  Description,
  DevicesHeading,
  DevicesBox,
  Device,
  Button1,
  Devices,
  Textcontiner,
  Text,
  Detail,
  DetailContainer,
} from "./StyledChangePassword";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdDevices, MdOutlineSmartphone } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { FaComputer } from "react-icons/fa6";
import { BsFillLaptopFill } from "react-icons/bs";
const ChangePassword = () => {
  return (
    <>
      <DashNav />
      <MainContainer>
        <DashSidebar />
        <CardContain>
          <PasswordContainer>
            <HeadingContainer>
              Şifre değiştir
              <RiLockPasswordFill />
            </HeadingContainer>
            <LowerBody>
              <Description>
                Şifrenizi değiştirmek için lütfen aşağıdaki alanları doldurunuz.
                Şifreniz en az 8 karakter içermeli, şunları içermelidir: en az
                bir büyük harf, bir küçük harf, bir rakam ve bir özel karakter.
              </Description>
              <PasswordField>
                <PasswordInput>
                  <InputField
                    type="text"
                    placeholder="Mevcut Şifre"
                    name="old_password"
                    id="old_password"
                  />
                  <IconContainer>
                    <FaEye />
                  </IconContainer>
                </PasswordInput>
                <PasswordInput>
                  <InputField
                    type="text"
                    placeholder="Yeni Şifre"
                    name="new_password"
                    id="new_password"
                  />
                  <IconContainer>
                    <FaEye />
                  </IconContainer>
                </PasswordInput>
                <PasswordInput>
                  <InputField
                    type="text"
                    placeholder="Şifreyi Onayla"
                    name="confirm_password"
                    id="confirm_password"
                  />
                  <IconContainer>
                    <FaEye />
                  </IconContainer>
                </PasswordInput>
              </PasswordField>
              <Button>Şifre değiştir</Button>
            </LowerBody>
          </PasswordContainer>
          <DeviceContainer>
            <DevicesHeading>
              Cihazlarınız
              <MdDevices />
            </DevicesHeading>
            <DevicesBox>
              <Description>Cihazlarınız bu hesaba bağlı.</Description>
              <Button1>Tüm Cihazlardan Çıkış Yapın</Button1>
              <Devices>
                <Device>
                  <DetailContainer>
                    <BsFillLaptopFill />
                    <Textcontiner>
                      <Text>DELL 24 ”</Text>
                      <Detail>İstanbul , Türkiye 05 Haziran 2024, 06:30</Detail>
                    </Textcontiner>
                  </DetailContainer>
                  <ImExit />
                </Device>
                <Device>
                  <DetailContainer>
                    <MdOutlineSmartphone />
                    <Textcontiner>
                      <Text>DELL 24 ”</Text>
                      <Detail>İstanbul , Türkiye 05 Haziran 2024, 06:30</Detail>
                    </Textcontiner>
                  </DetailContainer>
                  <ImExit />
                </Device>
                <Device>
                  <DetailContainer>
                    <FaComputer />
                    <Textcontiner>
                      <Text>DELL 24 ”</Text>
                      <Detail>İstanbul , Türkiye 05 Haziran 2024, 06:30</Detail>
                    </Textcontiner>
                  </DetailContainer>
                  <ImExit />
                </Device>
                <Device>
                  <DetailContainer>
                    <BsFillLaptopFill />
                    <Textcontiner>
                      <Text>DELL 24 ”</Text>
                      <Detail>İstanbul , Türkiye 05 Haziran 2024, 06:30</Detail>
                    </Textcontiner>
                  </DetailContainer>
                  <ImExit />
                </Device>
              </Devices>
            </DevicesBox>
          </DeviceContainer>
        </CardContain>
      </MainContainer>
    </>
  );
};

export default ChangePassword;
