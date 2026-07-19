import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../slices/themeSlice'
import '../App.css'

export default function Theme() {

    const dark = useSelector((state) => state.theme.dark);
    const dispatch = useDispatch();


  return (
    <div>
        <h2>Theme</h2>
        <p>{dark ? "Dark Mode" : "Light Mode"}</p>
        <button onClick={() => dispatch(toggleTheme())}>
            Toggle Theme
        </button>
    </div>
  )
}
