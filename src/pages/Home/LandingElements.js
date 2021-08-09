import styled from 'styled-components';
import BackgroundImg from '../../assets/images/banner.jpg'

export const WelcomeText = styled.div`
    font-weight: bold;
    width:90%;
    font-size: 50px;
    line-height: 73px;
    letter-spacing: -1px;
    color: #800080;;
    @media screen and (max-width: 1200px){
        font-size: 34px;
        width:90%;
        text-align: center;
    }
`;

export const FindText = styled.p`
    font-weight: 500;
    font-size: 30px;
    padding-top:30px;
    line-height: 32px;
    display: flex;
    align-items: center;
    color: #800080;
    @media screen and (max-width: 1200px){
        text-align: center;
        width:90%;
        justify-content: center;
    }
`;

export const WelcomeContainer = styled.div`
    height: 100%;
    width: 1200px;
    padding-top: 80px;
    margin: auto;
    z-index:1000;
    @media screen and (max-width: 960px){
        padding-top: 60px;
        width: 100%;
    }
`;

export const Header = styled.div`
    background: #800080;
    padding-bottom:10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${BackgroundImg});
    height: 100vh;
`;

export const LandingContainer = styled.div`
    display: block !important;
`;