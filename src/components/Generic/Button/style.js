import styled from "styled-components";
const getType = ({type})=>{
    switch(type){
        case 'dark': 
            return {
                background: 'transparent', 
                border: '1px solid white',
                color: 'white',
            };
        case 'light': 
            return {
                background: '#FFFFF', 
                border: '1px solid #E6E9EC',
                color: '#0D263B',
            };
        case 'primary':
            return {
                background: '#0061DF', 
                border: 'none',
                color: 'white',
            };
        default:
            return {
                background: '#0061DF', 
                border: 'none',
                color: 'white',
            };
    }
};
const Container = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    font-size: 14px;
    min-width: 120px;
    font-size: ${({fontSize})=>(fontSize? `${fontSize}px`:'14px')};;
    width: ${({width})=>(width? `${width}px`:'130px')};;
    height: ${({height})=>(height? `${height}px`:'44px')};
    cursor: pointer;
    ${getType};
    :active{
        opacity: 0.7;
    }
`;

export {Container}