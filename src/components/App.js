import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsersRequest } from '../actions/users';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  render() {
    return (
      <div>
        <h1>This is my Saga App!!</h1>
      </div>
    );
  }
}

export default connect(
  null,
  {
    getUsersRequest
  }
)(App);
