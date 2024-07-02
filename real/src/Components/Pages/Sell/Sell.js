import React, { useState, useRef } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import Pic from "../../Images/Sell.png";
import AreaC from "../../Images/Area1.png";
import BedC from "../../Images/Bed1.png";
import WashC from "../../Images/Wash1.png";
import axios from "axios";
import Banner from "../../Banner/Banner";
import { useNavigate } from "react-router-dom";
import {
  MainContainer,
  InputfieldContainer,
  Label,
  ButtonContainer,
  Button,
  ButtonIcon,
  ButtonText,
  SearchBarContainer,
  CitySearchBar,
  SearchIcon,
  Selection,
  Select,
  Option,
  Drag,
  Search,
  SubmitButton,
  OutputContainer,
  InputPictureContainer,
  InputPicture,
  InputIcon,
  InputImage,
  InputText,
  OuterContainerHeading,
  UpperContainer,
  DisplayContainer,
  PictureEdit,
  PictureTitle,
  Picturedeleat,
  PriceContrainer,
  Price,
  Type,
  BuildingComponetsContainer,
  BuildingComponet,
  ComponentsIcon,
  ComponentsText,
  ProperityTitle,
  TitleDisplay,
  Title,
  Description,
  Shadule,
  Time,
  HeadingTime,
  DescriptionTime,
  FeatureContainer,
  Feature,
  FeatureIcon,
  FeatureText,
  RightContainer,
  InputfieldContainer2,
  HeadingInput2,
  OptionDiv,
  InputOption,
  OptionDrag,
  OptionContainer,
  OptionLabel,
  OptionInput,
  OptionHolder,
  InputPictures,
  InputContainerPicture,
  Pricetag,
  PriceShow,
} from "./StyledSell";
import { GiFamilyHouse, GiSpookyHouse, GiWheat, GiHouse } from "react-icons/gi";
import { MdApartment, MdDeleteSweep } from "react-icons/md";
import {
  PiGarageDuotone,
  PiBuildingOfficeThin,
  PiFileImageFill,
} from "react-icons/pi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { BsFillHouseFill, BsImageFill, BsSearch } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";

const OdaSayısı = [
  "Seçenek Seç",
  "1+1",
  "1.5+1",
  "2+0",
  "2+1",
  "2+2",
  "3+0",
  "3+1",
  "3.5+1",
  "3+2",
  "4 + 0",
  "4+1",
  "4.5+1",
  "4+2",
  "4+3",
  "5+0",
  "5+1",
  "5+2",
  "5+3",
  "5+5",
  "6+1",
  "6+2",
  "6+3",
  "6+4",
  "7+1",
  "7+2",
];

