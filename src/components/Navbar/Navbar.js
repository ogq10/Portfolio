import React from 'react'
import styled from 'styled-components';
import { NavLink } from "react-router-dom";


export const NavbarContainer = styled.div`
justify-content: space-between;
display: flex;
z-index: 2;
align-content: center;
align-text: center;
height: 80px;
background-color: transparent;
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
 
 align-content: center;
align-items: center;
 
  }
.link{
    text-decoration: none;
    color: inherit;

    :hover{
        text-decoration: none;
        color: #3c3c3c;
    }
}

 

`;
export const HomeLogo = styled.div`
font-weight: 600;
font-size: 18px;
color: #fff;
margin: 1.69rem;

:hover{
    text-decoration: none;
    color: #3c3c3c;
}

@media (max-width: 768px) {
    font-size: 13px;
  }

`;
export const NavOptionsMenu = styled.div`
display: flex; 

@media (max-width: 768px) {
  width: 100vw;
    
  }

`;
export const NavOptionsList = styled.ul`
display: flex; 
position: relative;
@media (max-width: 768px) {
    display: flex;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: Center;
 max-width: 100vw;
    
  }
 
 
`;
export const NavOptions = styled.li`
list-style: none; 
text-decoration: none; 
 position: relative;

font-weight: 600;
font-size: 18px;
color: #fff;
margin: 1rem 1.69rem; 
z-index: 222;
@media (max-width: 768px) {
    display: flex;
    text-align: center;
    align-content: center;
    align-items: center;
    justify-content: Center;
    margin: 0.4rem 0.7rem;
    
  }
&:hover{
    text-decoration: none;
    list-style: none;
 
         color: #3c3c3c;
 
  }
  
&:hover:after {
    bottom: -5px;
    opacity: 1;
    border-color: #fff;
  }
&:after {
  content: "";
  position: absolute;
  width: 100%;
  left: 0;
  border-bottom: 2px solid white;
  background: white;
  bottom: -20px;
  opacity: 0;
  transition: 0.4s;
  
}
`;


export default function Navbar() {
    return (
        <NavbarContainer>

            <NavLink className="link" to="/">
                <HomeLogo>© Code By Omar Qoran</HomeLogo>
            </NavLink>

            <NavOptionsMenu>
                <NavOptionsList>

                    <NavLink className="link" to="/work">
                        <NavOptions>Work</NavOptions>
                    </NavLink>

                    <NavLink className="link" to="/about">
                        <NavOptions>About</NavOptions>
                    </NavLink>

                    <NavLink className="link" to="/contact">
                        <NavOptions>Contact</NavOptions>
                    </NavLink>

                    <NavLink className="link" to="https://drive.google.com/file/d/1JK5CrNPMme223LMfLhkZrQEm7bBbvrUI/view?usp=sharing" target="_blank" and rel="noopener noreferrer">
                        <NavOptions>Resume</NavOptions>
                    </NavLink>

                </NavOptionsList>
            </NavOptionsMenu>


        </NavbarContainer>
    )
}
