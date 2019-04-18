import React, { Component } from "react";

const styles = {
  mt0: {
    marginTop: "0"
  }
};
class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({ title: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.title) {
      this.props.onAddPost(this.state.title);
      this.setState({
        title: ""
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2 style={styles.mt0}>Manager User</h2>
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="FullName"
              className="form-control"
              onChange={this.handleInputChange}
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Add New
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default NewPost;
