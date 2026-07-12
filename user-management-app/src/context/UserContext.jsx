import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUsers, updateUser } from '../services/api';


const UserContext = createContext();

export function UserProvider({children}){
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            const data = await getUsers();
            setUsers(data);
        }
        loadUsers();
    }, [])

    async function saveUser(updatedUser) {
        const savedUser = await updateUser(updatedUser);
        setUsers((prev) =>
            prev.map((user) => 
            user.id === savedUser.id ? {...user, ...savedUser }: user
            )
        );
        setSelectedUser(null);
        return savedUser;
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

export const useUsers = () => useContext(UserContext);

