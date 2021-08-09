import styled from 'styled-components';

export const ContainContact = styled.div`
    background-color: #B69EED;
    height: 40vh;

    @media screen and (max-width: 960px){
        height: 75vh !important;
    }
`;

export const Title = styled.div`
    padding-top: 50px !important;
    color: black;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 50px;
`;

export const ContainIcons = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: 50px;

    @media screen and (max-width: 960px){
        display: block;
    }
`;

export const ContainAllIcons = styled.div`
    width: 90%;
`;

export const BottomText = styled.div`
`;