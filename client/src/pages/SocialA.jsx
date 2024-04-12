import { createGlobalStyle } from 'styled-components';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Hero from '../components/Hero.jsx';
import Gallery from '../components/Gallery.jsx';


import React from 'react'
import Peer from '../components/Peer.jsx';
import HeaderA from '../components/HeaderA.jsx';
import Social from '../components/Social.jsx';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #121212; /* Set your preferred dark mode background color */
    color: #ffffff; /* Set your preferred text color */
    margin: 0;
    font-family: 'Your preferred font stack', sans-serif;
  }
`;
const SocialA = () => {
  return (
    <>
    <GlobalStyle />
    <HeaderA />
    <Social />
    <Footer />
    </>
  )
}

export default SocialA;