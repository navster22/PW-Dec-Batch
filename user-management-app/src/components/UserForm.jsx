import React, { useState, useEffect } from 'react'
import { useUsers } from '../context/UserContext';

export default function UserForm({user, onSave}) {

  const {selectedUser, saveUser} = useUsers();  
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if(selectedUser){
        setName(selectedUser.name);
        setEmail(selectedUser.email);
    }
  }, [selectedUser])

  if(!selectedUser) return null;

  function handleSubmit(e){
    e.preventDefault();

    saveUser({
        ...selectedUser,
        name,
        email
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Edit User</h2>
        <input 
            value={name}
            onChange={(e) => setName(e.target.value)} 
        />
        <br />
        <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
        />
        <br />
        <button>Save</button>
    </form>
  )
}

