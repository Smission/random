import styled from 'styled-components';
import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  animation: ${fadeIn} 0.8s ease-out forwards;
`;

export const WelcomeText = styled.h1`
    font-weight: 800;
    font-size: 3.5rem;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: #1a202c;
    margin-bottom: 1.5rem;
    
    @media screen and (max-width: 1200px) {
        font-size: 3rem;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 2.5rem;
        text-align: center;
    }
`;

export const Highlight = styled.span`
    color: #6c63ff;
    position: relative;
    display: inline-block;
    
    &::after {
        content: '';
        position: absolute;
        bottom: 5px;
        left: 0;
        width: 100%;
        height: 12px;
        background-color: rgba(108, 99, 255, 0.2);
        z-index: -1;
        transition: all 0.3s ease;
    }
    
    &:hover::after {
        height: 20px;
    }
`;

export const Subtitle = styled.p`
    font-size: 1.375rem;
    line-height: 1.6;
    color: #4a5568;
    margin-bottom: 2rem;
    max-width: 700px;
    
    strong {
        color: #2d3748;
        font-weight: 600;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 1.125rem;
        text-align: center;
    }
`;

export const FindText = styled.p`
    font-size: 1.125rem;
    line-height: 1.6;
    color: #718096;
    margin-bottom: 2.5rem;
    font-weight: 500;
    max-width: 700px;
    
    strong {
        color: #2d3748;
        font-weight: 600;
    }
    
    @media screen and (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
        margin-bottom: 2rem;
    }
`;

export const WelcomeContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    padding: 20px 20px 0;
    margin: 0 auto;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: calc(100vh - 80px);
    
    @media screen and (max-width: 960px) {
        padding: 20px 15px 0;
        text-align: center;
        min-height: calc(100vh - 60px);
    }
`;

export const Header = styled.div`
    background: #f8f9fa;
    padding: 0;
    min-height: 100vh;
    display: flex;
    align-items: center;
`;

export const LandingContainer = styled.div`
    display: block !important;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin: 0;
    justify-content: flex-start;
    flex-wrap: wrap;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
`;

export const CtaButton = styled.button`
    background: #6c63ff;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.875rem 2rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 160px;
    box-shadow: 0 2px 5px rgba(108, 99, 255, 0.3);
    
    &:hover {
        background: #5a52d3;
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(108, 99, 255, 0.4);
    }
    
    &:active {
        transform: translateY(0);
        box-shadow: 0 2px 5px rgba(108, 99, 255, 0.3);
    }
    
    @media screen and (max-width: 768px) {
        width: 100%;
        max-width: 100%;
        margin-bottom: 0.75rem;
        
        &:last-child {
            margin-bottom: 0;
        }
    }
`;