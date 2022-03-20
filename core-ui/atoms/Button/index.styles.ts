import styled from "styled-components";

interface ButtonProps {
  variant?: "filled" | "outlined";
}

export const StyledButton = styled.button<ButtonProps>`
  padding: 20px;
  border-radius: 10px;
  background: ${({ variant, theme }) => variant === "filled" 
    ? theme.colorActive : "transparent"};
  border: 4px solid ${({ variant, theme }) => variant === "filled" 
    ? "transparent" : theme.colorActive};
  
  &:hover {
    cursor: pointer;
  }
`;