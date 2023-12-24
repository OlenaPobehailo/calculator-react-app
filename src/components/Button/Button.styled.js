import styled from "styled-components";

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 10px;
`;

export const StyledButton = styled.button`
  flex-basis: 20%;
  background-color: lightblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: lightskyblue;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  }
`;

export const ClearButton = styled(StyledButton)`
  display: block;
  width: 63px;
  text-align: center;
`;

export const TopRow = styled.div`
  display: block;
  width: 100%;
`;
