import React from 'react'
import styled from 'styled-components';
import { Navbar } from '../components'
import { FaPython, FaReact, FaNode, FaFigma } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiAdobephotoshop, SiFlask, SiGnubash, SiFirebase, SiPostman, SiAmazonaws, SiHeroku, SiAnaconda } from 'react-icons/si';
import { DiJavascript, DiHtml5, DiCss3, DiGithubFull } from 'react-icons/di';

export const AboutMePage = styled.div`
height: 100vh;
width: 100vw;
`;

export const Header = styled.h1`
text-transform: capitalize;
font-size: 70px;
color: #3c3c3c;

@media (max-width: 768px) {
  
  margin: 5rem 0rem;
  font-size: 40px;
 
    }
`;

export const SubHeader = styled.h2`
font-size: 40px;
color: #fff;

.skills{
  color: #f2f6fb;
}

@media (max-width: 768px) {
  
  margin: 0rem 1rem;
  font-size: 30px;
  align-content: start;
  displaY: flex;
 
    }

`;

export const TableWrapper = styled.div`
width: 100vw;

display: flex;
justify-content: space-evenly;

@media (max-width: 768px) {
  
 display: flex;
 flex-direction: column;
 align-content: start;
 align-text: center;
 justify-content: center;
 

     
   }
`;

export const TableMenu = styled.ul`
display: flex;
flex-direction: column;

@media (max-width: 768px) {
  
  display: flex;
  flex-direction: column;
  align-content: start;
  align-text: center;
  justify-content: center;
    }

`;

export const TableList = styled.li`
text-decoration: none;
list-style: none;
font-size: 36px;
margin: .5rem 0;
  
`;
export const Description = styled.span`
font-size: 20px;
margin: .6rem 0;
font-weight: 500;
color: #808080;

`;

export const LineBreak = styled.hr` 
width: 70%;
height: 2px;
background-color: #808080;
border: none;
`;

export const AboutWrapper = styled.div`
width: 70%;
display: flex;
justify-content: center;
 margin: auto;

`;


export const AboutText = styled.p`
font-weight: 500;
font-size: 18px;

`;


export default function AboutMe() {
  return (
    <AboutMePage>
      <Navbar />
      <Header>About Me</Header>
      <SubHeader className='skills'>Skills</SubHeader>

      <TableWrapper>

        <TableMenu>
          <SubHeader>Front End</SubHeader>
          <TableList><FaReact /> </TableList>
          <Description>React</Description>

          <TableList><DiHtml5 /></TableList>
          <Description>Html</Description>


          <TableList><DiCss3 /></TableList>
          <Description>Css</Description>


          <TableList><DiJavascript /></TableList>
          <Description>Javascript</Description>

        </TableMenu>


        <TableMenu>
          <SubHeader >Back End</SubHeader>

          <TableList><FaPython /></TableList>
          <Description>Python</Description>



          <TableList><FaNode /></TableList>
          <Description>Node.js</Description>



          <TableList><SiMongodb /></TableList>
          <Description>MongoDB</Description>



          <TableList><SiMysql /></TableList>
          <Description>MySQL</Description>

          <TableList><SiFlask /></TableList>
          <Description>Flask</Description>

          <TableList><SiFirebase /></TableList>
          <Description>Firebase</Description>

        </TableMenu>


        <TableMenu>
          <SubHeader>Tools</SubHeader>

          <TableList><DiGithubFull /></TableList>
          <Description>Github</Description>


          <TableList><SiGnubash /></TableList>
          <Description>Bash</Description>


          <TableList><SiPostman /></TableList>
          <Description>Postman</Description>


          <TableList><SiAmazonaws /></TableList>
          <Description>Amazon AWS</Description>


          <TableList><SiHeroku /></TableList>
          <Description>Heroku</Description>


          <TableList><SiAnaconda /></TableList>
          <Description>Anaconda</Description>


        </TableMenu>



        <TableMenu>
          <SubHeader>UI/UX</SubHeader>

          <TableList><FaFigma /></TableList>
          <Description>Figma</Description>


          <TableList><SiAdobephotoshop /></TableList>
          <Description>Adobe Photoshop</Description>

        </TableMenu>


      </TableWrapper>

      <LineBreak />
      <AboutWrapper>

        <AboutText>
        I am an aspiring and ambitious software developer living in Chicago, Illinois. I have a strong desire to kickstart my career in the tech industry and am constantly seeking out new challenges to grow my skills. My passion for software development drives me to stay up to date with the latest trends and technologies in the field. I am determined to succeed and am willing to relocate for the right job opportunity. My dedication and drive are assets that I know will serve me well as I work towards becoming a successful software developer. I am excited to embark on this journey and am committed to achieving my career goals.
        </AboutText>
      </AboutWrapper>
    </AboutMePage>
  )
}
