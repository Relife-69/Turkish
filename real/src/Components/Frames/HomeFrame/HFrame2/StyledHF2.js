import styled from "styled-components";

// Ana kapsayıcı div, sayfanın tamamına yayılır ve esnek düzen kullanır
const MainContainer = styled.div`
  background-color: #eef1f9; // Arka plan rengi
  display: flex; // Esnek düzen kullanımı
  justify-content: center; // İçeriği yatayda ortalar
  width: 100%; // Genişliği %100 yapar
  min-height: 400px; // Minimum yüksekliği 800px yapar
  align-items: center; // İçeriği dikeyde ortalar
  position: relative; // Konumlandırmayı göreceli yapar
  flex-wrap: wrap; // İçeriği satırlara sarar
  gap: 50px; // Kartlar arasındaki boşluğu artırır
  padding: 3px 0px; // Üst ve alt boşluğu %70 azaltarak ekler (10px * 0.3)
`;

// Sol alttaki tasarım resmi için stil
const Design = styled.img`
  width: 290px; // Genişlik
  height: 290px; // Yükseklik
  position: absolute; // Mutlak konumlandırma
  bottom: 0px; // Alt kenardan sıfır piksel yukarıda
  left: 10%; // Sol kenardan %13 uzaklıkta
  @media (max-width: 400px) {
    // Ekran genişliği 400px'den küçükse
    width: 250px; // Genişliği 250px yap
    height: 250px; // Yüksekliği 250px yap
  }
`;

// Sağ üstteki tasarım resmi için stil
const Design2 = styled.img`
  width: 290px; // Genişlik
  height: 290px; // Yükseklik
  position: absolute; // Mutlak konumlandırma
  right: 13%; // Sağ kenardan %13 uzaklıkta
  top: 0px; // Üst kenardan sıfır piksel aşağıda
  @media (max-width: 400px) {
    // Ekran genişliği 400px'den küçükse
    width: 250px; // Genişliği 250px yap
    height: 250px; // Yüksekliği 250px yap
  }
`;

// Kart bileşeni için stil
const Card = styled.div`
  width: 300px; // Genişlik
  min-height: 300px; // Minimum yükseklik
  background-color: white; // Arka plan rengi beyaz
  display: flex; // Esnek düzen kullanımı
  flex-direction: column; // Esnek öğeleri dikey hizala
  align-items: center; // Öğeleri yatayda ortalar
  justify-content: end; // İçeriği dikeyde ortalar
  position: relative; // Göreceli konumlandırma
  border: none; // Kenarlık yok
  border-radius: 15px; // Kenarları yuvarla
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.3); // Gölge efekti
  gap: 10px; // Öğeler arasındaki boşluk
  overflow: hidden;
  padding: 15px; // Taşmayı engelle
  transition: transform 0.3s ease; // Geçiş efekti
  &:hover {
    // Üzerine gelindiğinde
    transform: scale(1.2); // %15 büyüt
  }
  @media (max-width: 400px) {
    // Ekran genişliği 400px'den küçükse
    width: 250px; // Genişliği 250px yap
  }
`;

// Resim kapsayıcısı için stil
const PicContainer = styled.div`
  position: absolute; // Mutlak konumlandırma // Soldan sıfır piksel
  width: 100%; // Genişliği %100 yap
  height: 100%; // Yüksekliği %100 yap
  overflow: hidden; // Taşmayı engelle
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: start;
`;

// Resim için stil
const Pic = styled.img`
  width: 50%; // Genişlik %100
  height: 50%; // Yükseklik %100 // Resmi kapsama ve kesme
  opacity: 0.5; // %60 opaklık
`;

// Başlık için stil
const Heading = styled.h1`
  max-width: 240px; // Maksimum genişlik
  font-size: 16px; // Yazı boyutu
  font-weight: 600; // Yazı kalınlığı
  margin: 3%; // Marjini %70 azaltarak ekler (10% * 0.3)
  position: relative; // Göreceli konumlandırma
  z-index: 1; // Z-index ile önde olmasını sağla
  text-align: center; // Yazıyı ortala
`;

// Metin için stil
const Text = styled.p`
  max-width: 200px;
  padding: 15px; // Maksimum genişlik
  font-size: 10px; // Yazı boyutu
  font-weight: 400; // Yazı kalınlığı
  text-align: center; // Yazıyı ortala
  margin: 3%; // Marjini %70 azaltarak ekler (10% * 0.3)
  position: relative; // Göreceli konumlandırma
  z-index: 1; // Z-index ile önde olmasını sağla
`;

// Buton için stil
const Button = styled.button`
  max-width: 220px; // Maksimum genişlik
  padding: 3px 6px; // İç boşlukları %70 azaltarak ekler (10px 20px * 0.3)
  font-size: 14px; // Yazı boyutu
  font-weight: 700; // Yazı kalınlığı
  background-color: #7b2cbf; // Arka plan rengi
  color: white; // Yazı rengi beyaz
  border: none; // Kenarlık yok
  border-radius: 5px; // Kenarları yuvarla
  cursor: pointer; // İmleç tipi
  position: relative; // Göreceli konumlandırma
  z-index: 1; // Z-index ile önde olmasını sağla
`;

export {
  MainContainer,
  Design,
  Design2,
  Card,
  PicContainer,
  Pic,
  Heading,
  Text,
  Button,
};
