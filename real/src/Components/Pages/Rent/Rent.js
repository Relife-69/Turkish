import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Slider3 from "../../Slider/Slider3";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import axios from "axios";
import Buycard from "../../Card/BuyCard/Buycard";
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
import {
  CardContainer,
  SSlider,
  SliderContainer,
  Lbutton,
  Rbutton,
  ButtonText,
  TextContainer,
} from "../../Slider/StyledSlider";
import Pro1 from "../../Images/4.png";
import Pro2 from "../../Images/6.png";
import Pro3 from "../../Images/5.png";
import Pro4 from "../../Images/Rent.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";
import { FaAngleDown } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
const OdaSayısı = [
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
  "1",
  "2-3",
  "4-5",
  "5 - 8",
  "9 - 11",
  "12 - 16",
  "17 - 21",
];
const Daireninbulunduğukat = [
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
const BanyoSayısı = ["Yok", "1", "2", "3", "4", "Üzeri"];
const Balkon = ["Yok", "1", "2", "3", "4", "Üzeri"];
const Asansör = ["Evet", "Hayır"];
const Otopark = [
  "Seçenek Seç",
  "Açık Otopark",
  "Kapalı Otopark",
  "Açık Otopark + Kapalı Otopark",
  "Yok",
];
const Sitede = ["Evet", "Hayır"];
const Aidat = ["Var", "Yok"];
const Kullanım = ["Boş", "Kiracı Oturuyor", "Sahibi Oturuyor"];
const Kredi = ["Evet", "Hayır"];
const Tapu = [
  "Flat Ownership",
  "Floor Easement",
  "Detached Title Deed",
  "Share Title Deed",
  "Land Title Deed",
];
const Takas = ["Evet", "Hayır"];
const Elektrik = ["Evet", "Hayır"];
const Tesisat = ["Evet", "Hayır"];
const Doğalgaz = ["Evet", "Hayır"];
const Mutfak = ["Evet", "Hayır"];
const Duvarlarda = ["Evet", "Hayır"];
const EvBoyalı = ["Evet", "Hayır"];
const İç = ["Evet", "Hayır"];

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
const Rent = () => {
  const [cardsData, setCardsData] = useState([]);
  const productContainerRef = useRef(null);

  useEffect(() => {
    async function fetchAdvertisements() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.headers["content-type"].includes("application/json")) {
          const advertisements = response.data;

          // Transforming the data to match the required structure for the cards
          const transformedData = advertisements.map((ad) => ({
            Pic: ad.images[0]?.image || " ",
            Pic1: ad.images[1]?.image || " ",
            Name: ad.dynamic_attributes.title,
            PPrice: ad.dynamic_attributes.price,
            Beds: ad.dynamic_attributes.rooms,
            Washs: ad.dynamic_attributes.bathrooms,
            SqArea: ad.dynamic_attributes.area_sqft,
            PArea: ad.dynamic_attributes.neighborhood,
            PCity: ad.location,
            UpTime: ad.created_at,
            Href: `/singleproperty/${ad.id}`,
            isNew: ad.is_new, // Assuming there's a field to indicate if the ad is new
            isFeatured: ad.is_featured, // Assuming there's a field to indicate if the ad is featured
            Purpose: ad.purpose,
            Property_type: ad.property_type, // Including purpose to filter the cards later
          }));

          setCardsData(transformedData);
        } else {
          console.error("Expected JSON, but received HTML:", response.data);
        }
      } catch (error) {
        console.error("Error fetching advertisements:", error);
      }
    }

    fetchAdvertisements();
  }, []);

  const btnpressprev = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft -= width;
    }
  };

  const btnpressnext = () => {
    const width = productContainerRef.current?.clientWidth || 0;
    if (productContainerRef.current) {
      productContainerRef.current.scrollLeft += width;
    }
  };
  const [filters, setFilters] = useState({
    location: "İstanbul",
    rooms: "",
    building_age: "",
    floor_count: "",
    apartment_floor: "",
    heating_system: "",
    bathrooms: "",
    exchange: "",
    balcony: "",
    elevator: "",
    parking: "",
    in_complex: "",
    maintenance_fee: "",
    usage_status: "",
    credit_suitability: "",
    title_deed_status: "",
  });

  useEffect(() => {
    async function fetcFilterAdvertisements() {
      try {
        const response = await axios.get(
          "https://api.guvenlisatkirala.com/api/advertisements/",
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.headers["content-type"].includes("application/json")) {
          const advertisements = response.data;

          // Apply filters to the data
          const filteredAds = advertisements.filter((ad) => {
            const dynamicAttributes = ad.dynamic_attributes;
            return (
              ad.location === filters.location &&
              (filters.rooms
                ? dynamicAttributes.rooms === filters.rooms
                : true) &&
              (filters.building_age
                ? dynamicAttributes.building_age === filters.building_age
                : true) &&
              (filters.floor_count
                ? dynamicAttributes.floors === filters.floor_count
                : true) &&
              (filters.apartment_floor
                ? dynamicAttributes.floor_number === filters.apartment_floor
                : true) &&
              (filters.heating_system
                ? dynamicAttributes.heating_system === filters.heating_system
                : true) &&
              (filters.bathrooms
                ? dynamicAttributes.bathrooms === filters.bathrooms
                : true) &&
              (filters.exchange
                ? dynamicAttributes.swap === filters.exchange
                : true) &&
              (filters.balcony
                ? dynamicAttributes.balcony === filters.balcony
                : true) &&
              (filters.elevator
                ? dynamicAttributes.lift === filters.elevator
                : true) &&
              (filters.parking
                ? dynamicAttributes.car_park === filters.parking
                : true) &&
              (filters.in_complex
                ? dynamicAttributes.on_site === filters.in_complex
                : true) &&
              (filters.maintenance_fee
                ? dynamicAttributes.dues === filters.maintenance_fee
                : true) &&
              (filters.usage_status
                ? dynamicAttributes.using_status === filters.usage_status
                : true) &&
              (filters.credit_suitability
                ? dynamicAttributes.credit_eligibility ===
                  filters.credit_suitability
                : true) &&
              (filters.title_deed_status
                ? dynamicAttributes.title_deed === filters.title_deed_status
                : true)
            );
          });

          setCardsData(filteredAds);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }

    fetcFilterAdvertisements();
  }, [filters]);
  return (
    <>
      <Navbar />
      <ExtraFrame
        Contuct={Pro4}
        Head="Kiralık en iyi mülkü keşfedin"
        Para="Birkaç adımda mülkünüz için en iyi değeri elde edin"
      />
      <MainContainer>
        <Button2Container>
          <Button2>
            <Icon src={Pro1}></Icon>
            <Text2>Villa</Text2>
          </Button2>
          <Button2>
            <Icon src={Pro2}></Icon>
            <Text2>Arsa</Text2>
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
            <Select
              name="location"
              value={filters.location}
              onChange={(e) =>
                setFilters({ ...filters, location: e.target.value })
              }
            >
              {turkishCities.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="rooms"
              value={filters.rooms}
              onChange={(e) =>
                setFilters({ ...filters, rooms: e.target.value })
              }
            >
              {OdaSayısı.map((room) => (
                <Option key={room} value={room}>
                  {room}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="building_age"
              value={filters.building_age}
              onChange={(e) =>
                setFilters({ ...filters, building_age: e.target.value })
              }
            >
              {BinaYaşı.map((age) => (
                <Option key={age} value={age}>
                  {age}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="floor_count"
              value={filters.floor_count}
              onChange={(e) =>
                setFilters({ ...filters, floor_count: e.target.value })
              }
            >
              {BinadakiKatSayısı.map((count) => (
                <Option key={count} value={count}>
                  {count}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="apartment_floor"
              value={filters.apartment_floor}
              onChange={(e) =>
                setFilters({ ...filters, apartment_floor: e.target.value })
              }
            >
              {Daireninbulunduğukat.map((floor) => (
                <Option key={floor} value={floor}>
                  {floor}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="heating_system"
              value={filters.heating_system}
              onChange={(e) =>
                setFilters({ ...filters, heating_system: e.target.value })
              }
            >
              {Isıtmasistemi.map((system) => (
                <Option key={system} value={system}>
                  {system}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="bathrooms"
              value={filters.bathrooms}
              onChange={(e) =>
                setFilters({ ...filters, bathrooms: e.target.value })
              }
            >
              {BanyoSayısı.map((bath) => (
                <Option key={bath} value={bath}>
                  {bath}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="exchange"
              value={filters.exchange}
              onChange={(e) =>
                setFilters({ ...filters, exchange: e.target.value })
              }
            >
              {Takas.map((takas) => (
                <Option key={takas} value={takas}>
                  {takas}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="balcony"
              value={filters.balcony}
              onChange={(e) =>
                setFilters({ ...filters, balcony: e.target.value })
              }
            >
              {Balkon.map((balcony) => (
                <Option key={balcony} value={balcony}>
                  {balcony}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="elevator"
              value={filters.elevator}
              onChange={(e) =>
                setFilters({ ...filters, elevator: e.target.value })
              }
            >
              {Asansör.map((elevator) => (
                <Option key={elevator} value={elevator}>
                  {elevator}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="parking"
              value={filters.parking}
              onChange={(e) =>
                setFilters({ ...filters, parking: e.target.value })
              }
            >
              {Otopark.map((parking) => (
                <Option key={parking} value={parking}>
                  {parking}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="in_complex"
              value={filters.in_complex}
              onChange={(e) =>
                setFilters({ ...filters, in_complex: e.target.value })
              }
            >
              {Sitede.map((site) => (
                <Option key={site} value={site}>
                  {site}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="maintenance_fee"
              value={filters.maintenance_fee}
              onChange={(e) =>
                setFilters({ ...filters, maintenance_fee: e.target.value })
              }
            >
              {Aidat.map((fee) => (
                <Option key={fee} value={fee}>
                  {fee}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="usage_status"
              value={filters.usage_status}
              onChange={(e) =>
                setFilters({ ...filters, usage_status: e.target.value })
              }
            >
              {Kullanım.map((status) => (
                <Option key={status} value={status}>
                  {status}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="credit_suitability"
              value={filters.credit_suitability}
              onChange={(e) =>
                setFilters({ ...filters, credit_suitability: e.target.value })
              }
            >
              {Kredi.map((credit) => (
                <Option key={credit} value={credit}>
                  {credit}
                </Option>
              ))}
            </Select>
          </Selection>
          <Selection>
            <Select
              name="title_deed_status"
              value={filters.title_deed_status}
              onChange={(e) =>
                setFilters({ ...filters, title_deed_status: e.target.value })
              }
            >
              {Tapu.map((tapu) => (
                <Option key={tapu} value={tapu}>
                  {tapu}
                </Option>
              ))}
            </Select>
          </Selection>
        </SelectionContainer>
        {cardsData.some((card) => card.Purpose === "Kira") && (
          <TextContainer>
            <SliderContainer>
              <Lbutton onClick={btnpressprev}>
                <ButtonText>
                  <BiLeftArrowAlt />
                </ButtonText>
              </Lbutton>
              <SSlider ref={productContainerRef}>
                {cardsData
                  .filter((card) => card.Purpose === "Kira")
                  .map((card, index) => (
                    <CardContainer key={index}>
                      <Buycard
                        Pic={card.Pic}
                        Pic1={card.Pic1}
                        Name={card.Name}
                        PPrice={Number(card.PPrice).toLocaleString("tr-TR", {
                          style: "currency",
                          currency: "TRY",
                        })}
                        SqArea={card.SqArea}
                        Beds={card.Beds}
                        Washs={card.Washs}
                        PArea={card.PArea}
                        PCity={card.PCity}
                        UpTime={new Date(card.UpTime).toLocaleDateString(
                          "tr-TR",
                          {
                            day: "numeric",
                            month: "long",
                          }
                        )}
                        Href={card.Href}
                        isNew={card.isNew}
                        isFeatured={card.isFeatured}
                      />
                    </CardContainer>
                  ))}
              </SSlider>
              <Rbutton onClick={btnpressnext}>
                <ButtonText>
                  <BiRightArrowAlt />
                </ButtonText>
              </Rbutton>
            </SliderContainer>
          </TextContainer>
        )}
      </MainContainer>
      <Slider3 />
      <Slider3 />
      <Slider3 />
      <Footer />
    </>
  );
};

export default Rent;
