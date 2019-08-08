import React from 'react'

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
        {props.users.length > 0 ? (
            props.users.map(user => (
            <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                <button onClick={() => {props.editRow(user)}} className="button accent-button">
                    Edit
                </button> &nbsp;
                <button onClick={() => props.deleteUser(user.id)} className="button danger-button ">
                    Delete
                </button>
                </td>
            </tr>
            ))
        ) : (
        <tr>
            <td colSpan={3}>No users</td>
        </tr>
        )}
    </tbody>
  </table>
)

export default UserTable