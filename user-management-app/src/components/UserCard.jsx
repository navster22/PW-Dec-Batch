import React from 'react'
import { useUsers } from '../context/UserContext'

export default function UserCard({user}) {

    const {setSelectedUser} = useUsers();

    const style = {
        border: "1px solid gray",
        margin: 10,
        padding: 10
    }

  return (
    <div style={style}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <button onClick={() => setSelectedUser(user)}>
            Edit
        </button>
    </div>
  )
}
