import { createGlobalStyle } from 'styled-components';

import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';


import React from 'react'
import HeaderA from '../components/HeaderA.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212; /* Set your preferred dark mode background color */
    color: #ffffff; /* Set your preferred text color */
    margin: 0;
    font-family: 'Your preferred font stack', sans-serif;
  }
`;
const FeaturesA = () => {
  return (
    <>
    <GlobalStyle />
    <HeaderA />
    <Features />
    <Footer />
    </>
  )
}

export default FeaturesA