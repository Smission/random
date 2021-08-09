import React from 'react';
import {Element} from 'react-scroll'
import Navbar from '../../pages/Menu/Menu';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { WelcomeContainer, Header, WelcomeText, FindText, LandingContainer} from './LandingElements'

function LandingPage() {
    return (
        <Element name="topSection">
            <LandingContainer >
                <Navbar/>

                <Header>
                    <WelcomeContainer>
                        <WelcomeText> Welcome to Mandlenkosi Shezi's Personal Site</WelcomeText>

                        <FindText> Precision | Dedication | Positivity</FindText>
                    </WelcomeContainer>
                </Header>

                <About/>

                <Contact/>

            </LandingContainer>
        </Element>
    );
}

export default LandingPage;