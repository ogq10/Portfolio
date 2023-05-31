import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const WorkPage = styled.div`
width: 100vw;
height: 100vh;
 

.inner-carousel {
    display: flex;
    height: 100%;
    width: 90%;

    @media (max-width: 768px) {
  
       width: 100vw;
        height: 100%;
        padding: 1rem;
      
    }
   }
  
.carousel {
    cursor: grab;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
     
    width: 80%;
    margin: auto;
    justify-content: center;

    @media (max-width: 768px) {
  
        
        height: 100%;
        width: 100vw;
          }

    
  }
  
  .slideWrapper {
    position: relative;

    @media (max-width: 768px) {
  
      
       height: 64.6vh;
         }
  }
  
  .card{
    backdrop-filter: blur(10px) saturate(196%);
    -webkit-backdrop-filter: blur(10px) saturate(196%);
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    margin: 3rem;
     height: 100%;
     padding: 2px;

     @media (max-width: 768px) {
  
         
        height: 70%;
       margin: 1rem 2rem; 
        
          }
      

  }
  .slideImages {
    border-radius: 12px;
    border: 1px solid rgba(209, 213, 219, 0.3);
    width: 717px;
    height: 700px;
    object-fit: cover;

    @media (max-width: 768px) {
  
      
        height: 100%;
    width: 500px;
    

           }
 
     
  }
  .cardTitle{
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 28px;

    @media (max-width: 768px) {
  
        font-size: 20px;
         }
  }

  .ViewLink{
    text-decoration: none;
    color: inherit;
     
     

  }

  .ViewButton{
    background: rgba( 255, 255, 255, 0.6 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.17 );
backdrop-filter: blur( 11.5px );
-webkit-backdrop-filter: blur( 11.5px );
border: 1px solid rgba( 255, 255, 255, 0.18 );
border-radius: 23px;
text-transform: uppercase;
font-size: 19px;
width: 23%;
margin: 0 0 2.3rem 0rem;
padding: .7rem;
text-align: center;
cursor: pointer;
 
@media (max-width: 768px) {
  
   font-size: 12px;
       }
  
  

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



const showcase = [
    {
        title: "E-Commerce Store",
        link: "/work/ecommerce",
        imgLink: "https://ontallme.sirv.com/makadsa%20website%20screenshot.PNG"
    },

    {
        title: "Netflix Clone",
        link: "/work/netflix",
        imgLink: "https://ontallme.sirv.com/netflix%20clone.PNG"
    },
    {
        title: "Celebrity Image Recognition",
        link: "/work/celeb",
        imgLink: "https://ontallme.sirv.com/Celeb.7975a140.jpg"
    },
    {
        title: "Weather Forecast",
        link: "/work/weather",
        imgLink: "https://ontallme.sirv.com/weather.1986fc1b.png"
    },
    {
        title: "Movie Soundtrack Player",
        link: "/work/movie",
        imgLink: "https://ontallme.sirv.com/movie%20player.jpg"
    }



]
export default function Work() {

    const [width, setWidth] = useState(0);


    const carousel = useRef();
    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
        }
    }, [width]);

    console.log(carousel)
    return (
        <WorkPage>
            <Navbar />
            <Header>Recent Work</Header>


            <div className="slideWrapper">
                <motion.div
                    ref={carousel}
                    className="carousel"
                    layout
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="inner-carousel"
                    >
                        {showcase.map((s) => (
                            <div className='card'>

                                <img className="slideImages" src={s.imgLink} />
                                <h3 className='cardTitle'>{s.title}</h3>
                                <NavLink className="ViewLink" to={s.link}>
                                    <button className='ViewButton'>Learn More</button>
                                </NavLink>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>


        </WorkPage>
    )
}
