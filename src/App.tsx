import "./App.css";
import React from "react";
import { Reset } from "styled-reset";
import Approuter from "./routers/Approuter";
import styled from "styled-components";

const AppDiv = styled.div`
  background-color: #fbdea2;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <React.Fragment>
      <Reset />
      <AppDiv>
        <Approuter />
      </AppDiv>
    </React.Fragment>
  );
}

export default App;
