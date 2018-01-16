import React from "react"
import styled from "styled-components"
import { colors } from "../../variables"

const TabWrapper = styled.label`
  cursor: pointer;
  input[type="radio"] {
    display: none;
  }
  input + span {
    display: block;
    color: ${colors.ui.secondaryLight};
  }
`

const Tab = ({ label, value, selected, onChange }) => (
  <TabWrapper className="nav_tab">
    <input
      type="radio"
      value={value}
      checked={selected === value}
      onChange={onChange}
    />
    <span className="tab_label">{label}</span>
  </TabWrapper>
)

export default Tab
