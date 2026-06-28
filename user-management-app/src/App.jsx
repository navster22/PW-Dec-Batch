import { useEffect, useState } from 'react'
import './App.css'
import { getUsers, updateUser } from './services/api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import { UserProvider, useUsers } from './context/UserContext';

function App() {
  const {users} = useUsers;
  // const [search, setSearch] = useState("");

  // const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <h1>User Management</h1>
      {/* <input 
        placeholder="Search..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
      /> */}


      <UserList />

      <UserForm/>
    </>
  )
}

export default App
