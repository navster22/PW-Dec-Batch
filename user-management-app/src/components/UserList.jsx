import React from 'react'
import UserCard from './UserCard'
import { useUsers } from '../context/UserContext'

export default function UserList() {
    const {users} = useUsers();
  return (
    <div>
        {users.map((user) => 
            <UserCard
                key={user.id}
                user={user}
            />
        )}
    </div>
  )
}
