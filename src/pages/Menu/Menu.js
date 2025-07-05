import React, {useState} from 'react';
import styled from 'styled-components';
import {Drawer} from '@material-ui/core';
import {FaBars} from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer, 
    NavLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavBlogLink
} from './MenuElements';

const LogoM = styled.div`
  font-family: 'Montserrat', 'Helvetica Neue', sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  color: #6c63ff;
  letter-spacing: 1px;
  line-height: 1;
  position: relative;
  padding: 0;
  margin: 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 2px;
    background: #6c63ff;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => {
    const [mobileSidebarVisible, setMobileSidebarVisible] = useState(false);

    const navigateTo = (path) => {
        window.location.href = path;
        setMobileSidebarVisible(false);
    };

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to='/' onClick={() => navigateTo('/')}>
                    <LogoM>M</LogoM>
                </NavLogo>
                <MobileIcon 
                    onClick={() => {setMobileSidebarVisible(true)}}
                >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavBlogLink 
                            to="/about"
                            onClick={() => navigateTo('/about')}
                        >
                            About
                        </NavBlogLink>
                    </NavItem>
                    <NavItem>
                        <NavBlogLink 
                            to="/blog"
                            onClick={() => navigateTo('/blog')}
                        >
                            Blog
                        </NavBlogLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
            <Drawer
                anchor={'right'}
                open={mobileSidebarVisible}
                onClose={() => {setMobileSidebarVisible(false)}}
                PaperProps={{
                    sx: {
                        width: '50%',
                        backgroundColor: 'white',
                        paddingTop: '20px',
                    },
                }}
            >
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
                        <NavBlogLink 
                            to="/about"
                            style={{margin: '20px 0'}}
                            onClick={() => navigateTo('/about')}
                        >
                            About
                        </NavBlogLink>
                        <NavBlogLink 
                            to="/blog"
                            style={{margin: '20px 0'}}
                            onClick={() => navigateTo('/blog')}
                        >
                            Blog
                        </NavBlogLink>
                    </div>
                </div>
            </Drawer>
        </Nav>
    )
}

// Export as both default and named export
export { Navbar };
export default Navbar;