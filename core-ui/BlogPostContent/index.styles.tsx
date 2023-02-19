import styled from "@emotion/styled";

export const Container = styled.div`
  & h1 {
    font-size: 30px;
    font-weight: 600;
    margin-top: 20px;
  }

  & h2 {
    font-size: 24px;
    font-weight: 600;
    margin-top: 20px;
  }

  & h3 {
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }

  & p {
    line-height: 24px;
    margin-bottom: 20px;
    text-align: justify;
  }

  & ul {
    margin-left: 20px;
  }

  & ol {
    margin-left: 30px;
  }

  & li {
    margin-bottom: 8px;

    & p {
      margin: 0;
    }
  }

  & pre {
    margin-top: 12px;
    margin-bottom: 12px;
    background: #F0F0F0;
    padding: 12px;
  }
`;