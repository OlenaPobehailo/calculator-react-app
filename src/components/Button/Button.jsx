import React from "react";
import { StyledButton } from "./Button.styled";

const Button = ({ label, onClick }) => {
  
  return (
    <StyledButton
      onClick={onClick}
      role="button"
      aria-label={label}
      tabIndex="0"
    >
      {label}
    </StyledButton>
  );
};

export default Button;
