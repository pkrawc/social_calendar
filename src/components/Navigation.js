import React, { PureComponent } from "react"
import styled from "styled-components"
import { colors } from "../variables"
import Tab from "./ui_components/Tab"

const NavWrapper = styled.nav`
  grid-area: nav;
  display: flex;
  align-items: flex-end;
  padding: 0 1em 0 3em;
  color: #bdbdbd;
  .nav_tab {
    margin-right: 2em;
    .tab_label {
      display: block;
      padding-bottom: 1em;
    }
    input:checked + .tab_label {
      color: ${colors.ui.dark};
      border-bottom: 2px solid #404040;
    }
  }
  .site-nav {
    margin-left: auto;
    .mdi {
      display: inline-block;
      margin-left: 1em;
      padding-bottom: 0.5em;
      cursor: pointer;
      font-size: 1.5em;
      &:hover {
        color: ${colors.ui.dark};
      }
    }
  }
`

class Navigation extends PureComponent {
  state = {
    selected: "feed"
  }
  render = _ => (
    <NavWrapper>
      <Tab
        value="feed"
        label="Feed"
        onChange={e => this.setState({ selected: e.target.value })}
        selected={this.state.selected}
      />
      <Tab
        value="popular"
        label="Popular"
        onChange={e => this.setState({ selected: e.target.value })}
        selected={this.state.selected}
      />
      <Tab
        value="around"
        label="Around"
        onChange={e => this.setState({ selected: e.target.value })}
        selected={this.state.selected}
      />
      <div className="site-nav">
        <span className="mdi mdi-magnify" />
        <span className="mdi mdi-message-outline" />
        <span className="mdi mdi-dots-horizontal" />
      </div>
    </NavWrapper>
  )
}

export default Navigation
