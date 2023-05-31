import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom';

export const AboutContainer = styled.div`
width: 100vw;
height: 40vh;
background-color: #f3f6fb; 
 overflow-x: hidden;
 
@media (max-width: 768px) {
    height: 52vh;
    
  }
.i-icon{
    @media (max-width: 768px) {

        width: 50px;
        height: 50px;

      }
}
`;


export const SplitWrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;

 
`

export const AboutImgWrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
width: 50%;
height: 100%;

 
@media (max-width: 768px) {
    width: 50%;
    height: 50%;
    display: none;
    
  }

`;

export const AboutImg = styled.img`
width: 400px;
height: 400px;
object-fit: cover;

@media (max-width: 768px) {
    width: 100%;
    height: 100%;

    object-fit: cover;

  }


`;

export const AboutText = styled.div`
 width: 50%;
 @media (max-width: 768px) {
  width: 100vw;
}

`;

export const AboutTitle = styled.h1`

@media (max-width: 768px) {
    font-size: 20px;
    
  }
`;
export const AboutSub = styled.h3`
@media (max-width: 768px) {
    font-size: 18px;
    
  }
`;
export const AboutParagraph = styled.p`
@media (max-width: 768px) {
    font-size: 14px;
    
  }
`;

export const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
 

@media (max-width: 768px) {
 
     width: 100vw;
     height: 50px;
  }
 
`;
export const ButtonContact = styled.button`
display: inline-block;
  padding: 14px 22px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(0,0,0,0.8);
  border: 1px solid rgba(0,0,0,0.8);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  

  @media (max-width: 768px) {

    height: 100%;
  }

   
`;
export const ButtonLearnMore = styled.button`
display: inline-block;
  padding: 14px 22px;
  border: 0;
  text-decoration: none;
  border-radius: 15px;
  background-color: rgba(0,0,0,0.8);
  border: 1px solid rgba(0,0,0,0.8);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  margin: 0 1rem;
  
  
    @media (max-width: 768px) {

      height: 100%;
    }

 

  `;


export const IconWrapper = styled.div`
display: flex;
 justify-content: center;
 margin: 2rem;

 @media (max-width: 768px) {
    padding: 0;

    margin: 0;

    
  }


`;
export const GithubIcon = styled.img`
width: 45px;
height: 45px;
object-fit: cover;
margin: .6rem;
cursor: pointer;
 

`
export const LinkedInIcon = styled.img`
width: 45px;
height: 45px;
object-fit: cover;
margin: .6rem;
cursor: pointer;
`


const letterAnimation = {
  initial: {
    y: 400
  },
  animate: {
    y: 0,
    transition: {
      ease: [.6, .01, -.05, .98],
      duration: 1
    }
  }
}

export default function About() {
  return (

    <AboutContainer>

      <img className="i-icon" src="https://ontallme.sirv.com/2221149-200.png" width="77" height="77" alt="i icon" />
      <SplitWrapper>
        <AboutImgWrapper>

          <AboutImg src="https://ontallme.sirv.com/9.%20smart-people.png" alt='about me' />
        </AboutImgWrapper>
        <AboutText >
          <AboutTitle>
            Hi, I'm Omar
          </AboutTitle>
          <AboutSub>
            Full Stack Software Developer
          </AboutSub>

          <motion.p
            variants={letterAnimation}
            initial="initial"
            animate="animate"

          >

            <AboutParagraph>
              I'm a full stack software developer looking to kickstart my career in tech.
            </AboutParagraph>
          </motion.p>

          <ButtonWrapper>
            <NavLink to="/contact">
              <ButtonContact>Contact me</ButtonContact>
            </NavLink>

            <NavLink to="/about">
              <ButtonLearnMore>View more</ButtonLearnMore>
            </NavLink>
          </ButtonWrapper>

          <IconWrapper>
            <GithubIcon src='https://ontallme.sirv.com/GitHub-Mark%20(1).png' alt='Github' />
            <LinkedInIcon src='https://ontallme.sirv.com/linkedin.png' alt='Linkedin' />
          </IconWrapper>
        </AboutText>
      </SplitWrapper>
    </AboutContainer>

  )
}
