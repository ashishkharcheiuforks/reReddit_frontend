import React, { Component } from "react";
 
class Posts extends Component {
  render() {
    return (
      <div>
        <h2>Posts</h2>
        <p>Top Posts:</p>
        <ol>
          <li>{process.env.REACT_APP_DEV_API_ROOT}</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
      </div>
    );
  }
}
 
export default Posts;