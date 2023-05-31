import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components'
import { work } from '../utils/data';

export const SpecificWorkPage = styled.div`
width: 100vw;
height: 100vh;

`

export const Header = styled.h1`
text-transform: capitalize;
font-size: 70px;

@media (max-width: 768px) {
  
    margin: 5rem 0rem;
    font-size: 40px;
   
      }
`;

export const Span = styled.h2`
 
font-size: 40px;
color: #fff;

@media (max-width: 768px) {
    font-size: 30px;
      }

`;

export const PreviewWrapper = styled.div`
width: 100%;
height: 60%;
`;
export const Video = styled.video`
border-radius: 3rem;
width: 100%;
height:100%;
@media (max-width: 768px) {
   width: 100%;
   height: 60%;
      }
 
`;
export const Source = styled.source``;


export const TitlesWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-content: center;
align-items: start;
text-align: center;
margin-top: 3rem;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
       }

`;
export const TechUsed = styled.div`
display: flex;
flex-direction: column;
flex:1;
align-content: center;
align-items: center;
text-align: center;
height: 100%;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
       }

`;
export const TechList = styled.div`
text-decoration: none;
list-style: none;
text-align: center;
display: flex;
flex-direction: column;
@media (max-width: 768px) {
      


       }

`;
export const Techs = styled.li`
font-size: 18px;
text-align: center;
display: flex;
flex-direction: column;

 
`;



export const Info = styled.div`
display: flex;
flex-direction: column;
flex:1;
align-content: center;
align-items: center;
text-align: center;


`;
export const Paragraph = styled.p`
font-size: 18px;
text-align: center;

 
`;

export const Links = styled.div`
display: flex;
flex-direction: column;
flex:1;
align-content: center;
align-items: center;
text-align: center;
justify-content: center;


`;
export const LinkList = styled.div`
text-decoration: none;
list-style: none;
font-size: 18px;
text-align: center;
display: flex;
flex-direction: column;
flex:1;
align-content: center;
align-items: center;
 height: 100%;
@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
       }


`;
export const Link = styled.li`
font-size: 18px;
text-align: center;


`;
export const ALink = styled.a`
font-size: 18px;
text-align: center;
text-decoration: none;
color: inherit;

&:hover{
    color: white;
}
`;



export const Title = styled.h2`
color: #fff;
font-size: 37px;
letter-spacing: 2px;

 
`;


export default function SpecificWork() {

    const name = window.location.pathname.split("/work/")[1];

    let newWork = work.filter(function (w) {
        return w.id === name
    })

    console.log(newWork, " new array")

    return (
        <SpecificWorkPage>
            <Navbar />


            {newWork.map((o) => (
                <>
                <Header>Recent Work // <br /> <Span>{o.title}</Span></Header>
                   


                    <PreviewWrapper>
                        <Video autoPlay muted loop>
                            <Source src={o.videoSrc} />
                        </Video>
                    </PreviewWrapper>

                    <TitlesWrapper>
                        <TechUsed>
                            <Title>Tech Used</Title>
                            <TechList>
                                
                                <Techs>{o.techUsed + "\n" } </Techs>
                                
                            </TechList>
                        </TechUsed>
                        <Info>
                            <Title>Info </Title>
                            <Paragraph>{o.info}</Paragraph>
                        </Info>
                        <Links>
                            <Title>Links</Title>
                            <LinkList >
                                <Link>
                                    <ALink href={o.links[0].source} target="_blank" and rel="noopener noreferrer">Source</ALink>
                                </Link>
                                <Link>
                                    <ALink href={o.links[0].live} target="_blank" and rel="noopener noreferrer">
                                        Live Site
                                    </ALink>
                                </Link>

                            </LinkList>

                        </Links>
                    </TitlesWrapper>
                </>

            ))}

        </SpecificWorkPage>
    )
}
