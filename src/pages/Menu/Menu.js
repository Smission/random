import React from 'react';
// import { scroller } from "react-scroll";
import logopurple from '../../assets/images/logopurple.png';
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


const Navbar = (props, toggle) => {

    // const scrollToTop = () => {
    //     scroller.scrollTo("topSection", {smooth: true, duration: 3000 });
    // }

    // const scrollToAbout = () => {
    //     scroller.scrollTo("aboutSection", {smooth: true, duration: 3000 });
    // }
    // const scrollToCorporate = () => {
    //     scroller.scrollTo("CorporateSection", {smooth: true, duration: 3000 });
    // }
    // const scrollToTeam= () => {
    //     scroller.scrollTo("teamSection", {smooth: true, duration: 3000 });
    // }
    // const scrollToAdvisor = () => {
    //     scroller.scrollTo("teamAdvisor", {smooth: true, duration: 3000 });
    //}

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'> <img height={'75px'} src={logopurple} alt="Logo"/> </NavLogo>
                <MobileIcon 
                    // onClick={showDrawer}
                >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks 
                        // onClick ={scrollToAbout} 
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true} 
                        exact='true'
                        activeClass="active"
                        offset={-80}
                        >About me</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks to="about">Corporate</NavLinks>
                    </NavItem> */}
                    <NavItem>
                        <NavLinks  to="contact">Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  to="contact">Blog</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar;