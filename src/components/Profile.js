import React from "react"
import styled from "styled-components"
import { colors } from "../variables"

const ProfileWrapper = styled.section`
  grid-area: profile;
  background-color: ${colors.primary};
  display: flex;
  .card {
    position: relative;
    display: flex;
    flex: 1;
    margin-left: 3rem;
    background-color: ${colors.secondary};
    border-radius: 0 0 0 2px;
    box-shadow: 0 3px 24px rgba(5, 5, 5, 0.24);
    overflow: hidden;
    z-index: 999;
  }
  .profile_image {
    background-image: ${({ url }) => `url(${url})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 5rem;
    width: 5rem;
    opacity: 0.72;
  }
  .contact {
    display: flex;
    flex-flow: column;
    justify-content: center;
    padding: 1em;
    color: #f5f5f5;
    p {
      margin: 0;
      font-weight: 700;
    }
    p:nth-of-type(2) {
      margin-top: 0.5em;
      color: #e0e0e0;
      font-size: 0.75em;
      font-weight: 400;
    }
  }
`

const Profile = props => (
  <ProfileWrapper url="https://unsplash.it/200/200">
    <div className="card">
      <div className="profile_image" />
      <div className="contact">
        <p>James McCorden</p>
        <p>james_mc.face@yahoo.com</p>
      </div>
    </div>
  </ProfileWrapper>
)

export default Profile
