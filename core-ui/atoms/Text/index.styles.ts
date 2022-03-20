import styled from "styled-components";

export const Heading1 = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: ${props => props.theme.colorPrimary};
  margin: 0;
`;

export const Heading2 = styled.h2`
  font-size: 36px;
  font-weight: 700;
  color: ${props => props.theme.colorPrimary};
  margin: 0;
`;

export const Heading3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.colorPrimary};
  margin: 0;
`;

interface TextProps {
  weight?: "regular" | "medium" | "bold";
  color?: "primary" | "secondary" | "active" | "white";
  size?: number;
}

export const Text = styled.p<TextProps>`
  margin: 0;
  font-size: ${props => props.size ? `${props.size}px` : "20px"};
  font-family: "Fira Mono", monospace;
  color: ${({ color, theme }) => 
    color === "primary" ? theme.colorPrimary : 
    color === "secondary" ? theme.colorSecondary :
    color === "active" ? theme.colorActive :
    theme.colorBackground
  };
  font-weight: ${({ weight, theme }) =>
    weight === "regular" ? theme.fontRegular :
    weight === "medium" ? theme.fontMedium :
    theme.fontBold
  }
`;