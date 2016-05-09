import React from 'react';

export default class TodoListHeader extends React.Component {
  render() {
    return (
        <thead>
          <tr>
            <th>tasks</th>
            <th>actions</th>
          </tr>
        </thead>
    );
  }
}
