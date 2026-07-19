import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router'

export default function Home() {
    const location = useLocation();
    useEffect(() => {
        console.log(location);
    },[])
  return (
    <div>
        <h1>Home</h1>
        <Link to='/dasdsad'>Take me to cart</Link>
    </div>
  )
}
