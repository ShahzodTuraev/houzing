import styled from "styled-components";
import { Select } from 'antd';
import {ReactComponent as houses} from '../../assets/icons/houses.svg';
import {ReactComponent as filter} from '../../assets/icons/filter.svg';
import {ReactComponent as search} from '../../assets/icons/search.svg';

const Container = styled.div`
    display: flex;
    padding: var(--padding);
    padding-top: 10px;
    padding-bottom: 10px;
    gap: 20px;
    width: 100%;
    max-width: 1440px;
    margin: auto;
`;

const Icons =styled.div``;
Icons.Search = styled(search)`
    margin-right: 8px;
`;
Icons.Filter = styled(filter)`
    margin-right: 8px;
`;
Icons.Houses = styled(houses)`
    margin-right: 8px;
`;

const MenuWrapper = styled.div`
    padding: 30px;
    border: 1px solid #E6E9EC;
    background: #FFFFFF;
`;
const Section = styled.div`
    gap: 20px;
    margin-bottom: 20px;
    display: flex;
`;

const SelectAnt = styled(Select)`
    width: 150%;
    min-width: 200px;
    max-width: 200px;
    .ant-select-selector{
        height: 44px !important;
    }
    .ant-select-selection-item {
        display: flex;
        align-items: center;
    }
`;
export {Container, Icons, MenuWrapper, Section, SelectAnt}
