import React from 'react'
import styled from 'styled-components';
import { Hero, Navbar } from '../components'
import About from './about';
import LetsChat from './letsChat';
import RecentWork from './recentWork';

export const HomePage = styled.div`
width: 100vw;
height: 100vh;
 

`;

export default function Home() {
    return (
        <HomePage>
            <Navbar />
            <Hero />
            <About />
            <RecentWork />
            <LetsChat />
        </HomePage>
    )
}