const BinaYaşı = [
  "Seçenek Seç",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5-8",
  "9-11",
  "12-16",
  "17-21",
  "22-26",
  "Üstünde",
];
const BinadakiKatSayısı = [
  "Seçenek Seç",
  "1",
  "2-3",
  "4-5",
  "5 - 8",
  "9 - 11",
  "12 - 16",
  "17 - 21",
];
const Daireninbulunduğukat = [
  "Seçenek Seç",
  "Giriş -3",
  "Giriş -2",
  "Giriş -1",
  "Zemin kat",
  "Bahçe Katı",
  "Yüksek Giriş",
  "1. kat",
  "2'nci kat",
  "3. kat",
  "4. kat",
  "5. kat",
  "6. Kat",
  "7. Kat",
  "8. Kat",
  "9. Kat",
  "10. Kat",
  "11. Kat",
  "12. Kat",
  "13. Kat",
  "14. Kat",
  "15. Kat",
  "16. Kat",
  "17. Kat",
  "18. Kat",
  "19. Kat",
  "20. Kat",
  "21. Kat",
  "22. Kat",
  "23. Kat",
  "24. Kat",
  "25. Kat",
  "26. Kat",
  "27. Kat",
  "28. Kat",
  "29. Kat",
  "30. Katlar",
];
const Isıtmasistemi = [
  "Seçenek Seç",
  "Doğal gaz",
  "fancoil ünitesi",
  "elektrikli radyatör",
  "Güneş enerjisi",
  "Isı pompası",
  "Klima",
  "Kazan (Doğalgaz)",
  "Kombi (Elektrikli)",
  "Merkezi Sistem",
  "Merkez (Pay Ölçer)",
  "Soba",
  "şömine",
  "Yerden Isıtma",
  "Isıtma yok",
];
const BanyoSayısı = ["Seçenek Seç", "Yok", "1", "2", "3", "4", "Üzeri"];
const Balkon = ["Seçenek Seç", "Yok", "1", "2", "3", "4", "Üzeri"];
const Asansör = ["Seçenek Seç", "Evet", "Hayır"];
const Otopark = [
  "Seçenek Seç",
  "Açık Otopark",
  "Kapalı Otopark",
  "Açık Otopark + Kapalı Otopark",
  "Yok",
];
const Sitede = ["Seçenek Seç", "Evet", "Hayır"];
const Aidat = ["Seçenek Seç", "Var", "Yok"];
const Kullanım = ["Seçenek Seç", "Boş", "Kiracı Oturuyor", "Sahibi Oturuyor"];
const Kredi = ["Seçenek Seç", "Evet", "Hayır"];
const Tapu = [
  "Seçenek Seç",
  "Flat Ownership",
  "Floor Easement",
  "Detached Title Deed",
  "Share Title Deed",
  "Land Title Deed",
];
const Takas = ["Seçenek Seç", "Evet", "Hayır"];
const Elektrik = ["Seçenek Seç", "Evet", "Hayır"];
const Tesisat = ["Seçenek Seç", "Evet", "Hayır"];
const Doğalgaz = ["Seçenek Seç", "Evet", "Hayır"];
const Mutfak = ["Seçenek Seç", "Evet", "Hayır"];
const Duvarlarda = ["Seçenek Seç", "Evet", "Hayır"];
const EvBoyalı = ["Seçenek Seç", "Evet", "Hayır"];
const İç = ["Seçenek Seç", "Evet", "Hayır"];

const turkishCities = [
  "Seçenek Seç",
  "İl, İlçe,......",
  "Adana",
  "Adıyaman",
  "Afyonkarahisar",
  "Ağrı",
  "Amasya",
  "Ankara",
  "Antalya",
  "Artvin",
  "Aydın",
  "Balıkesir",
  "Bilecik",
  "Bingöl",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Çanakkale",
  "Çankırı",
  "Çorum",
  "Denizli",
  "Diyarbakır",
  "Edirne",
  "Elazığ",
  "Erzincan",
  "Erzurum",
  "Eskişehir",
  "Gaziantep",
  "Giresun",
  "Gümüşhane",
  "Hakkâri",
  "Hatay",
  "Isparta",
  "Mersin",
  "İstanbul",
  "İzmir",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kırklareli",
  "Kırşehir",
  "Kocaeli",
  "Konya",
  "Kütahya",
  "Malatya",
  "Manisa",
  "Kahramanmaraş",
  "Mardin",
  "Muğla",
  "Muş",
  "Nevşehir",
  "Niğde",
  "Ordu",
  "Rize",
  "Sakarya",
  "Samsun",
  "Siirt",
  "Sinop",
  "Sivas",
  "Tekirdağ",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Şanlıurfa",
  "Uşak",
  "Van",
  "Yozgat",
  "Zonguldak",
  "Aksaray",
  "Bayburt",
  "Karaman",
  "Kırıkkale",
  "Batman",
  "Şırnak",
  "Bartın",
  "Ardahan",
  "Iğdır",
  "Yalova",
  "Karabük",
  "Kilis",
  "Osmaniye",
  "Düzce",
];

