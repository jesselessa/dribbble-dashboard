// REACT
import React from "react";
// STYLED COMPONENTS
import { createGlobalStyle } from "styled-components";
// COMPONENTS
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Agenda from "./components/Agenda";
// FONT-FAMILY
import Poppins from "./fonts/Poppins/Poppins-Regular.ttf";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <Dashboard />
      <Agenda />
    </div>
  );
}

export default App;

//***************** STYLES ******************//

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: "Poppins";
    src: url(${Poppins}) format("ttf")
}
::before, ::after, *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body{
  font-family: "Poppins", sans-serif;
  font-size: 1.5rem;
  color: #33007b;
}
.App {
  display: flex;
  width: 100vw;
  max-width: 100%;
}
/*************** MEDIA QUERIES *****************/
.App {
  @media screen and (max-width: 1355px) {
    flex-direction: column-reverse;    
  }
}
`;
