import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import UserListItem from './UserListItem';

function UsersList({ users, onDeleteUserClick }) {
  return (
    <ListGroup>
      {users
        .sort((a, b) => {
          if (a.firstName > b.firstName) {
            return 1;
          } else if (a.firstName < b.firstName) {
            return -1;
          } else if (a.lastName > b.lastName) {
            return 1;
          } else if (a.lastName < b.lastName) {
            return -1;
          } else {
            return 0;
          }
        })
        .map(user => {
          return (
            <ListGroupItem key={user.id}>
              <UserListItem onDeleteClick={onDeleteUserClick} user={user} />
            </ListGroupItem>
          );
        })}
    </ListGroup>
  );
}

export default UsersList;
