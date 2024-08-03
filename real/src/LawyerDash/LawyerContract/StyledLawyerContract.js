import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  background-color: #eef1f9;
  gap: 20px;
`;

export const CardContain = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 50px;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
export const Humburger = styled.div`
  font-size: 50px;
  color: white;
  display: none;
  @media (max-width: 800px) {
    display: flex;
    position: absolute;
    top: 8px;
    left: 20px;
  }
`;
export const Whatsapp = styled.img`
  width: 100px;
  height: 100px;
  position: fixed;
  right: 10px;
  bottom: 40px;
  text-align: end;
  align-items: end;
`;
export const NameHeading = styled.h1`
  font-size: 28px;
  font-weight: 600;
  span {
    color: #7b2cbf;
  }
`;
