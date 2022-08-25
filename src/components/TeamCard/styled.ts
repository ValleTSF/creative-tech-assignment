import styled from "styled-components";

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
  background: linear-gradient(-30deg, #eeeeee 50%, #5a9c6c 50%);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 5%;
  border-radius: 20px;
  box-shadow: 0px 2px 5px #cfd0d1;
  width: 40px;
  height: 200px;

  & h3 {
    font-family: "Karla", sans-serif;
  }
`;

export const CardPicture = styled.img`
  z-index: 10;
  border-radius: 50%;
`;

export const Background = styled.div`
  z-index: 5;
  background-color: #ebeb;
  height: 50%;
  width: 100%;
`;

export const ContactContainer = styled.div`
  z-index: 10;
  flex-direction: row;
  display: flex;
  width: 40%;
  margin-top: 20px;
  justify-content: space-between;
`;

export const CardName = styled.h3`
  z-index: 10;
  margin-bottom: 40px;
`;
