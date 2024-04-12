import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Features from '../components/Features.jsx';


import React from 'react'

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
    <Header />
    <Features />
    <Footer />
    </>
  )
}

export default HomeA