import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Contact from '../components/Contact.jsx';


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
    <Contact />
    <Footer />
    </>
  )
}

export default HomeA