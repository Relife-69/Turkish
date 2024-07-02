import React from "react";
import Navbar from "../../Header/Navbar/Navbar";
import Footer from "../../Footer/Footer";
import {
  MainContainer,
  StoryContainer,
  PicContainer,
  Image,
  RightContainer,
  Image2,
  Heading,
  Description,
} from "./StyledStory";
import Icon from "../../Images/Story.png";
import Back from "../../Images/Story1.png";
import ExtraFrame from "../../Frames/ExtraFrame/ExtraFrame";

const Story = () => {
  return (
    <>
      <Navbar />
      <ExtraFrame Contuct={Back} Head="BİZİM HİKAYEMİZ" Para="Hakkımızda" />
      <MainContainer>
        <StoryContainer>
          <PicContainer>
            <Image2 src={Icon}></Image2>
          </PicContainer>
          <RightContainer>
            <Heading>Vizyonumuz</Heading>
            <Description>
              LOGO hikayesi bir adamın vizyonuyla başladı. Bu, Şefik Ekber'indi.
              Türkiye gayrimenkul sektörünü dönüştürüp yükseltmeyi hayal
              ediyoruz en iyi uluslararası standartlara uygundur. 15 yılını bu
              sektörde geçirdikten sonra Akbar'ın sahip olduğu diğer başarıların
              yanı sıra emlak sektöründe çalışan İngiltere kredisine göre
              uluslararası olarak tamamlanan çok sayıda mega gayrimenkul projesi
              hem de Türkiye'de. Ekber, hayatını şekillendirmek için Türkiye'ye
              döndü görüş. Böylece yeni nesil gayrimenkul çözümleri LOGO
              yaratıldı Türkiye için platform. LOGO olarak kullanıcılara sürekli
              olarak sunmayı hedefliyoruz şeffaflığa ve profesyonelliğe dayalı
              gelişen hizmetler geri kalanın bir çentik üzerinde.
            </Description>
          </RightContainer>
        </StoryContainer>
        <StoryContainer>
          <RightContainer>
            <Heading>Şemsiyemiz</Heading>
            <Description>
              Türkiye'nin tahmini 1,2 trilyon dolarlık gayrimenkulünü dönüştürme
              arayışı Kesinlikle iddialı bir sektör ama LOGO bundan da
              çekinmiyor zorluklar. Akbar'ın gemiye aldığı ilk kişiler arasında
              şunlar vardı: Kreatif Direktör olarak katılan Farhan Javed ve Ürün
              Geliştirme Başkanı olarak katıldı.
            </Description>
          </RightContainer>
          <PicContainer>
            <Image src={Icon}></Image>
          </PicContainer>
        </StoryContainer>
        <StoryContainer>
          <PicContainer>
            <Image2 src={Icon}></Image2>
          </PicContainer>
          <RightContainer>
            <Heading>Sonuçlarımız</Heading>
            <Description>
              LOGO'nun temeli kapsamlı araştırmalar sonucunda atıldı
              Türkiye'deki gayrimenkul sektörünün dinamikleri. Amaç şuydu:
              güvenli ve şeffaf mülkiyet işlemleri sağlayan bir ürün geliştirmek
              ve sonuç odaklı karlı anlaşmalar. Ve bu nedenle logo.com şunun
              için yaratıldı: Gayrimenkul almak, satmak, kiralamak, yatırım
              yapmak veya geliştirmek isteyen her Türk.
            </Description>
          </RightContainer>
        </StoryContainer>
        <StoryContainer>
          <RightContainer>
            <Heading>LOGO Ailesi</Heading>
            <Description>
              Kendini adamış, coşkulu bir ekip olmadan başarı mümkün olmazdı
              profesyonellerden oluşan bir ekip olarak her alandan en iyi
              insanları bir araya getirdik. Ekip üyelerimizin her biri, bu
              şartların yerine getirilmesinde hayati bir rol oynamaktadır. LOGO
              rüyası, kolektif misyona inanan gerçek bir emlak devrimi.
              Pazarlama ekibimizden danışmanlarımıza, satış ekibimize kadar,
              tasarımcılar, kafemizdeki insanlar ve diğer herkes en iyi
              oyunlarını getiriyor nedenine.
            </Description>
          </RightContainer>
          <PicContainer>
            <Image src={Icon}></Image>
          </PicContainer>
        </StoryContainer>
        <StoryContainer>
          <PicContainer>
            <Image2 src={Icon}></Image2>
          </PicContainer>
          <RightContainer>
            <Heading>Öğle yemeği</Heading>
            <Description>
              Ve böylece 3...2...1...kalkış oldu! LOGO.com'a hoş geldiniz:
              eksiksiz bir kullanıcı Gayrimenkul satın almak, satmak, kiralamak
              veya incelemek isteyenler için deneyim Sadece birkaç tıklamayla
              geliştirme. En son gelişmeleri dikkatlice derleyip analiz ediyoruz
              sorunsuz işlemler sunar ve kolaylaştırır, böylece hiçbir zaman
              uğraşmanıza gerek kalmaz emlak yine sıkıntılı. Artık hikayemizi
              bildiğinize göre başlamaya hazır mısınız? aramanız?
            </Description>
          </RightContainer>
        </StoryContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Story;
