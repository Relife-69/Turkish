import React, { useState } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import {
  Button,
  Description1,
  Description2,
  Heading1,
  HeadingContainer,
  Lawyerflex,
  LeftContainer,
  Logo,
  Maincontainer,
  RightContainer,
  Search,
  SearchContainer,
  SearchIcon,
  SearchLawyer,
  Heading2,
  SearchInput,
  DropdownContainer,
  Option,
} from "./StyledHairLawyer";
import { FaSearch } from "react-icons/fa";
import Law from "../../Images/Lawyer.png";
import Law2 from "../../Images/flex.png";
import Banner from "../../Banner/Banner";

const HairLawyer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const options = ["George J.....", "Lawyer 1", "Lawyer 2", "Lawyer 3"];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <>
      <Banner />
      <Navbar />
      <Maincontainer>
        <LeftContainer>
          <Description1>
            SEÇTİĞİNİZ AVUKAT İLANINIZI ONAYLADIKTAN SONRA İLANININIZ
            YAYINLANACAKTIR.
          </Description1>
          <SearchLawyer>
            <Heading1>Bir Avukat Seçin</Heading1>
            <SearchContainer onClick={() => setIsOpen(!isOpen)}>
              <Logo src={Law}></Logo>
              <SearchInput
                type="text"
                value={selectedOption}
                placeholder="George J....."
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setSelectedOption(e.target.value);
                }}
                onFocus={() => setIsOpen(true)}
              />
              <FaSearch />
              {isOpen && (
                <DropdownContainer>
                  {filteredOptions.map((option, index) => (
                    <Option
                      key={index}
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </Option>
                  ))}
                </DropdownContainer>
              )}
            </SearchContainer>
          </SearchLawyer>
          <Button>TAMAMLA</Button>
        </LeftContainer>
        <RightContainer>
          <HeadingContainer>
            <Heading2>AVUKAT</Heading2>
            <Description2>
              İLANINIZIN YAYINLANMASI İÇİN SEÇTİĞİNİZ AVUKATIN ONAYLAMASI
              GEREKİR.
            </Description2>
          </HeadingContainer>
          <Lawyerflex src={Law2} />
        </RightContainer>
      </Maincontainer>
    </>
  );
};

export default HairLawyer;
