import styled from "styled-components";

// Ana Konteyner Bileşeni
const MainContainer = styled.div`
  width: 340px;  // Genişlik
  display: flex;  // Flexbox düzeni
  height: 150vh;  // Yükseklik
  flex-direction: column;  // Dikey düzen
  justify-content: start;  // İçerik başlangıç hizasında
  align-items: start;  // Öğeler başlangıç hizasında
  padding-top: 15px;  // Üstten 15px boşluk
  gap: 15px;  // Öğeler arası 15px boşluk
  background-color: white;  // Arka plan rengi beyaz
  @media (max-width: 800px) {
    display: ${({ showSideBar }) => (showSideBar ? "flex" : "none")};  // showSideBar true ise flex, değilse none
    position: absolute;  // Konumlandırma mutlak
  }
  @media (max-width: 350px) {
    width: 300px;  // 350px'den küçük ekranlarda genişlik 300px
  }
`;

// Liste Konteyner Bileşeni
const ListContainer = styled.div`
  width: 280px;  // Genişlik
  min-height: 50px;  // Minimum yükseklik
  display: flex;  // Flexbox düzeni
  align-items: center;  // Öğeler ortada hizalanır
  justify-content: start;  // İçerik başlangıç hizasında
  font-size: 18px;  // Yazı boyutu
  font-weight: 500;  // Yazı kalınlığı
  margin: 0%;  // Margin sıfır
  gap: 5px;  // Öğeler arası 5px boşluk
  padding-left: 30px;  // Soldan 30px boşluk
  cursor: pointer;  // Fare imleci pointer olur
  color: black;  // Yazı rengi siyah
  text-decoration: none;  // Yazı dekorasyonu yok
  &:hover {
    background-color: #7b2cbf;  // Üzerine gelindiğinde arka plan rengi değişir
    color: white;  // Üzerine gelindiğinde yazı rengi beyaz olur
  }
  & > a {
    text-decoration: none;  // İçindeki a etiketleri için dekorasyon yok
  }
  @media (max-width: 350px) {
    width: 280px;  // 350px'den küçük ekranlarda genişlik 280px
    padding-left: 10px;  // Soldan 10px boşluk
  }
`;

// Liste 2 Konteyner Bileşeni
const List2Container = styled.div`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};  // showMenu true ise flex, değilse none
  flex-direction: column;  // Dikey düzen
  align-items: center;  // Öğeler ortada hizalanır
  justify-content: start;  // İçerik başlangıç hizasında
`;

// Liste Bileşeni
const List = styled.div`
  width: 270px;  // Genişlik
  min-height: 50px;  // Minimum yükseklik
  padding-left: 35px;  // Soldan 35px boşluk
  display: flex;  // Flexbox düzeni
  align-items: center;  // Öğeler ortada hizalanır
  justify-content: start;  // İçerik başlangıç hizasında
  font-size: 18px;  // Yazı boyutu
  font-weight: 500;  // Yazı kalınlığı
  cursor: pointer;  // Fare imleci pointer olur
  margin: 0%;  // Margin sıfır
  gap: 5px;  // Öğeler arası 5px boşluk
  color: black;  // Yazı rengi siyah
  &:hover {
    background-color: #7b2cbf;  // Üzerine gelindiğinde arka plan rengi değişir
    color: white;  // Üzerine gelindiğinde yazı rengi beyaz olur
    a {
      color: white;  // İçindeki a etiketlerinin rengi beyaz olur
    }
  }
  & > a {
    text-decoration: none;  // İçindeki a etiketleri için dekorasyon yok
  }
`;

// Sürükleme Aşağı Bileşeni
const DragDown = styled.div`
  font-size: 24px;  // Yazı boyutu
  display: flex;  // Flexbox düzeni
  align-items: center;  // Öğeler ortada hizalanır
  justify-content: center;  // İçerik ortada hizalanır
  font-weight: 600;  // Yazı kalınlığı
`;

// Bileşenleri dışa aktarma
export { MainContainer, ListContainer, List2Container, List, DragDown };
