import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../components'
import { BsTelephone } from 'react-icons/bs';
import { HiOutlineMail, HiOutlineLocationMarker } from 'react-icons/hi';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export const ContactPage = styled.div`
width: 100vw;
height: 100vh;


`;

export const Title = styled.h1`
font-size: 70px;
text-transform: capitalize;
color: #3c3c3c;

@media (max-width: 768px) {
  
    margin: 5rem 0rem;
    font-size: 40px;
   
      }

`;
export const SubTitle = styled.h4`
 font-weight: 500;
text-transform: capitalize;
 color: #808080;

`;


export const ContactWrapper = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
align-content: center;
align-items: center;
text-align: center;

@media (max-width: 768px) {
  
    display: flex;
    flex-direction: column;
    align-content: center;
    align-text: center;
    justify-content: center;
    
        
      }

`;

export const FormWrapper = styled.div`
 width: 100%;
display: flex;
justify-content: center;
align-items: center;
align-content: center;

 


`;
export const Form = styled.form`
display: flex;
flex-direction: column;
 width: 50%;

 @media (max-width: 768px) {
  
    width: 80%;
        
      }
 
`;

export const InfoWrapper = styled.div`
 width: 100%;
 display: flex;
 
 @media (max-width: 768px) {
  
    width: 80%;

      }
 
`;

export const Input = styled.input`

background-color: transparent;
  border: 0;
  border-bottom: 2px #fff solid;
  display: block;
  width: 100%;
  padding: 28px 0;
  font-size: 18px;
  color: #fff;

margin: 3rem 0;
  &:focus{
    outline: 0;
    border-bottom-color: #E3CFBB;
  }

 
`;

export const Send = styled.button`
padding: 0.8em 1.7em;
background-color: transparent;
border-radius: .6em;

position: relative;
overflow: hidden;
cursor: pointer;
transition: .5s;
font-weight: 400;
font-size: 17px;
border: 1px solid #E3CFBB;
font-family: inherit;
text-transform: uppercase;
color: #000;
font-weight: 600;
z-index: 1;

`;


export const Wrapper = styled.div`
width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 align-content: center;

`;

export const InnerWrapper = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
width: 50%;
margin: 3rem 0;

@media (max-width: 768px) {
  
    width: 100%;
    
        
      }

`;


export const Icon = styled.i`
width: 100px;
height: 100px;


display: flex;
align-content: center;
margin: auto;
text-align: center;
align-items: center;
border-radius: 50%;

.icons{
    position: relative;
     margin: auto;
      width: 50px;
      height: 50px;
      color: #fff;
}

@media only screen and (max-width: 600px) {
    .icons {
        width: 40px;
        height: 40px;
        
    }
  }

`;
export const ContactButton = styled.a`
width: 100%;
background-color: red;
height: 70%;
text-align: center;
display: flex;
align-content: center;
justify-content: center;
align-items: center;
font-size: 24px;
font-weight: 500;
border-radius: 3rem;
color: #3c3c3c;
text-decoration: none;


background: rgba( 255, 255, 255, 0.6 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
backdrop-filter: blur( 11.5px );
-webkit-backdrop-filter: blur( 11.5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );

@media (max-width: 768px) {
  
    font-size: 18px;

      }
`;




export default function Contact() {
    const form = useRef();


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_hbm0rif', 'template_29ybzcdd', form.current, 'YY4E9DVNN1rO42xnQ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <ContactPage>
            <Navbar />
            <Title>Let's Talk!</Title>
            <SubTitle>You will hear back from me within 24 hours.</SubTitle>

            <ContactWrapper>

                <FormWrapper>

                    <Form ref={form} onSubmit={sendEmail}>
                        <Input placeholder="Name*" required />
                        <Input placeholder="E-mail*" required />

                        <Input placeholder="Phone Number*" required />

                        <Input placeholder="Message*" required />

                        <Send type='submit'>Send</Send>
                    </Form>
                </FormWrapper>

                <InfoWrapper>
                    <Wrapper>

                        <InnerWrapper>

                            <Icon ><BsTelephone className="icons" /></Icon>
                            <ContactButton href="tel:504-327-9735">(504) 327-9735</ContactButton>
                        </InnerWrapper>

                        <InnerWrapper>

                            <Icon ><HiOutlineMail className="icons" /></Icon>
                            <ContactButton href="mailto:work.ogq@gmail.com">work.ogq@gmail.com</ContactButton>
                        </InnerWrapper>

                        <InnerWrapper>

                            <Icon ><HiOutlineLocationMarker className="icons" /></Icon>
                            <ContactButton >Chicago, Illinois</ContactButton>
                        </InnerWrapper>


                    </Wrapper>
                </InfoWrapper>

            </ContactWrapper>
        </ContactPage>
    )
}
