import styled from "styled-components";
import { Heading3 } from "../../../core-ui/atoms/Text/index.styles";

export const Content = styled.div`
  width: 365px;

  & .project-cover {
    border-radius: 10px;
  }
`;

export const Title = styled(Heading3)`
  margin-top: 20px;
`;

export const TechStacks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const TechChip = styled.span`
  padding: 4px;
  background: ${props => props.theme.colorBackground};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 5px;
  display: flex;
  gap: 4px;
`;