const Sell = () => {
  const [purpose, setPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [buildingAge, setBuildingAge] = useState("");
  const [floors, setFloors] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [heatingSystem, setHeatingSystem] = useState("");
  const [balcony, setBalcony] = useState("");
  const [dues, setDues] = useState("");
  const [usingStatus, setUsingStatus] = useState("");
  const [creditEligibility, setCreditEligibility] = useState("");
  const [onSite, setOnSite] = useState("");
  const [carPark, setCarPark] = useState("");
  const [lift, setLift] = useState("");
  const [titleDeed, setTitleDeed] = useState("");
  const [rooms, setRooms] = useState("");
  const [swap, setSwap] = useState("");
  const [wiringProblem, setWiringProblem] = useState("");
  const [pipeLineProblem, setPipeLineProblem] = useState("");
  const [naturalGasProblem, setNaturalGasProblem] = useState("");
  const [kitchenProblem, setKitchenProblem] = useState("");
  const [crackWalls, setCrackWalls] = useState("");
  const [painted, setPainted] = useState("");
  const [damageDoors, setDamageDoors] = useState("");
  const [areaSqft, setAreaSqft] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [price, setPrice] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState([]);
  const [images, setImages] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [openMenu, setOpenMenu] = useState(null);
  const [inputValues, setInputValues] = useState({});
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = {
      purpose,
      property_type: propertyType,
      location,
      dynamic_attributes: {
        neighborhood,
        building_age: buildingAge,
        floors,
        floor_number: floorNumber,
        heating_system: heatingSystem,
        balcony,
        dues,
        using_status: usingStatus,
        credit_eligibility: creditEligibility,
        on_site: onSite,
        car_park: carPark,
        lift,
        title_deed: titleDeed,
        rooms,
        swap,
        wiring_problem: wiringProblem,
        pipe_line_problem: pipeLineProblem,
        natural_gas_problem: naturalGasProblem,
        kitchen_problem: kitchenProblem,
        crack_walls: crackWalls,
        painted,
        damage_doors: damageDoors,
        area_sqft: areaSqft,
        bathrooms,
        price,
        title,
        description,
        address,
      },
    };

    console.log("Submitting user:", user);

    try {
      const result = await axios.post(
        "https://6d18-139-135-43-130.ngrok-free.app/api/advertisements/",
        user,
        {
          headers: {
            "Content-Type": "application/json",
            "ngrok-skip-browser-warning": "any-value",
          },
        }
      );
      const advertisementId = result.data.id;
      const formData = new FormData();
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
      await axios.post(
        `https://6d18-139-135-43-130.ngrok-free.app/api/advertisements/${advertisementId}/images/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "ngrok-skip-browser-warning": "any-value",
          },
        }
      );

      console.log("API Response:", result.data);

      if (result.data) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        console.log("User information stored in localStorage");
        alert("Your data han been Stored,Please Select the Lawyer");
        navigate("/lawyer");
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

  const handleFileChange = ({ target: { files } }) => {
    const newImages = Array.from(files);
    const newFileNames = newImages.map((file) => file.name);
    setImages((prevImages) => [...prevImages, ...newImages]);
    setFileNames((prevFileNames) => [...prevFileNames, ...newFileNames]);
  };

  const handleDelete = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newFileNames = fileNames.filter((_, i) => i !== index);
    setImages(newImages);
    setFileNames(newFileNames);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  const selectedOptions = Object.keys(inputValues)
    .filter((key) => inputValues[key])
    .join(", ");

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setInputValues({
      ...inputValues,
      [name]: checked,
    });
  };
  return (
    <>
      <Banner />
      <Navbar />
      <ExtraFrame
        Contuct={Pic}
        Head="Ücretsiz İlan Verin"
        Para="Birkaç adımda mülkünüz için en iyi değeri elde edin"
      />
      <MainContainer>
        <InputfieldContainer>
          <Label>Ne yapmak istiyorsun?</Label>
          <ButtonContainer>
            <Button value="Satmak" onClick={() => setPurpose("Satmak")}>
              <ButtonIcon>
                <GiFamilyHouse />
              </ButtonIcon>
              <ButtonText>Satmak</ButtonText>
            </Button>
            <Button value="Kira" onClick={() => setPurpose("Kira")}>
              <ButtonIcon>
                <GiHouse />
              </ButtonIcon>
              <ButtonText>Kira</ButtonText>
            </Button>
          </ButtonContainer>
          <Label>Property Type</Label>
          <ButtonContainer>
            <Button value="Daire" onClick={() => setPropertyType("Daire")}>
              <ButtonIcon>
                <MdApartment />
              </ButtonIcon>
              <ButtonText>Daire</ButtonText>
            </Button>
            <Button value="Arsa" onClick={() => setPropertyType("Arsa")}>
              <ButtonIcon>
                <GiWheat />
              </ButtonIcon>
              <ButtonText>Arsa</ButtonText>
            </Button>
            <Button value="Villa" onClick={() => setPropertyType("Villa")}>
              <ButtonIcon>
                <GiSpookyHouse />
              </ButtonIcon>
              <ButtonText>Villa</ButtonText>
            </Button>
            <Button
              value="işyerleri"
              onClick={() => setPropertyType("işyerleri")}
            >
              <ButtonIcon>
                <PiGarageDuotone />
              </ButtonIcon>
              <ButtonText>İş yeri</ButtonText>
            </Button>
            <Button
              value="Residans"
              onClick={() => setPropertyType("Residans")}
            >
              <ButtonIcon>
                <PiBuildingOfficeThin />
              </ButtonIcon>
              <ButtonText>Rezidans</ButtonText>
            </Button>
            <Button value="Bina" onClick={() => setPropertyType("Bina")}>
              <ButtonIcon>
                <HiBuildingOffice2 />
              </ButtonIcon>
              <ButtonText>Bina</ButtonText>
            </Button>
            <Button
              value="Mustakil ev"
              onClick={() => setPropertyType("Mustakil ev")}
            >
              <ButtonIcon>
                <BsFillHouseFill />
              </ButtonIcon>
              <ButtonText>Müstakil Ev</ButtonText>
            </Button>
            <Button value="Yazilk" onClick={() => setPropertyType("Yazilk")}>
              <ButtonIcon>
                <GiHouse />
              </ButtonIcon>
              <ButtonText>Yazlık</ButtonText>
            </Button>
          </ButtonContainer>
          <Search>
            <Label>Konum:</Label>
            <SearchBarContainer>
              <Select
                value={location}
                onChange={(e) => {
                  handleCityChange(e);
                  setLocation(e.target.value);
                }}
                placeholder="İl, İlçe,......"
                name="CitySearchBar"
              >
                {turkishCities.map((city, index) => (
                  <Option key={index} value={city}>
                    {city}
                  </Option>
                ))}
              </Select>
              <SearchIcon>
                <BsSearch />
              </SearchIcon>
            </SearchBarContainer>
          </Search>
          <Search>
            <Label>Mahalle adı:</Label>
            <SearchBarContainer>
              <CitySearchBar
                type="text"
                placeholder="mahalle adı,......"
                name="CitySearchBar"
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
              />
              <SearchIcon>
                <BsSearch />
              </SearchIcon>
            </SearchBarContainer>
          </Search>
          <Search>
            <Label>Net m2:</Label>
            <SearchBarContainer>
              <CitySearchBar
                type="text"
                placeholder="05 M2"
                name="CitySearchBar"
                value={areaSqft}
                onChange={(e) => setAreaSqft(e.target.value)}
              />
              <SearchIcon>
                M2
                <FaAngleDown />
              </SearchIcon>
            </SearchBarContainer>
          </Search>
          <Search>
            <Label>Oda Sayısı:</Label>
            <Selection>
              <Select value={rooms} onChange={(e) => setRooms(e.target.value)}>
                {OdaSayısı.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Bina Yaşı:</Label>
            <Selection>
              <Select
                value={buildingAge}
                onChange={(e) => setBuildingAge(e.target.value)}
              >
                {BinaYaşı.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Binadaki Kat Sayısı:</Label>
            <Selection>
              <Select
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
              >
                {BinadakiKatSayısı.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Dairenin bulunduğu kat:</Label>
            <Selection>
              <Select
                value={floorNumber}
                onChange={(e) => setFloorNumber(e.target.value)}
              >
                {Daireninbulunduğukat.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Isıtma sistemi:</Label>
            <Selection>
              <Select
                value={heatingSystem}
                onChange={(e) => setHeatingSystem(e.target.value)}
              >
                {Isıtmasistemi.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Banyo Sayısı:</Label>
            <Selection>
              <Select
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              >
                {BanyoSayısı.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Balkon:</Label>
            <Selection>
              <Select
                value={balcony}
                onChange={(e) => setBalcony(e.target.value)}
              >
                {Balkon.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Asansör:</Label>
            <Selection>
              <Select value={lift} onChange={(e) => setLift(e.target.value)}>
                {Asansör.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Otopark:</Label>
            <Selection>
              <Select
                value={carPark}
                onChange={(e) => setCarPark(e.target.value)}
              >
                {Otopark.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Sitede:</Label>
            <Selection>
              <Select
                value={onSite}
                onChange={(e) => setOnSite(e.target.value)}
              >
                {Sitede.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Aidat:</Label>
            <Selection>
              <Select value={dues} onChange={(e) => setDues(e.target.value)}>
                {Aidat.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Kullanım Durumu:</Label>
            <Selection>
              <Select
                value={usingStatus}
                onChange={(e) => setUsingStatus(e.target.value)}
              >
                {Kullanım.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Kredi Uygunluğu:</Label>
            <Selection>
              <Select
                value={creditEligibility}
                onChange={(e) => setCreditEligibility(e.target.value)}
              >
                {Kredi.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Tapu Durumu:</Label>
            <Selection>
              <Select
                value={titleDeed}
                onChange={(e) => setTitleDeed(e.target.value)}
              >
                {Tapu.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Takas:</Label>
            <Selection>
              <Select value={swap} onChange={(e) => setSwap(e.target.value)}>
                {Takas.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>
              Elektrik Tesisatında, Prizlerde, Düğmelerde Sorun veya Eksiklik
              Var mı?
            </Label>
            <Selection>
              <Select
                value={wiringProblem}
                onChange={(e) => setWiringProblem(e.target.value)}
              >
                {Elektrik.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>
              Tesisat, Musluk, Su Giderlerinde Sorun veya Eksiklik Var mı?
            </Label>
            <Selection>
              <Select
                value={pipeLineProblem}
                onChange={(e) => setPipeLineProblem(e.target.value)}
              >
                {Tesisat.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>
              Doğalgaz tesisatında, kombide veya fırında herhangi bir sorun veya
              eksiklik var mı?
            </Label>
            <Selection>
              <Select
                value={naturalGasProblem}
                onChange={(e) => setNaturalGasProblem(e.target.value)}
              >
                {Doğalgaz.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>
              Mutfak Mobilyasında veya Mutfak Lavabosunda Herhangi Bir Sorun
              veya Eksiklik Var mı?
            </Label>
            <Selection>
              <Select
                value={kitchenProblem}
                onChange={(e) => setKitchenProblem(e.target.value)}
              >
                {Mutfak.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Duvarlarda veya Zeminlerde Çatlak veya Hasar Var mı?</Label>
            <Selection>
              <Select
                value={crackWalls}
                onChange={(e) => setCrackWalls(e.target.value)}
              >
                {Duvarlarda.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>Ev Boyalı mı?</Label>
            <Selection>
              <Select
                value={painted}
                onChange={(e) => setPainted(e.target.value)}
              >
                {EvBoyalı.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <Search>
            <Label>
              İç Kapı ve Pencerelerde Herhangi Bir Sorun veya Hasar Var mı?
            </Label>
            <Selection>
              <Select
                value={damageDoors}
                onChange={(e) => setDamageDoors(e.target.value)}
              >
                {İç.map((option, index) => (
                  <Option key={index} value={option}>
                    {option}
                  </Option>
                ))}
              </Select>
              <Drag>
                <FaAngleDown />
              </Drag>
            </Selection>
          </Search>
          <SubmitButton onClick={handleSubmit}>GÖNDERMEK</SubmitButton>
        </InputfieldContainer>
        <RightContainer>
          <OutputContainer>
            <OuterContainerHeading>Ön izleme</OuterContainerHeading>
            <InputPictureContainer>
              <InputContainerPicture>
                <InputPicture
                  type="file"
                  accept="image/*"
                  className="input-image"
                  hidden
                  multiple
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
                {images.length ? (
                  images.map((image, index) => (
                    <InputPictures key={index}>
                      <InputImage
                        src={URL.createObjectURL(image)}
                        alt={fileNames[index]}
                      />
                      <PictureEdit>
                        <PiFileImageFill />
                        <PictureTitle>{fileNames[index]}</PictureTitle>
                        <Picturedeleat>
                          <MdDeleteSweep onClick={() => handleDelete(index)} />
                        </Picturedeleat>
                      </PictureEdit>
                    </InputPictures>
                  ))
                ) : (
                  <InputIcon onClick={() => fileInputRef.current.click()}>
                    <BsImageFill />
                    <InputText>Lütfen mülkünüzü yükleyin</InputText>
                  </InputIcon>
                )}
              </InputContainerPicture>
            </InputPictureContainer>
            {/* <PictureEdit>
              <PiFileImageFill />
              <PictureTitle>{fileNames}</PictureTitle>
              <Picturedeleat>
                <MdDeleteSweep
                  onClick={() => {
                    setFileName("No Selected File");
                    setImage(null);
                  }}
                /> */}
            {/* </Picturedeleat>
            </PictureEdit> */}
            <PriceContrainer>
              <PriceShow>
                <Pricetag> ₺</Pricetag>
                <Price
                  type="tel"
                  placeholder="Price"
                  name="Price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </PriceShow>
              <Type>{propertyType}</Type>
            </PriceContrainer>
            <BuildingComponetsContainer>
              <BuildingComponet>
                <ComponentsIcon src={BedC}></ComponentsIcon>
                <ComponentsText>{rooms}</ComponentsText>
              </BuildingComponet>
              <BuildingComponet>
                <ComponentsIcon src={WashC}></ComponentsIcon>
                <ComponentsText>{bathrooms}</ComponentsText>
              </BuildingComponet>
              <BuildingComponet>
                <ComponentsIcon src={AreaC}></ComponentsIcon>
                <ComponentsText>{areaSqft}</ComponentsText>
              </BuildingComponet>
            </BuildingComponetsContainer>
            <ProperityTitle>Mülkiyet Başlığı</ProperityTitle>
            <TitleDisplay
              type="text"
              placeholder="Başlığınızı Girin"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Title>Tanım</Title>
            <TitleDisplay
              type="text"
              placeholder="Açıklama Yaz"
              name="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Title>Durum</Title>
            <TitleDisplay
              type="text"
              placeholder="Adres yaz"
              name="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {/* <Title>Özellikler</Title>
            <FeatureContainer>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
              <Feature>
                <FeatureIcon>
                  <FaKitchenSet />
                </FeatureIcon>
                <FeatureText>Özellik 1</FeatureText>
              </Feature>
            </FeatureContainer>
            <Title>Kullanılabilirlik Programı</Title>
            <Description>
              Tesis aşağıdaki slotlarda ziyaret edilebilir:
            </Description>
            <Shadule>
              <Time>
                <HeadingTime>Günler:</HeadingTime>
                <DescriptionTime>İstediğin zaman</DescriptionTime>
              </Time>
              <Time>
                <HeadingTime>Zaman:</HeadingTime>
                <DescriptionTime>
                  Başlangıç ​​Zamanı - Bitiş Zamanı
                </DescriptionTime>
              </Time>
            </Shadule> */}
          </OutputContainer>
          <InputfieldContainer2>
            <HeadingInput2>Genel Özellikler:</HeadingInput2>
            <Search>
              <Label>Ön:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="Ön:..."
                    className="select-input"
                    value={selectedOptions}
                    readOnly
                  ></InputOption>
                  <OptionDrag onClick={() => toggleMenu("Ön:")}>
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Ön:"}>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="kuzey"
                      checked={!!inputValues["kuzey"]}
                      onChange={handleCheckboxChange}
                    />
                    kuzey
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="kuzeydoğu"
                      checked={!!inputValues["kuzeydoğu"]}
                      onChange={handleCheckboxChange}
                    />
                    kuzeydoğu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="kuzeybatı"
                      checked={!!inputValues["kuzeybatı"]}
                      onChange={handleCheckboxChange}
                    />
                    Kuzey Batı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="güney"
                      checked={!!inputValues["güney"]}
                      onChange={handleCheckboxChange}
                    />
                    güney
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="güneydoğu"
                      checked={!!inputValues["güneydoğu"]}
                      onChange={handleCheckboxChange}
                    />
                    güneydoğu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="doğu"
                      checked={!!inputValues["doğu"]}
                      onChange={handleCheckboxChange}
                    />
                    doğu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="güneybatı"
                      checked={!!inputValues["güneybatı"]}
                      onChange={handleCheckboxChange}
                    />
                    güneybatı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput
                      type="checkbox"
                      name="batı"
                      checked={!!inputValues["batı"]}
                      onChange={handleCheckboxChange}
                    />
                    batı
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
            <Search>
              <Label>Dahili Özellikler:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="ADSLinternet......."
                    className="select-input"
                  ></InputOption>
                  <OptionDrag onClick={() => toggleMenu("Dahili Özellikler:")}>
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Dahili Özellikler:"}>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    ADSLinternet
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    fiber internet
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    hırsız alarmı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    akıllı ev
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Amerikan mutfağı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    yerleşik mutfak
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Şofben
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Alarm (Yangın)
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Amerikan Kapı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Mutfak (Ankastre)
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Marley
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Ankastre Fırın
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Barbekü
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Beyaz Eşya
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Alüminyum Doğrama
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Boyalı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Bulaşık Makinesi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Buzdolabı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Çamaşır Makinesi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Çamaşır Kurutma Makinesi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Çamaşır Odası
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Çelik Kapı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Duşakabin
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Duvar Kağıdı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Ebeveyn Banyosu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Firin
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Giyinme Odası
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Gömme Dolap
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Görüntülü Diafon
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Hilton Banyo
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Parke Zemin
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Isıcam
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Jakuzi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Mutfak Doğalgazı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kiler
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Klima
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Küvet
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Laminat Zemin
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Amerikan Mutfak
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Mobilya
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Alaturka Tuvalet
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kartonpiyer
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Panjur/Jaluzi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Intercom Sistemi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Mutfak (Laminat)
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    PVC Doğrama
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Seramik Zemin
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Set Üstü Ocak
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Spot Aydınlatma
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
            <Search>
              <Label>Harici Özellikler:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="Araç Şarj İstasyonu......."
                    className="select-input"
                  ></InputOption>
                  <OptionDrag onClick={() => toggleMenu("Harici Özellikler:")}>
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Harici Özellikler:"}>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Jeneratör
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Yangın Merdiveni
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Buhar Odası
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    24 Saat Güvenlik
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Araç Şarj İstasyonu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Hamam
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Hidrofor
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Isı Yalıtımı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kablo TV
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Apartman Görevlisi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kamera Sistemi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kreş
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Müstakil Havuzlu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Spor Alanı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Yüzme Havuzu (Açık)
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Sauna
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Siding
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Su Deposu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Yüzme Havuzu (Kapalı)
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Tenis Kortu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Uydu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Çocuk Oyun Parkı
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
            <Search>
              <Label>Etrafında neler var:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="Alışveriş Merkezi......."
                    className="select-input"
                  ></InputOption>
                  <OptionDrag
                    onClick={() => toggleMenu("Etrafında neler var:")}
                  >
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Etrafında neler var:"}>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Belediye
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Cami
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Cemevi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Denize Sıfır
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Alışveriş Merkezi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Eczane
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    İtfaiye
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Fuar
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Göle Sıfır
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Eğlence Merkezi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Hastane
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Havra
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Kilise
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Lise
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    İlkokul-Ortaokul
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Plaj
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Polis Merkezi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Semt Pazarı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Spor Salonu
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Şehir Merkezi
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Market
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Sağlık Ocağı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Park
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Üniversite
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
            <Search>
              <Label>Ulaşım Tesisi:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="Anayol......."
                    className="select-input"
                  ></InputOption>
                  <OptionDrag onClick={() => toggleMenu("Ulaşım Tesisi:")}>
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Ulaşım Tesisi:"}>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Anayol
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Avrasya Tüneli
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Boğaz Köprüleri
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Cadde
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Deniz Otobüsü
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Dolmuş
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    E-5
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    İskele
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Marmaray
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Metro
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Metrobüs
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Minibüs
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Otobüs Durağı
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Sahil
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Teleferik
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    TEM
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Tramvay
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Troleybüs
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Tren İstasyonu
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
            <Search>
              <Label>Daire Görünümü:</Label>
              <OptionHolder>
                <OptionDiv>
                  <InputOption
                    type="text"
                    placeholder="Boğaz......."
                    className="select-input"
                  ></InputOption>
                  <OptionDrag onClick={() => toggleMenu("Daire Görünümü:")}>
                    <FaAngleDown />
                  </OptionDrag>
                </OptionDiv>
                <OptionContainer showMenu={openMenu === "Daire Görünümü:"}>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Boğaz
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Deniz
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Doğa
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Göl
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Havuz
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Şehir
                  </OptionLabel>
                  <OptionLabel>
                    <OptionInput type="checkbox" />
                    Park & Yeşil Alan
                  </OptionLabel>
                </OptionContainer>
              </OptionHolder>
            </Search>
          </InputfieldContainer2>
        </RightContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Sell;
