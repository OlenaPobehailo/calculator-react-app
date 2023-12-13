import { useState } from "react";
import * as math from "mathjs";
import {
  Button,
  ButtonsWrapper,
  ClearButton,
  Input,
  StyledCalculator,
  TopRow,
} from "./Calculator.styled";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (value) => {
    switch (value) {
      case "=":
        const result = math.evaluate(input);
        setResult(result);
        setInput(result.toString());
        break;

      case "C":
        setInput("");
        setResult("");
        break;

      case ".":
        if (!input.includes(".")) {
          setInput((prevInput) => prevInput + value);
        }
        break;

      default:
        setInput((prev) => prev + value);

        break;
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "*",
    "0",
    ".",
    "=",
    "/",
  ];

  return (
    <StyledCalculator>
      <Input type="text" value={input} onChange={handleChange} readOnly />

      <ButtonsWrapper>
        <TopRow>
          <ClearButton onClick={() => handleClick("C")}>C</ClearButton>
        </TopRow>

        {buttons.map((button) => (
          <Button key={button} onClick={() => handleClick(button)}>
            {button}
          </Button>
        ))}
      </ButtonsWrapper>
    </StyledCalculator>
  );
};

export default Calculator;
