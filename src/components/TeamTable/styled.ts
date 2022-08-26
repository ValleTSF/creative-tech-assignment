import styled from "styled-components";

export const CardTableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-width: 10em;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const BarTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
