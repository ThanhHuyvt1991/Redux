import React from "react";
import { connect } from "react-redux";
import Post from "../components/Post";
import { deletePost } from "../actions";

function PostList({ newPosts, onDelete }) {
  return (
    <div>
      {newPosts.map(post => {
        return <Post post={post} key={post.id} onDelete={onDelete} />;
      })}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    newPosts: state.posts
  };
}
function mapDispatchToProps(dispatch) {
  return {
    onDelete(id) {
      dispatch(deletePost(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
