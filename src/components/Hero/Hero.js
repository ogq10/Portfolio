import React from 'react'
import styled from 'styled-components'
import { SlGlobe } from 'react-icons/sl';
import { motion } from 'framer-motion';

export const HeroContainer = styled.div`
width: 100vw;
height: 100vh;

.marquee {
    position: relative;
    width: 100vw;
    max-width: 100%;
    height: 506px;
    overflow-x: hidden;
  }
  
  .track {
    position: absolute;
    white-space: nowrap;
  }
  
  .track > h1 {
    margin: 20px 0;
    font-size: 12rem;
    color: #3c3c3c;

    @media (max-width: 768px) {
        font-size: 3rem;

      }
     
  }
}
`;

export const PictureContainer = styled.div`
width: 100vw;
height: 75vh;
position: relative;

 

`;
export const PictureWrapper = styled.div`
width: 777px;
height: 777px;
border-radius: 50%;
background: rgba( 255, 255, 255, 0.5 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 10px );
 
border: 1px solid rgba( 255, 255, 255, 0.18 );
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
@media (max-width: 768px) {
    width: 333px;
    height: 333px;
    top: 50%;
left: 50%;
transform: translate(-50%, -50%);

  }
 

`;

export const Image = styled.img`
object-fit: cover;
width: 90%;
height: 90%;
border-radius: 50%;
margin: auto;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

 


`;


export const LabelWrapper = styled.div`
width: 100%;
height: 4rem;

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background: rgba( 255, 255, 255, 0.6 );
box-shadow: 0 1px 2px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 17.5px );
-webkit-backdrop-filter: blur( 17.5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );

text-align: center;

 

`

export const LabelTitle = styled.h2`
display: flex;
justify-content: center;
align-text: center;
align-items: center;
text-align: center;
letter-spacing: 2px;
`;


export const LocationContainer = styled.div`
width: 333px;
height: 5rem;
display: flex;
justify-content: space-between;
align-content: center;
align-items: center;


border: 1px solid rgba(255, 255, 255, 0.3);
 
/* From https://css.glass */
background: rgba(255, 255, 255, 0.72);
border-radius: 0rem 1rem 1rem 0rem;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
position: absolute;
top: 50%;

@media (max-width: 768px) {
    width: 80%;
    top: 70%;
 

  }

`;
export const LocationWrapper = styled.div`
display: flex;
 
width: 100%;
justify-content: space-evenly;

`;

export const LocationTitle = styled.h3`
color: #fff;
font-size: 20px;
background: -webkit-linear-gradient(#536976, #292e49);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

`;
export const LocationIconWrapper = styled.div`
width: 4rem; 
height: 4rem; 

/* From https://css.glass */
background: rgba(255, 255, 255, 0.72);
border-radius: 0rem 1rem 1rem 0rem;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);

border-radius: 50%; 
position: relative;
display: flex;
justify-content: center;
align-items: center;
align-content: center;

  `;
export const LocationIcon = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;

.icon{
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;   
    animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  width: 45px;
  height: 45px;

}
 
@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
    `;

//variatnts
const marqueeVariants = {
    animate: {
        x: [0, -2000],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: [0.44, 0.55, 0.66, 0.77]
            },
        },
    },
};


export default function Hero() {
    return (
        <HeroContainer>
            <LocationContainer>
                <LocationWrapper>

                    <LocationTitle>Located in Chicago, IL</LocationTitle>
                    <LocationIconWrapper>
                        <LocationIcon >
                            <SlGlobe className='icon' />
                        </LocationIcon>
                    </LocationIconWrapper>
                </LocationWrapper>

            </LocationContainer>
            
            <PictureContainer>
                <PictureWrapper>
                    <Image src='https://ontallme.sirv.com/GettyImages-1167845553.jpeg'>

                    </Image>
             

                </PictureWrapper>
            </PictureContainer>


            <div className="marquee">
  
                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <h1>
                        OMAR QORAN —  OMAR QORAN —  OMAR QORAN
                        OMAR QORAN —  OMAR QORAN —  OMAR QORAN
                    </h1>
                </motion.div>
            </div>



        </HeroContainer>
    )
}
