import React from 'react'
import styled from 'styled-components';
 

export const RecentWorkPage = styled.div`
width: 100vw;

`;

export const Title = styled.h1`
color: #3c3c3c;
@media (max-width: 768px) {
    font-size: 30px;
    
  }
.R{
    color: #000;
    font-size: 70px;

    @media (max-width: 768px) {
        font-size: 50px;
        
      }
}
`;

export const RecentWorkWrapper = styled.div`
width: 100%;
display: flex;
 flex-direction: column;

 
`;

export const InnerWrapper = styled.div`
display: flex;
align-content: center;
align-items: center;
margin: 3rem;
 
@media (max-width: 768px) {
   display: flex;
   flex-direction: column;

    
  }
`;


export const RecentWorkImgWrapper = styled.div`
width: 1111px;
height: 666px;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 15px );
-webkit-backdrop-filter: blur( 15px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

 
 
@media (max-width: 768px) {
    width: 100vw;
 
height: 450px;
border-radius: 10px;
object-fit: cover;
  }
`;

export const RecentWorkImg = styled.img`
width: 100%;
height: 100%;
border-radius: 10px;
object-fit: cover;

 
  
`;


export const RecentWorkDescription = styled.div`

display: flex;
max-width: 50vw;
flex-direction: column;
@media (max-width: 768px) {
     max-width: 80vw;
  }
 
`;



export const RecentWorkTitle = styled.h2` 
font-size: 40px;
text-transform: uppercase;
color: #fff;

@media (max-width: 768px) {
    font-size: 20px;
    
  }
`;
export const RecentWorkParagraph = styled.p`
font-size: 20px;

@media (max-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    
  }
`;



export const data = [
    {
        title: "Clothing Brand E Commerce ",
        paragraph: "A full fledged e-commerce website and my biggest project to date. This React project contains a multitude of features including full checkout functionality with Stripe, order history, wishlists, stunning UI, in-house user authorization and authentication, and much more.",
        imglink: "https://ontallme.sirv.com/makadsa%20website%20screenshot.PNG",
    },
    {
        title: "Netflix Clone 2.0",
        paragraph: "A replica to a very popular streaming service called Netflix. This project's main feature is the use of Firebase as a way to store data and authenticate and authorize users. But it was mainly for me to practice the use of compound components in React — an advanced pattern of React which makes use of an interesting way to communicate the relationship between UI components and share implicit state by leveraging an explicit parent-child relationship.",
        imglink: "https://ontallme.sirv.com/netflix%20clone.PNG",
    },

]

export default function RecentWork() {
    return (
        <RecentWorkPage>

            <Title>
                <span className='R'>R</span>ecent Work
            </Title>


            <RecentWorkWrapper>
                {data.map((d) => (

                    <InnerWrapper left>
                        <RecentWorkImgWrapper>
                            <RecentWorkImg src={d.imglink} />
                        </RecentWorkImgWrapper>


                        <RecentWorkDescription>
                            <RecentWorkTitle>{d.title}</RecentWorkTitle>
                            <RecentWorkParagraph>{d.paragraph}</RecentWorkParagraph>
                        </RecentWorkDescription>
                    </InnerWrapper>

                ))}
            </RecentWorkWrapper>
        </RecentWorkPage>
    )
}
