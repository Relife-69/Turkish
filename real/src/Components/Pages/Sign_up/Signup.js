import React, { useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  Picture2,
  InputContainer,
  InputContain,
  Heading,
  ButtonContainer,
  Heading2,
  SecondInputC,
  SecondInputCon,
  LastContainer,
  ButtonContainer2,
  CheckBoxContainer,
  CheckBox,
  Label,
  CheckBoxContainer2,
  Label1,
} from "./Styledsignup";
import Button from "../../Button/Button";
import { Link, useNavigate } from "react-router-dom";
import Pic from "../../Images/1.png";
import Pic2 from "../../Images/2.png";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [role, setRole] = useState("standard");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const user = {
      username: email,
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      password: password,
      confirm_password: confirmPassword,
      accept_agreement: acceptAgreement,
      role,
    };

    try {
      const result = await axios.post(
        "https://e984-103-26-82-46.ngrok-free.app/api/users/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("API Response:", result.data);

      if (result.data) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        console.log("User information stored in localStorage");
        navigate("/email"); // Redirect to email verification page after successful signup
      } else {
        console.error("Unexpected response format", result.data);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request data:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };

  return (
    <MainContainer>
      <FormContainer>
        <ButtonContainer>
          <Link to="/signup">
            <Button fb btntype="Main" text="Standart" />
          </Link>
          <Link to="/lsign">
            <Button fb text="Avukat" />
          </Link>
        </ButtonContainer>
        <Heading>Yeni bir hesap oluştur</Heading>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <InputContain
              required
              type="text"
              placeholder="İsim"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <InputContain
              required
              type="text"
              placeholder="Soyadı"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <InputContain
              required
              type="email"
              placeholder="E-posta"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputContain
              required
              type="password"
              placeholder="Şifre"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputContain
              required
              type="password"
              placeholder="Şifreyi Onayla"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <InputContain
              required
              type="tel"
              placeholder="Telefon numarası"
              name="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputContainer>
          <CheckBoxContainer2>
            <CheckBox
              required
              type="checkbox"
              id="checkAccept"
              name="accept_agreement"
              checked={acceptAgreement}
              onChange={(e) => setAcceptAgreement(e.target.checked)}
            />
            <Label>
              DİKKAT! Emlak danışmanları veya emlakçılar bu siteye üye
              olamazlar. Yayınlanan emlak ilanlarından herhangi biri Komisyon
              alamazsınız. Lütfen üyeliği okuyun
              <Label1> Anlaşma </Label1>
            </Label>
          </CheckBoxContainer2>
          <Button btntype="Main" sb text="Hesap oluşturmak" type="submit" />
        </form>
        <Heading2>VEYA</Heading2>
      </FormContainer>
      <PictureContainer background={`url(${Pic2})`}>
        <LastContainer>
          <Picture2 src={Pic} alt="Name Logo" />
          <SecondInputCon>
            <SecondInputC
              type="Name"
              placeholder="Beni hatırla?"
              name="Username"
            />
            <SecondInputC type="email" placeholder="E-posta" name="Email" />
            <SecondInputC type="password" placeholder="Şifre" name="Password" />
          </SecondInputCon>
          <ButtonContainer2>
            <Button btntype="Main" tb text="Kayıt olmak" />
          </ButtonContainer2>
          <CheckBoxContainer>
            <CheckBox type="checkbox" />
            <Label>Beni hatırla?</Label>
          </CheckBoxContainer>
        </LastContainer>
      </PictureContainer>
    </MainContainer>
  );
};

export default Signup;
