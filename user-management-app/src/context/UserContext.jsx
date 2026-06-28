import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUsers, updateUser } from '../services/api';


const UserContext = createContext();

export function UserProvider({children}){
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(async () => {
        await getUsers().then(setUsers);
    }, [])

    async function saveUser(updatedUser) {
        await updateUser(updatedUser);
        setUsers((prev) =>
            prev.map((user) => 
            user.id === updatedUser.id ? updatedUser : user
            )
        );
        setSelectedUser(null);
    }

    return (
        <UserContext.Provider
            value={{
                users, selectedUser, setSelectedUser, saveUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUsers = () => useContext(UserProvider);

