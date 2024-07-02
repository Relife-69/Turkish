import { useState, useEffect } from "react";
import axios from "axios";
import {
  MainContainer,
  TextContainer,
  Heading,
  Text,
  Button,
  Picture,
  ErrorMessage,
  SuccessMessage,
} from "./StyledEmail";
import EmailPic from "../../../Images/Email.png";

const Email = () => {
  const [emailFromAPI, setEmailFromAPI] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const fetchEmail = async () => {
      try {
        const url = "https://7ef3-103-26-82-46.ngrok-free.app/api/users/";
        const { data } = await axios.get(url);
        setEmailFromAPI(data.username); //
      } catch (error) {
        console.error("Error fetching email from API:", error);
        setError("Failed to fetch email from API.");
      }
    };

    fetchEmail();
  }, []);

  const handleVerifyEmail = async () => {
    try {
      const url = await axios.post(
        "https://7ef3-103-26-82-46.ngrok-free.app/api/email-verify/"
      );
      const { data: res } = await axios.post(url, { email: emailFromAPI });
      setMsg(res.message);
      alert("Email Verification sent to your Gamil");
    } catch (error) {
      console.error("Error verifying email:", error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred.");
      }
    }
  };

  return (
    <MainContainer>
      <TextContainer>
        <Heading>
          <span>Email </span>
          adresinizi doğrulayın
        </Heading>
        <Text>
          <span>{emailFromAPI} </span>
          adresini kullanıcı olarak girdiniz. Lütfen aşağıdaki butona tıklayarak
          bu e-posta adresini doğrulayın
        </Text>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        {msg && <SuccessMessage>{msg}</SuccessMessage>}
        <Button type="button" onClick={handleVerifyEmail}>
          Hesabınızı Doğrulayın
        </Button>
      </TextContainer>
      <Picture src={EmailPic} alt="EmailPic" />
    </MainContainer>
  );
};

export default Email;
