import styled from "styled-components";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    width: 100%;
    
    background: #E5E5E5;;

  `;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 580px;
    width: 100%;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
    background-color: #FFFFFF;
    padding: 30px;
    margin: 64px;
    gap: 30px;
`;

export {Container, Content}