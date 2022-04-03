import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Card = styled.div`
  padding: 20px;
  background: ${props => props.theme.colorBackgroundCard};
  border: 1px solid ${props => props.theme.colorBorder};
  border-radius: 10px;
`;