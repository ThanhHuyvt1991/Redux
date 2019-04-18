import React, { Component } from "react";
import "./App.css";
import CreatePost from "./containers/CreatePost";
import PostList from "./containers/PostList";
import uuidv4 from "uuid/v4";

class App extends Component {
  componentDidMount() {
    console.log("id", uuidv4());
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <CreatePost />
          </div>
          <div className="xs-6">
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
