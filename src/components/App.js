import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUsersRequest,
  createUserRequest,
  deleteUserRequest,
  usersError
} from '../actions/users';
import UsersList from './UsersList';
import NewUserForm from './NewUserForm';
import { Alert } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);

    this.props.getUsersRequest();
  }

  handleCreateUserSubmit = ({ firstName, lastName }) => {
    this.props.createUserRequest({
      firstName,
      lastName
    });
  };

  handleDeleteUserClick = userId => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.usersError({
      error: ''
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
        <h2>Users</h2>
        <Alert
          color='danger'
          isOpen={!!users.error}
          toggle={this.handleCloseAlert}
        >
          {users.error}
        </Alert>
        <NewUserForm onSubmit={this.handleCreateUserSubmit} />
        {!!users.items && !!users.items.length && (
          <UsersList
            onDeleteUserClick={this.handleDeleteUserClick}
            users={users.items}
          />
        )}
      </div>
    );
  }
}

export default connect(
  ({ users }) => ({ users }),
  { getUsersRequest, createUserRequest, deleteUserRequest, usersError }
)(App);
