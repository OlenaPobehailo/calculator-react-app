import { Component } from 'react';
import * as math from 'mathjs';
import { StyledCalculator } from './Calculator.styled';

class Calculator extends Component {
  state = {
    input: '',
    result: '',
  };

  handleChange = event => {
    this.setState({ input: event.target.value });
  };

  handleClick = value => {
    if (value === '=') {
      const result = math.evaluate(this.state.input);
      this.setState({ input: result, result: '' });
    } else if (value === 'C') {
      this.setState({ input: '', result: '' });
    } else {
      this.setState(prevState => ({ input: prevState.input + value }));
    }
  };

  render() {
    return (
      <StyledCalculator>
        <input type="text" value={this.state.input} onChange={this.handleChange} readOnly />
        <div className="btns">
          <button onClick={() => this.handleClick('7')}>7</button>
          <button onClick={() => this.handleClick('8')}>8</button>
          <button onClick={() => this.handleClick('9')}>9</button>
          <button onClick={() => this.handleClick('+')}>+</button>
          <button onClick={() => this.handleClick('4')}>4</button>
          <button onClick={() => this.handleClick('5')}>5</button>
          <button onClick={() => this.handleClick('6')}>6</button>
          <button onClick={() => this.handleClick('-')}>-</button>
          <button onClick={() => this.handleClick('1')}>1</button>
          <button onClick={() => this.handleClick('2')}>2</button>
          <button onClick={() => this.handleClick('3')}>3</button>
          <button onClick={() => this.handleClick('*')}>*</button>
          <button onClick={() => this.handleClick('0')}>0</button>
          <button onClick={() => this.handleClick('=')}>=</button>
          <button onClick={() => this.handleClick('C')}>C</button>
          <button onClick={() => this.handleClick('/')}>/</button>
        </div>

        <div className="result">{this.state.result}</div>
      </StyledCalculator>
    );
  }
}

export default Calculator;
