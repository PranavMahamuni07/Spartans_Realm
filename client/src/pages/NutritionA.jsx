import { createGlobalStyle } from 'styled-components';




import React from 'react'
import Nutrition from '../components/Nutrition.jsx';
import HeaderA from '../components/HeaderA.jsx';

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
    <Nutrition />

    </>
  )
}

export default HomeA