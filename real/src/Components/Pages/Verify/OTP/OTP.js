import React from "react";
import {
  MainContainer,
  OTPContainer,
  OTPInput,
  Heading,
  TextContainer,
  Text1,
  Text2,
  Input,
  Button,
  Picture,
} from "./StyledOTP";
import OTPImage from "../../../Images/OTP.png";

const OTP = () => {
  return (
    <MainContainer>
      <OTPContainer>
        <Heading>OTP Doğrulaması</Heading>
        <TextContainer>
          <Text1>
            Aldığınız <span>OTP'</span>yi girin
          </Text1>
          <Text2>+1-xxxx-xxx-xxx</Text2>
        </TextContainer>
        <OTPInput>
          <Input
            type="tel"
            max={1}
            maxLength={1}
            placeholder="-"
            name="OTP"
          ></Input>
          <Input
            type="tel"
            max={1}
            maxLength={1}
            placeholder="-"
            name="OTP"
          ></Input>
          <Input
            type="tel"
            max={1}
            maxLength={1}
            placeholder="-"
            name="OTP"
          ></Input>
          <Input
            type="tel"
            max={1}
            maxLength={1}
            placeholder="-"
            name="OTP"
          ></Input>
        </OTPInput>
        <TextContainer>
          <Text1>OTP alınmadı</Text1>
          <Text1>
            <span>Yeniden gönder</span>
          </Text1>
        </TextContainer>
        <Button>Onaylayın</Button>
      </OTPContainer>
      <Picture src={OTPImage} alt="OTP"></Picture>
    </MainContainer>
  );
};

export default OTP;
