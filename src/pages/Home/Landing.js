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
                            I'm a <strong>Software Engineer</strong> passionate about building scalable systems and solving complex problems.
                            I write about backend engineering, distributed systems, and occasionally — how life insists on debugging me back.
                        </Subtitle>
                        <FindText>
                            Recently started a new challenge in the crypto industry and actively learning about the Blockchain with a focus on 
                            staking. Previously crafted digital experiences as a consultant mainly in <strong>Fintech</strong> and <strong>IoT</strong>.
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