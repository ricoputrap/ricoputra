import styled from "styled-components";
import { Text } from "../Text/index.styles";

interface Props {
  variant?: "filled" | "outlined";
  textTransform?: "initial" | "lowercase" | "uppercase" | "capitalize";
}

export const Button = styled.div<Props>`
  padding: 20px;
  font-size: 20px;
  border-radius: 10px;
  width: fit-content;

  text-transform: ${({ textTransform }) => textTransform};

  background: ${({ variant, theme }) => variant === "filled" 
    ? theme.colorActive : "transparent"};
  border: 4px solid ${({ variant, theme }) => variant === "filled" 
    ? "transparent" : theme.colorActive};
  
  &:hover {
    cursor: pointer;
  }

  ${Text} {
    color: ${({ variant, theme }) => variant === "filled" 
      ? theme.colorBackground : theme.colorActive};
  }
`;