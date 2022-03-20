import styled from "styled-components";
import { Heading1, Heading2 } from "../../../core-ui/atoms/Text/index.styles";

export const Container = styled.div`
  display: flex;

  ${Heading1} {
    margin-bottom: 40px;
  }

  ${Heading2} {
    margin-bottom: 24px;
  }
`;

export const Name = styled.div`
  color: ${props => props.theme.colorActive};
  background-color: ${props => props.theme.colorBorder};
  width: fit-content;
  padding: 0 4px;
`;

export const ImageWrapper = styled.div`
  height: fit-content;
  span {
    width: 304px !important;
    height: 404px !important;
  }
`;