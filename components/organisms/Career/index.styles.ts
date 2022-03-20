import styled from "styled-components";
import { Heading2, Heading3 } from "../../../core-ui/atoms/Text/index.styles";

export const Container = styled.div`
  ${Heading2} {
    margin-bottom: 40px;
  }
`;

export const JobsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const JobCard = styled.div`
  padding: 20px 36px 20px 20px;
  background: ${props => props.theme.colorBackgroundCard};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 10px;
  width: 328px;
  margin-right: 20px;
  margin-bottom: 20px;

  ${Heading3} {
    margin-bottom: 12px;
  }

  p:first-of-type {
    margin-bottom: 8px;
  }
`;