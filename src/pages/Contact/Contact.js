import React from 'react';
import { ContainContact, Title, ContainIcons, ContainAllIcons, BottomText } from './ContactElements';
import { Element } from 'react-scroll';
import { InstagramOutlined, LinkedinOutlined, TwitterOutlined, GithubOutlined, MailOutlined, FacebookOutlined } from '@ant-design/icons';

export const Contact = ()=>{

    const goToLinkedIn = () => {
        window.location.href='https://www.linkedin.com/in/mandlenkosishezi/'
    }

    const goToGithub = () => {
        window.location.href='https://github.com/Smission'
    }

    const goToFacebook = () => {
        window.location.href='https://en-gb.facebook.com/mandla.shezi.9'
    }

    const goToTwitter = () => {
        window.location.href='https://twitter.com/mandlashezi'
    }

    const goToEmail = () => {
        window.location.href="mailto:mandlashezifbi@gmail.com"
    }

    const goToInstagram = () => {
        window.location.href='https://instagram.com/mandlashezi'
    }

    return (
        <Element name="contact">
            <ContainContact>
                <Title> CONTACT MANDLENKOSI</Title>

                <ContainAllIcons>
                    <ContainIcons>
                        <MailOutlined className='icon-size' onClick={()=>{goToEmail()}}/>

                        <LinkedinOutlined className='icon-size' onClick={()=>{goToLinkedIn()}}/>

                        <GithubOutlined className='icon-size' onClick={()=>{goToGithub()}}/>
                    
                        <TwitterOutlined className='icon-size' onClick={()=>{goToTwitter()}}/>

                        <InstagramOutlined className='icon-size' onClick={()=>{goToInstagram()}}/> 

                        <FacebookOutlined className='icon-size' onClick={()=>{goToFacebook()}}/>
                    </ContainIcons>

                </ContainAllIcons>
                
                <BottomText>© 2021, M. Shezi</BottomText>
            </ContainContact>
        </Element>
        
    )
}

export default Contact;