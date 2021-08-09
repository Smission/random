import React, {useState} from 'react';
import { scroller } from "react-scroll";
import logopurple from '../../assets/images/logopurple.png';
import {Drawer} from '@material-ui/core';
import {FaBars}  from 'react-icons/fa'
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks
} from './MenuElements'


const Navbar = () => {
    const [mobileSidebarVisible, setMobileSidebarVisible]= useState(false);

    const scrollToTop = () => {
        scroller.scrollTo("topSection", {smooth: true, duration: 3000 });
        setMobileSidebarVisible(false);
    }

    const scrollToAbout = () => {
        scroller.scrollTo("aboutSection", {smooth: true, duration: 3000 });
        setMobileSidebarVisible(false);
    }
    const scrollToContact = () => {
        scroller.scrollTo("contact", {smooth: true, duration: 3000 });
        setMobileSidebarVisible(false);
    }

    const scrollToBlog= () => {
        setMobileSidebarVisible(false);
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> <img height={'75px'} onClick ={scrollToTop}  src={logopurple} alt="Logo"/> </NavLogo>
                <MobileIcon 
                    onClick={()=>{setMobileSidebarVisible(true)}}
                >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        onClick ={scrollToAbout} 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass="active"
                        offset={-80}
                        >About me</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  onClick ={scrollToContact}  to="contact">Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks onClick ={scrollToBlog} to="blog">Blog</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>

            <Drawer open={mobileSidebarVisible} style={{width: '50%'}} width={'50%'} anchor={'right'} onClose={()=>{setMobileSidebarVisible(false)}}>
                <NavItem>
                    <NavLinks 
                    onClick ={scrollToAbout} 
                    to="about"
                    smooth={true}
                    duration={500}
                    spy={true} 
                    exact='true'
                    activeClass="active"
                    offset={-80}
                    >About me</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks onClick ={scrollToContact}  to="contact">Contact</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Blog</NavLinks>
                </NavItem>
            </Drawer>
        </Nav>
    )
}

export default Navbar;