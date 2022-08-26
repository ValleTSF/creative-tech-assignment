import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.h2`
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  align-self: flex-start;
  margin-left: 27vw;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-left: 5vw;
  }
`;

export const SearchInput = styled.input`
  border-style: none;
  width: 15vw;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 20px;

  @media (max-width: 1307px) {
    width: 75vw;
  }

  @media (max-width: 768px) {
    width: 65vw;
  }

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 15vw;
  border-radius: 50px;
  padding: 5px 10px;
  margin: 10px 20px;
  align-items: center;
  justify-content: center;

  @media (max-width: 1307px) {
    width: 75vw;
  }

  @media (max-width: 768px) {
    width: 65vw;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

export const UtilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
    align-self: center;
  }
`;
