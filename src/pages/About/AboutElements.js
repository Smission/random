import styled from 'styled-components';


export const AboutTitle = styled.div`
    color: black;
    font-weight: bold;
    font-size: 24px;
    padding-top: 30px;

    @media screen and (max-width: 960px){
        text-align: center;
    }
`;


export const AboutContainer = styled.div`
    background: linear-gradient(194.01deg, #B69EED, 9.6%, #EAF2F5 89.64%);
`;
export const MainContainer = styled.div`
    width: 90%;
    margin: auto;
    padding-top: 60px;
    justify-content: space-between;
`;

export const ParaAbout = styled.p`

`;

export const AboutContain = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 960px){
        display: block;
    }
   
`;

export const Abouttext = styled.div`

    font-weight: 500;
    padding-top: 100px;
    font-size: 17px;
    line-height: 41px;
    letter-spacing: -1px;
    color: black;
    width: 45%;

    @media screen and (max-width: 960px){
       text-align: center;
       font-size: 15px;
       width: 90%;
       margin: auto;
    }
`;

export const AboutImg = styled.div`
    width: 45%;
    margin-right: 20px;
    @media screen and (max-width: 960px){
        display: block;
        width: 90%;
    }
`;

export const ImgBox = styled.div`
    margin: auto;
    padding-top: 75px;
    width: 630px;
    height: 80%;
    border: 3px solid rgba(25, 61, 120, 0.09);
    box-sizing: border-box;
    @media screen and (max-width: 960px){
        width: 315px;
        height: 315px;
        padding-top: 40px;
    }
`;

export const ImgBoxMini = styled.div`
    margin: auto;
    width: 95%;
    height: 95%;
    background: rgba(25, 61, 120, 0.44);
    border: 3px solid rgba(25, 61, 120, 0.09);
    box-sizing: border-box;
    @media screen and (max-width: 960px){
        width: 230px;
        height: 230px;
        border-radius: 50%;
    }
`;

export const ImgContainer = styled.img`
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 960px){
        width: 260px;
    }
`;
