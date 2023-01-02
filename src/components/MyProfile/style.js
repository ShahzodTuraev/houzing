import styled from "styled-components";
import { Table } from "antd";
import { ReactComponent as edit} from "../../assets/icons/edit.svg";
import { ReactComponent as dalete} from "../../assets/icons/delete.svg";

const Wrapper = styled.div`
    padding: var(--padding);
    max-width: 1440px;
    margin: auto;
    margin-top: 70px;
    width: 100%;
    
`;

const Container = styled.div`
    display: flex;
    padding: 30px;
    background: #FFFFFF;
    border: 1px solid #E6E9EC;
    box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
    border-radius: 3px;
`;

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
`;

const AntTable = styled(Table)`
    width: 100%;
`;

const Icons = styled.div``;
Icons.Edit = styled(edit)`
    width: 16px;
    height: 16px;
    margin-right: 32px;
    cursor: pointer;
    :hover {
        fill: red;
    }
`;
Icons.Delete = styled(dalete)`
    width: 16px;
    height: 16px;
    cursor: pointer;
    :hover {
        fill: red;
    }
`;

const User = styled.div`
    display: flex;
    flex-direction: ${({flex})=>flex? 'column':'row'};
    justify-content: ${({sb})=>sb? 'space-between': 'flex-start'};
    margin-left: ${({flex})=>flex && '16px'};
`;
User.Img = styled.img`
    width: 113px;
    height: 113px;
`;
export {Wrapper, Container, User, TitleBox, AntTable, Icons}