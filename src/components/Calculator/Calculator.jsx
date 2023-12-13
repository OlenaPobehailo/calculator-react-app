import { Component } from "react";
import * as math from "mathjs";
import { StyledCalculator } from "./Calculator.styled";

class Calculator extends Component {
  state = {
    input: "",
    result: "",
  };

  handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  handleClick = (value) => {
    if (value === "=") {
      const result = math.evaluate(this.state.input);
      this.setState({ input: result, result: "" });
    } else if (value === "C") {
      this.setState({ input: "", result: "" });
    } else if (value === "." && this.state.input.includes(".")) {
      return;
    } else {
      this.setState((prevState) => ({ input: prevState.input + value }));
    }
  };

  render() {
    const { input, result } = this.state;

    const { handleClick } = this;

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
        <input
          type="text"
          value={input}
          onChange={this.handleChange}
          readOnly
        />

        <div className="btns">
          <div className="top-row">
            <button className="clear-btn" onClick={() => handleClick("C")}>
              C
            </button>
          </div>
        
            {buttons.map((button) => (
              <button key={button} onClick={() => handleClick(button)}>
                {button}
              </button>
            ))}
          
        </div>

        <div className="result">{result}</div>
      </StyledCalculator>
    );
  }
}

export default Calculator;
