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
const Container = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    font-size: 14px;
    min-width: 120px;
    font-size: ${({fontSize})=>(fontSize? `${fontSize}px`:'14px')};;
    width: ${({width})=>(width? `${width}px`:'100%')};;
    height: ${({height})=>(height? `${height}px`:'44px')};
    outline: none;
    border: 1px solid #e6e9ec;
     /* ${getType}; */
`;

export {Container}