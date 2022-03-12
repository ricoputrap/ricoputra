import styled from "styled-components";

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 10px 20px 10px 10px;
  width: fit-content;
  background-color: ${props => props.isActive ? props.theme.border : "transparent"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    background-color: ${props => props.isActive ? "auto" : props.theme.backgroundCard};
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-left: 16px;
  }

  span {
    width: 20px !important;
    height: 20px !important;
  }
`;