import styled from "styled-components";

export const StyledCalculator = styled.div`
  max-width: 400px;
  margin: 50px auto 0;
  padding: 40px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const Input = styled.input`
  display: block;
  width: 95%;
  padding: 10px;
  margin: 0 auto 10px;

  border: 2px solid lightblue;

  font-size: 24px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  gap: 10px;
`;

export const Button = styled.button`
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

export const ClearButton = styled(Button)`
  display: block;
  width: 63px;
  text-align: center;
`;

export const TopRow = styled.div`
  display: block;
  width: 100%;
`;
