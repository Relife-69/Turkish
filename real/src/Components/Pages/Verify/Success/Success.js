import React from "react";
import {
  Maincontainer,
  TextContainer,
  TextContainer2,
  Text,
  Heading,
  Button,
  Picture,
} from "./StyledSuccess";
import Verify from "../../../Images/Verified.png";

const Success = () => {
  return (
    <Maincontainer>
      <TextContainer>
        <TextContainer2>
          <Heading>Verification Successful</Heading>
          <Text>Hesabınızı başarıyla doğruladınız</Text>
        </TextContainer2>
        <Button>Tamamlamak</Button>
      </TextContainer>
      <Picture src={Verify} alt="Verify"></Picture>
    </Maincontainer>
  );
};

export default Success;
