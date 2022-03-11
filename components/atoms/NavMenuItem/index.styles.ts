import styled from "styled-components";

interface WrapperProps {
  isActive: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  padding: 10px 20px 10px 10px;
  width: fit-content;
  background-color: ${props => props.isActive ? "#C9E5E8" : "transparent"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  &:hover {
    background-color: ${props => props.isActive ? "auto" : "#F6F8FA"};
    cursor: pointer;
  }

  p {
    margin: 0;
    margin-left: 16px;
  }
`;