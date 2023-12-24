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

export const TopRow = styled.div`
  display: block;
  width: 100%;
`;
