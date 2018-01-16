import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "../variables"
import Tab from "./ui_components/Tab"

const CalendarWrapper = styled.aside`
  grid-area: calendar;
  background-color: ${colors.primary};
  display: flex;
  flex-flow: column;
  overflow: auto;
  .time_period_select {
    display: flex;
    margin: 3em 0 1em;
    padding-left: 3rem;
    list-style: none;
    .nav_tab {
      margin-right: 1em;
      .tab_label {
        text-transform: uppercase;
        font-size: 0.75em;
      }
      input:checked + .tab_label {
        color: ${colors.ui.light};
      }
    }
  }
  .today {
    position: relative;
    margin-right: 2em;
    padding-left: 3rem;
    h1 {
      color: ${colors.ui.secondary};
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 0;
    }
    .date {
      margin-top: 0;
      color: ${colors.ui.light};
      font-size: 2.5rem;
      font-weight: 400;
    }
    .navigate_days {
      position: absolute;
      right: 0;
      bottom: 0;
      .mdi {
        font-size: 2em;
        color: ${colors.ui.secondary};
      }
    }
  }
  .schedule {
    position: relative;
    flex: 1;
    margin-top: 3em;
    border-top: 1px solid rgba(0, 0, 0, 0.12);
    overflow: auto;
  }
`
class Calendar extends Component {
  state = {
    timePeriod: "day"
  }
  render = _ => (
    <CalendarWrapper timeOfDay={new Date().getHours() * 100}>
      <section className="time_period_select">
        <Tab
          value="day"
          label="day"
          onChange={e => this.setState({ timePeriod: e.target.value })}
          selected={this.state.timePeriod}
        />
        <Tab
          value="week"
          label="week"
          onChange={e => this.setState({ timePeriod: e.target.value })}
          selected={this.state.timePeriod}
        />
        <Tab
          value="month"
          label="month"
          onChange={e => this.setState({ timePeriod: e.target.value })}
          selected={this.state.timePeriod}
        />
      </section>
      <div className="today">
        <h1 className="weekday">Monday</h1>
        <h1 className="date">28 September</h1>
        <span className="navigate_days">
          <span className="mdi mdi-chevron-left" />
          <span className="mdi mdi-chevron-right" />
        </span>
      </div>
      <div className="schedule">
        <Entry title="lunch with Petr" startTime={900} endTime={2400} />
        <Entry title="lunch with Petr" startTime={1030} endTime={2400} />
        <Entry title="lunch with Petr" startTime={1500} endTime={2330} />
      </div>
    </CalendarWrapper>
  )
}

export default Calendar

const EntryWrapper = styled.div`
  padding: 1em 3em 0;
  .time {
    color: ${colors.ui.secondary};
    font-size: 0.75em;
  }
  .title {
    margin-top: 0.25rem;
    color: ${colors.ui.light};
    font-weight: 300;
  }
`

const Entry = ({ startTime, endTime, title }) => (
  <EntryWrapper>
    <span className="time">
      {startTime} - {endTime}
    </span>
    <p className="title">{title}</p>
  </EntryWrapper>
)
