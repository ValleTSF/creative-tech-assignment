import styled from "styled-components";

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
  background: ${(props) =>
    `linear-gradient(-30deg, #eeeeee 50%, ${props.color} 50%)`};
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 5%;
  border-radius: 20px;
  box-shadow: 0px 2px 5px #cfd0d1;
  width: 200px;
  height: 350px;
  margin: 30px;

  & h3 {
    font-family: "Karla", sans-serif;
  }
`;

export const CardPicture = styled.img`
  border-radius: 50%;
`;

export const ContactContainer = styled.div`
  flex-direction: row;
  display: flex;
  width: 30%;
  margin-top: 20px;
  justify-content: space-between;
`;

export const CardName = styled.h3`
  margin-bottom: 40px;
`;
