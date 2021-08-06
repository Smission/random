import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.div`
    background-color:white;
    height: 75px;
    display: flex;
    justify-content: space-between;
    font-size: 1rem;
    position:sticky;
    top:0;
    z-index: 10;
    box-shadow: 0px 2px 2px rgba(98, 98, 98, 0.33);

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`

    background-color:white;
    display:flex;
    justify-content: space-between;
    height: 75px;
    z-index:1;
    width: 95%;
    /*padding: 0 24px;*/
    margin: auto;
`;

export const NavLogo = styled(LinkR)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
font-weight: bold;
text-decoration: none;

`;


export const MobileIcon = styled.div`

    display: none;
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:black;
    }
`;


export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    .be-tutor{
        background-color:#800080;
        color:black;
        margin-left:5px;
        margin-top:20px;
        height: 40px;
        font-size:12px !important;
        border-radius:25px;
    }
    .be-tutor2{
        margin-top:20px;
        border:1px solid black !important;
        height: 40px;
        font-size:12px !important;
        border-radius:25px;
    }
`;

export const NavLinks = styled(LinkS)`
    color: black;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#800080;
        color: white;
    }
`;

export const NavBtLink = styled(LinkR)`

    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    cursor:pointer;
    transition: all 0.2s ease-ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: #010606;
    }
`

export const  ModalBottom = styled.div`

`;
