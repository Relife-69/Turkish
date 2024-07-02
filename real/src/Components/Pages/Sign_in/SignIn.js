import React, { useState, useEffect } from "react";
import axios from "axios";
import Pic from "../../Images/1.png";
import Pic2 from "../../Images/2.png";
import { useNavigate, Link } from "react-router-dom";
import {
  MainContainer,
  FormContainer,
  PictureContainer,
  Picture2,
  InputContainer,
  InputContain,
  Heading,
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
} from "./StyledSignin";
import Button from "../../Button/Button";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching user data...");
        const response = await axios.get(
          "https://1272-149-22-81-14.ngrok-free.app/api/users/"
        );
        console.log("User data fetched successfully:", response.data);
        setData(response.data);
      } catch (err) {
        console.error("Error fetching user data:", err);
      }
    };

    fetchData();
  }, []);

  const login = async (event) => {
    event.preventDefault();
    const user = {
      username: email,
      password,
    };

    console.log("Submitting user:", user);

    try {
      const loginResponse = await axios.post(
        "https://e984-103-26-82-46.ngrok-free.app/api/login/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("API Login Response:", loginResponse.data);

      if (loginResponse.data.token) {
        localStorage.setItem("user-info", JSON.stringify(loginResponse.data));
        console.log("User information stored in localStorage");

        // Fetch user details
        console.log("Fetching user details...");
        const userDetailsResponse = await axios.get(
          "https://1272-149-22-81-14.ngrok-free.app/api/users/",
          {
            headers: {
              Authorization: `Bearer ${loginResponse.data.token}`,
            },
          }
        );

        console.log("User Details Response:", userDetailsResponse.data);

        navigate("/");
      } else {
        console.error("Unexpected response format", loginResponse.data);
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
        <Heading>Yeni bir hesap oluştur</Heading>
        <form onSubmit={login}>
          <InputContainer>
            <InputContain
              type="email"
              placeholder="E-posta"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <InputContain
              type="password"
              placeholder="Şifre"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <CheckBoxContainer2>
              <Label1>
                <Link to="/forget">Şifrenizi mi unuttunuz?</Link>
              </Label1>
            </CheckBoxContainer2>
          </InputContainer>
          <Button btntype="Main" cb text="GİRİŞ YAPMAK" type="submit" />
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

export default Signin;
