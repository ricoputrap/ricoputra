import styled from "styled-components";

export const Wrapper = styled.div`
  padding-right: 36px;
  padding-left: 70px;
  padding-top: 70px;
  width: 260px;
  min-height: 100vh;

  border-right: 1px solid ${props => props.theme.colorBorder};
`;