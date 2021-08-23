import React from 'react';
import { Element} from "react-scroll";
import MyNewPicture from '../../assets/images/my-new-pic-1.jpg';

import {
    AboutContainer,
    AboutTitle,
    Abouttext,
    MainContainer,
    AboutContain,
    ParaAbout,
    ImgBox,
    ImgContainer,
    ImgBoxMini
} from './AboutElements';

const About = () => {
    return (
    <Element name="aboutSection"> 
    <AboutContainer>
        <MainContainer>
            <AboutTitle>
                ABOUT MANDLENKOSI SHEZI
            </AboutTitle>
            <AboutContain>
                <Abouttext>
                    <ParaAbout>
                        Mandlenkosi Shezi is an Information Sytems specialist from Johannesburg who has a strong passion 
                        for helping others and bringing change into people's life through technology. He holds an Honours Degree in
                        Information Technology Management and Bachelor's in Information Systems from the University of Johannesburg.
                        His areas of expertise include but are not limited to Software Development, Business Analysis, 
                        Agile IT Project Management and AI-based research.
                        
                    </ParaAbout>
                    <ParaAbout>
                        Mandlenkosi is currently serving as a full-stack software engineer in a start-up named Bridge Labs located in Sandton, South Africa.
                        Within the previous years Mandlenkosi has held numerous roles in academia where-in he served as a part-time Lecturer and
                        a tutor in programming modules at the University of Johannesburg. Mandlenkosi is also a published author in a SCOPUS-indexed
                        journal within the field of Artificial Intelligence.
                        He takes pride in his ability to continuously learn new things while delivering value concurrently.
                        He is a strong believer in continuous learning and working smart.
                    </ParaAbout>
                    <ParaAbout>
                        Although Mandlenkosi rarely says much, he has very strong soft skills that enable him to blend into different environments. 
                        He believes in expressing himself through his work. Mandlenkosi is also a very seasoned writer, through his sharp eye and his
                        ability to pay attention to detail he provides reviewing and proofreading services for any written work.
                    </ParaAbout>
                    <ParaAbout> 
                        Incorporating technology to bring change.
                    </ParaAbout>
                    
                </Abouttext>

                <ImgBox>
                    <ImgBoxMini>
                        <ImgContainer src={MyNewPicture} alt="MyPic" />
                    </ImgBoxMini>
                </ImgBox>
                
            </AboutContain>
        </MainContainer>
    </AboutContainer>
    </Element>
    )
}

export default About;
