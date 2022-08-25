import styled from "styled-components";

export const CardContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

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
  @media (max-width: 768px) {
    width: 150px;
    height: 260px;
  }

  & h3 {
    font-family: "Karla", sans-serif;
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  & p {
    font-family: "Lato", sans-serif;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;

export const Location = styled.p`
  color: #292929;
  opacity: 0.6;
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
  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const CardName = styled.h3`
  margin-bottom: 40px;
`;
