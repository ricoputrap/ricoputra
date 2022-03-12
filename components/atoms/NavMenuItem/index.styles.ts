import styled from "styled-components";

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 10px 20px 10px 10px;
  width: fit-content;
  background-color: ${props => props.isActive ? props.theme.colorBorder : "transparent"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    background-color: ${props => props.isActive ? "auto" : props.theme.colorBackgroundCard};
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-left: 16px;
    font-weight: ${props => props.isActive ? props.theme.fontBold : props.theme.fontMedium};
    color: ${({ isActive, theme }) => isActive ? theme.colorActive : theme.colorPrimary};
  }

  span {
    width: 20px !important;
    height: 20px !important;
  }
`;

export const Label = styled.p`
  font-size: 20px;
`;