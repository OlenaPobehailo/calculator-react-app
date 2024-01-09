import { useState } from "react";
import { evaluate } from "mathjs";
import {
  ButtonsWrapper,
  Input,
  StyledCalculator,
  TopRow,
} from "./Calculator.styled";
import { ClearButton } from "components/Button/Button.styled";
import Button from "components/Button";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [, setResult] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleClick = (value) => {
    switch (value) {
      case "=":
        if (input !== "") {
          try {
            let result;

            if (
              input.charAt(input.length - 1) !== "+" &&
              input.charAt(input.length - 1) !== "-" &&
              input.charAt(input.length - 1) !== "*" &&
              input.charAt(input.length - 1) !== "/"
            ) {
              result = evaluate(input);
            } else {
              result = evaluate(input.slice(0, -1));
            }

            setResult(result);
            setInput(result.toString());
          } catch (error) {
            setResult("Error");
            console.log("error");
            setInput("");
          }
        }
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

  const handleKeyPress = (event) => {
    const keyPressed = event.key;

    switch (keyPressed) {
      case "Enter":
        event.preventDefault();
        handleClick("=");
        break;

      case "Escape":
        handleClick("C");
        break;

      default:
        if (/^[0-9+\-*/.=/]$/.test(keyPressed)) {
          handleClick(keyPressed);
        }
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
    <StyledCalculator onKeyDown={handleKeyPress}>
      <Input
        type="text"
        value={input}
        onChange={handleChange}
        readOnly
        role="textbox"
        aria-label="Calculator Input"
      />

      <ButtonsWrapper>
        <TopRow>
          <ClearButton
            onClick={() => handleClick("C")}
            role="button"
            aria-label="Clear"
            tabIndex="0"
          >
            C
          </ClearButton>
        </TopRow>

        {buttons.map((button) => (
          <Button
            key={button}
            label={button}
            onClick={() => handleClick(button)}
            role="button"
            aria-label={button}
            tabIndex="0"
          >
            {button}
          </Button>
        ))}
      </ButtonsWrapper>
    </StyledCalculator>
  );
};

export default Calculator;
