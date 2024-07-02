import React, { useState } from "react";
import axios from "axios";
import Pic from "../../Images/1.png";
import Pic2 from "../../Images/2.png";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  Picture2,
  InputContainer,
  StyledInput,
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
} from "./StyledLawyerSign";
import Button from "../../Button/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const LSign = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [barAssociationName, setBarAssociationName] = useState("");
  const [barAssociationRegistryNumber, setBarAssociationRegistryNumber] =
    useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [role, setRole] = useState("lawyer");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const luser = {
      first_name: firstName,
      last_name: lastName,
      username: email,
      address,
      district_city: city,
      password: password,
      confirm_password: confirmPassword,
      bar_association_name: barAssociationName,
      bar_association_registry_number: barAssociationRegistryNumber,
      phone_number: phoneNumber,
      accept_agreement: acceptAgreement,
      role,
    };

    console.log("Submitting user:", luser);

    try {
      const result = await axios.post(
        "https://1272-149-22-81-14.ngrok-free.app/api/lawyers/",
        luser,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("API Response:", result.data);

      if (result.data) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        console.log("User information stored in localStorage");
        navigate("/email");
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
            <Button fb text="Standart" />
          </Link>
          <Link to="/lsign">
            <Button
              fb
              btntype="Main"
              text="Avukat"
              value="lawyer"
              onClick={(e) => setRole(e.target.value)}
            />
          </Link>
        </ButtonContainer>

        <Heading>Yeni bir hesap oluştur</Heading>
        <form onSubmit={handleSubmit}>
          <InputContainer>
            <StyledInput
              type="text"
              placeholder="İsim"
              name="first_name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="Soyadı"
              name="last_name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <StyledInput
              type="email"
              placeholder="E-posta"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <StyledInput
              type="type"
              placeholder="Adres"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="İLÇE/ŞEHİR"
              name="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="Şifre"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <StyledInput
              type="password"
              placeholder="Şifreyi Onayla"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="Baro Adı"
              name="BarName"
              value={barAssociationName}
              onChange={(e) => setBarAssociationName(e.target.value)}
            />
            <StyledInput
              type="text"
              placeholder="Baro Sicil numarası"
              name="BarRegNumber"
              value={barAssociationRegistryNumber}
              onChange={(e) => setBarAssociationRegistryNumber(e.target.value)}
            />
            <StyledInput
              type="tel"
              placeholder="Telefon numarası"
              name="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </InputContainer>
          <CheckBoxContainer>
            <CheckBox
              type="checkbox"
              id="checkAccept"
              name="accept_agreement"
              checked={acceptAgreement}
              onChange={(e) => setAcceptAgreement(e.target.checked)}
            />
            <Label>
              Türkiye Barolar Birliğinden avukat olduğunuz onaylandıktan sonra
              cep telefonunuza ve e-mail adresinize mesaj gönderilecektir.
              Üyelik sözleşmesini okudum ve kabul ediyorum.
            </Label>
          </CheckBoxContainer>
          <Button btntype="Main" sb text="Hesap oluşturmak" type="submit" />
        </form>
        <Heading2>VEYA</Heading2>
      </FormContainer>
      <PictureContainer background={`url(${Pic2})`}>
        <LastContainer>
          <Picture2 src={Pic} alt="Name Logo" />
          <SecondInputCon>
            <SecondInputC
              type="text"
              placeholder="Kullanıcı Adı"
              name="username"
            />
            <SecondInputC type="email" placeholder="E-posta" name="email" />
            <SecondInputC type="password" placeholder="Şifre" name="password" />
          </SecondInputCon>
          <ButtonContainer2>
            <Button btntype="Main" tb text="Kayıt olmak" />
          </ButtonContainer2>
          <CheckBoxContainer>
            <CheckBox type="checkbox" name="rememberMe" />
            <Label>Beni hatırla?</Label>
          </CheckBoxContainer>
        </LastContainer>
      </PictureContainer>
    </MainContainer>
  );
};

export default LSign;
