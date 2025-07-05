import React from 'react';
import { 
    WelcomeContainer, 
    Header, 
    WelcomeText, 
    FindText, 
    LandingContainer, 
    CtaButton, 
    ButtonContainer,
    Highlight,
    Subtitle,
    ContentWrapper
} from './LandingElements';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <LandingContainer>
            <Header>
                <WelcomeContainer>
                    <ContentWrapper>
                        <WelcomeText>
                            Hey, I'm <Highlight>Mandlenkosi Shezi</Highlight>.
                        </WelcomeText>
                        <Subtitle>
                            I'm a <strong>Full-Stack Developer</strong> passionate about building scalable systems and solving complex problems.
                            I write about backend engineering, distributed systems, and occasionally — how life insists on debugging me back.
                        </Subtitle>
                        <FindText>
                            Currently looking for my next challenge. Previously crafted digital experiences at <strong>Scrums.com</strong>.
                        </FindText>
                        <ButtonContainer>
                            <Link to="/about">
                                <CtaButton>About Me</CtaButton>
                            </Link>
                            <Link to="/blog">
                                <CtaButton>Read My Blog</CtaButton>
                            </Link>
                        </ButtonContainer>
                    </ContentWrapper>
                </WelcomeContainer>
            </Header>
        </LandingContainer>
    );
}

export default LandingPage;