import React from 'react'
import styled from 'styled-components';


export const LetsChatPage = styled.div`
width: 100vw;
background-color: #fff;
 
`;

export const Title = styled.h1`
color: #3c3c3c;
 
@media (max-width: 768px) {
    font-size: 30px;
    
  }
.L{
    
    font-size: 70px;
color: #000;
@media (max-width: 768px) {
    font-size: 50px;
    
  }
 
 

}

`;


export const GiTWrapper = styled.div`
width: 100%;
height: 300px;

 

`
export const Line = styled.hr`
height: 10px;
width: 80%;
background-color: #000;
 

`

export const LineCircleWrapper = styled.div`
position: relative;
width: 100%;
height: 211px;
 display: flex;
align-content: center;
align-items: center;
justify-content: center;
 
`;

export const Circle = styled.div`
width: 170px;
height: 170px;
border-radius: 50%;
background-color: #3c3c3c;
display:flex;
align-items: center;
text-transform: uppercase;
color: #fff;
text-align: center;
align-content: center;
justify-content: center;
font-weight: 500;

position: absolute;
 
top: 10%;
right: 20%;

 


`

export const ContactWrapper = styled.div`
width: 40%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
height: 200px;

@media (max-width: 768px) {
 
   width: 100%;
    
  }
`


export const Email = styled.a`
 
 margin: 0 16rem;
  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.9);
  border: 1px solid rgba(0,0,0,0.9);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;
  @media (max-width: 768px) {
  
 margin: 1rem;
 padding: 24px 32px;
    
  }

`

export const PhoneNumber = styled.a`
 
 
margin: 0 16rem;

  padding: 24px 32px;
  border: 0;
  text-decoration: none;
  border-radius: 10px;
  background-color: rgba(0,0,0,0.9);
  border: 1px solid rgba(0,0,0,0.9);
  backdrop-filter: blur(30px);
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  letter-spacing: 2px;
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 768px) {
  
    margin: 1rem;
    padding: 24px 32px;
       
     }
`



export default function LetsChat() {
    return (
        <LetsChatPage>
            <Title><span className='L'>L</span>et's Chat!</Title>

            <GiTWrapper>
                <LineCircleWrapper>
                    <Line />
                    <Circle>Get in Touch!</Circle>

                </LineCircleWrapper>
            </GiTWrapper>

            <ContactWrapper>

                <Email href="mailto:work.ogq@gmail.com">work.ogq@gmail.com</Email>

                <PhoneNumber href="tel:504-327-9735">(504)327-9735</PhoneNumber>
            </ContactWrapper>
        </LetsChatPage>
    )
}
