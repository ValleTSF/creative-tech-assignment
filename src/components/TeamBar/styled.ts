import styled from "styled-components";

export const BarContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Karla:wght@700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
  background: ${(props) =>
    `linear-gradient(-30deg, #eeeeee 80%, ${props.color} 80%)`};
  align-items: center;
  display: flex;
  border-radius: 20px;
  box-shadow: 0px 2px 5px #cfd0d1;
  justify-content: space-between;
  width: 42vw;
  height: 120px;
  margin-top: 18px;

  @media (max-width: 1307px) {
    width: 95vw;
  }

  @media (max-width: 768px) {
    width: 90vw;
  }

  & h3 {
    font-family: "Karla", sans-serif;
  }

  & p {
    font-family: "Lato", sans-serif;
  }
`;

export const BarPicture = styled.img`
  border-radius: 50%;
`;

export const ContactContainer = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;
  margin-right: 40px;
`;

export const Location = styled.p`
  color: #292929;
  opacity: 0.6;
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: center;
  align-items: flex-start;
`;

export const ProfileContainer = styled.div`
  display: flex;
  margin-left: 20px;
  align-items: center;
`;
