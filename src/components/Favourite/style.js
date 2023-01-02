import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
    grid-gap: 20px;
    padding: var(--padding);
    max-width: 1440px;
    margin: auto;
    margin-top: 70px;
    width: 100%;
`

const Title = styled.div`
  color: #0D263B;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-top: 30px;
`;

export {Container, Title}