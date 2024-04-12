import { createGlobalStyle } from 'styled-components';

import HeaderA from '../components/HeaderA.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';


import React from 'react'
import HeroA from '../components/HeroA.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212; /* Set your preferred dark mode background color */
    color: #ffffff; /* Set your preferred text color */
    margin: 0;
    font-family: 'Your preferred font stack', sans-serif;
  }
`;
const HomeA = () => {
  return (
    <>
    <GlobalStyle />
    <HeaderA />
    <HeroA />
    <Footer />
    </>
  )
}

export default HomeA