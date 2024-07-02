import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Slider2 from "../../Slider/Slider2";
import {
  MainContainer,
  Text,
  ButtonContainer,
  Button,
  Button2Container,
  Button2,
  Icon,
  Text2,
  SelectionContainer,
  Selection,
  Select,
  Option,
  Drag,
  SearchContainer,
  SearchIcon,
  Search,
} from "./StyledRent";
import Pro1 from "../../Images/4.png";
import Pro2 from "../../Images/6.png";
import Pro3 from "../../Images/5.png";
import Pro4 from "../../Images/Rent.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const Rent = () => {
  return (
    <>
      <Navbar />
      <ExtraFrame
        Contuct={Pro4}
        Head="Kiralık en iyi mülkü keşfedin"
        Para="Birkaç adımda mülkünüz için en iyi değeri elde edin"
      />
      <MainContainer>
        <Text>Ne tür bir mülkünüz var?</Text>
        <ButtonContainer>
          <Button>yerleşim</Button>
          <Button>Komplo</Button>
          <Button>Reklam</Button>
        </ButtonContainer>
        <Button2Container>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Villa</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro2}></Icon>
            <Text2>Düz</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Konut</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>İş yeri</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro3}></Icon>
            <Text2>Rezidans</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Bina</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Müstakil Ev</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Yazlık</Text2>
          </Button2>
        </Button2Container>
        <SelectionContainer>
          <Selection>
            <Select>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
              <Option>Kiralık Konut</Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <SearchContainer>
            <Search
              type="search"
              placeholder="İl, ilçe, mahalle, proje, okul, metro....."
              name="search"
            />
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
          </SearchContainer>
          <Selection>
            <Select>
              <Option>Net Metrekare</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Fiyat</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Oda Sayısı</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Bina Yaşı</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Kat Sayısı</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Dairenin bulunduğu kat</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Isıtma sistemi</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Banyolar</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Balkon</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Asansör</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Otopark</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Sitede</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Aidat</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
          <Selection>
            <Select>
              <Option>Kullanım Durumu</Option>
              <Option></Option>
              <Option></Option>
              <Option></Option>
            </Select>
            <Drag>
              <FaAngleDown />
            </Drag>
          </Selection>
        </SelectionContainer>
      </MainContainer>
      <Slider2 />
      <Slider2 />
      <Slider2 />
      <Slider2 />
      <Footer />
    </>
  );
};

export default Rent;
