import React, { Component } from "react"
import styled, { injectGlobal } from "styled-components"
import Helmet from "react-helmet"
import { colors } from "./variables"
import Profile from "./components/Profile"
import Calendar from "./components/Calendar"
import Navigation from "./components/Navigation"
import Main from "./components/Main"

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Cabin:400,400i,500,700,700i');
  @import url('https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css');
  *, *:before, *:after {
    box-sizing: border-box;
  }
  :root {
    font-family: 'Cabin', sans-serif;
    font-size: 18px;
    line-height: 1.33;
  }
  html, body {
    position: relative;
    height: 100%;
    width: 100%;
  }
  body {
    margin: 0;
    padding: 0;
  }
`

const Wrapper = styled.div`
  background-color: ${colors.ui.secondary};
  display: grid;
  grid-template-rows: 5em auto;
  grid-template-columns: 33vw auto 15rem;
  grid-template-areas: "profile nav nav" "calendar main activity";
  height: 100vh;
  color: ${colors.ui.dark};
`

const Activity = styled.aside`
  grid-area: activity;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Dreadful Design | Social Calendar</title>
        </Helmet>
        <Profile />
        <Navigation />
        <Calendar />
        <Main />
        <Activity />
      </Wrapper>
    )
  }
}

export default App
