import React, { Component } from "react"
import styled from "styled-components"
import { colors } from "../variables"

const MainWrapper = styled.main`
  grid-area: main;
  background-color: ${colors.ui.light};
  box-shadow: 0 3px 24px rgba(0, 0, 0, 0.12);
  overflow: auto;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  .main_list {
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: auto;
  }
`

const Main = props => (
  <MainWrapper>
    <ul className="main_list">
      <FeedItem comments={["oh my gawd I love the show"]} />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </ul>
  </MainWrapper>
)

export default Main

const FeedItemWrapper = styled.li`
  border-bottom: 1px solid #bdbdbd;
  padding: 2rem;
  color: ${colors.ui.dark};
  .item_date {
    color: #bdbdbd;
    font-size: 0.75em;
  }
  .item_info {
    display: flex;
    .mdi {
      color: ${colors.ui.secondary};
    }
    .user {
      display: flex;
      align-items: center;
      margin-right: auto;
      font-size: 0.75em;
      .user_photo {
        display: block;
        margin-right: 1rem;
        height: 2rem;
        width: 2rem;
        background-color: #bdbdbd;
        border-radius: 50%;
      }
    }
    .likes,
    .comment_count {
      color: ${colors.ui.secondary};
    }
    .comment_count {
      margin-left: 1em;
    }
  }
  .comment_list {
    list-style: none;
    margin: 0;
    padding: 1em 0;
    display: ${({ comments }) => (comments ? "block" : "none")};
  }
`

class FeedItem extends Component {
  state = {
    commentsOpen: false
  }
  render = _ => (
    <FeedItemWrapper comments={this.state.commentsOpen}>
      <p className="item_date">20 Sep 19:00</p>
      <h2 className="item_title">New Episode of Game of Thrones</h2>
      <div className="item_info">
        <div className="user">
          <span className="user_photo" />
          <span className="user_name">Nicole Green</span>
        </div>
        <div className="likes">
          <span className="mdi mdi-heart-outline" />{" "}
          {this.props.likesCount || 0}
        </div>
        <div
          className="comment_count"
          onClick={e =>
            this.setState({ commentsOpen: !this.state.commentsOpen })}
        >
          <span className="mdi mdi-message">
            {" "}
            {(this.props.comments && this.props.comments.length) || 0}
          </span>
        </div>
      </div>
      <ul className="comment_list">
        {this.state.commentsOpen &&
          this.props.comments && [
            this.props.comments.map(comment => <li>{comment}</li>),
            <li>
              <input type="text" />
            </li>
          ]}
      </ul>
    </FeedItemWrapper>
  )
}
