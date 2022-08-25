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
`;

export const SearchInput = styled.input`
  border-style: none;
  width: 95%;
  padding-left: 3px;
  padding-right: 3px;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 25%;
  border-radius: 50px;
  padding: 5px 10px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UtilityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;
