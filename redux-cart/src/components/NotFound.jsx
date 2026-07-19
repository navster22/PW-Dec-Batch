import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export default function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        let key = location.key;
        console.log(location);
        if(key === 'default'){
            setTimeout(() => {
                navigate('/');
            },3000)
        }
    },[])
  return (
    <div>
        <h1>404</h1>
        <h1>Not found</h1>
    </div>
  )
}
