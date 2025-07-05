import styled from 'styled-components';
import { keyframes } from 'styled-components';


export const AboutHeader = styled.header`
    text-align: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #e2e8f0;
`;

export const AboutTitle = styled.h1`
    font-size: 2.5rem;
    font-weight: 800;
    color: #1a202c;
    margin: 0 0 1rem;
    line-height: 1.2;
    
    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;


const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const AboutContainer = styled.div`
    background: #ffffff;
    min-height: 100vh;
    color: #2d3748;
    line-height: 1.6;
`;
export const MainContainer = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: 2rem 1.5rem 4rem;
    animation: ${fadeIn} 0.8s ease-out forwards;
    
    @media (min-width: 768px) {
        padding: 3rem 2rem 5rem;
    }
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

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const Abouttext = styled.div`
    font-weight: 500;
    padding-top: 50px;
    font-size: 17px;
    line-height: 1.8;
    letter-spacing: -0.5px;
    color: #2d3748;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 960px) {
        text-align: left;
        font-size: 16px;
        width: 100%;
        padding: 30px 0;
        margin: 0;
    }
`;

export const Section = styled.section`
    margin-bottom: 3rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 0 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    svg {
        color: #6c63ff;
    }
    
    &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #e2e8f0;
        margin-left: 1rem;
    }
`;

export const AboutContent = styled.div`
    font-size: 1.1rem;
    line-height: 1.7;
    color: #4a5568;
    margin-bottom: 1.5rem;
`;

export const ExperienceItem = styled.article`
    margin-bottom: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #edf2f7;
    
    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }
`;

export const ExperienceTitle = styled.h3`
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748;
    margin: 0 0 0.25rem;
`;

export const ExperienceCompany = styled.span`
    font-size: 1.1rem;
    font-weight: 600;
    color: #4a5568;
    display: block;
    margin-bottom: 0.25rem;
`;

export const ExperienceDuration = styled.div`
    color: #4a5568;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
`;

export const ExperienceDescription = styled.div`
    margin-top: 0.5rem;
    color: #4a5568;
    font-size: 0.95rem;
    line-height: 1.6;
    
    ul {
        margin: 0.5rem 0 0 1.25rem;
        padding: 0;
    }
    
    li {
        margin-bottom: 0.5rem;
        line-height: 1.6;
    }
    
    strong {
        color: #2d3748;
        font-weight: 600;
    }
`;

export const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 1rem;
`;

export const SkillCategory = styled.h4`
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 0.75rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #e2e8f0;
`;

export const SkillList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const SkillItem = styled.li`
    background: #f7fafc;
    color: #4a5568;
    padding: 0.4rem 0.8rem;
    border-radius: 9999px;
    font-size: 0.9rem;
    border: 1px solid #e2e8f0;
`;

export const PublicationItem = styled.article`
    margin-bottom: 1.5rem;
    
    &:last-child {
        margin-bottom: 0;
    }
`;

export const PublicationTitle = styled.h3`
    font-size: 1.1rem;
    font-weight: 600;
    color: #2d3748;
    margin: 0 0 0.25rem;
`;

export const PublicationLink = styled.a`
    color: #6c63ff;
    text-decoration: none;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 0.95rem;
    
    &:hover {
        text-decoration: underline;
    }
    
    svg {
        font-size: 0.8em;
    }
`;

export const Highlight = styled.span`
    color: #6c63ff;
    font-weight: 600;
`;

export const Divider = styled.hr`
    border: none;
    height: 1px;
    background: #e2e8f0;
    margin: 2rem 0;
`;

export const ContactInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin: 1rem 0 1.5rem;
    color: #4a5568;
    font-size: 0.95rem;
    
    @media (min-width: 768px) {
        font-size: 1rem;
    }
`;

export const ContactItem = styled.span`
    display: flex;
    align-items: center;
    
    &::after {
        content: '•';
        margin-left: 1rem;
        color: #cbd5e0;
    }
    
    &:last-child::after {
        display: none;
    }
`;

export const SocialLinks = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 1.5rem;
`;

export const SocialLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #4a5568;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    transition: all 0.2s ease;
    background-color: #f7fafc;
    border: 1px solid #e2e8f0;
    font-size: 0.9rem;
    
    &:hover {
        background-color: #edf2f7;
        transform: translateY(-2px);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
        color: #2d3748;
    }
    
    svg {
        font-size: 1.1rem;
    }
`;

export const ImgBox = styled.div`
    margin: auto;
    padding-top: 50px;
    width: 100%;
    max-width: 500px;
    height: auto;
    border: 3px solid rgba(25, 61, 120, 0.09);
    box-sizing: border-box;
    @media screen and (max-width: 960px){
        width: 280px;
        height: 450px;
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
        width:95%;
        height: 95%;
        border-radius: 50%;
    }
`;

export const ImgContainer = styled.img`
    vertical-align: middle;
    border-style: none;
    width: 100%;
    height: 100%;
    @media screen and (max-width: 960px){
        ${'' /* width: 260px; */}
    }
`;
