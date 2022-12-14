import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    margin: auto;
    padding: 96px 130px;
    width: 100%;
    max-width: 1440px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
    gap: 8px;
`;

export {Container, Content}