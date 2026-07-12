import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import {buyApple, buyBanana, clearCart} from './slices/cartSlice'
import { toggleTheme } from './slices/themeSlice'

function App() {

  const dispatch = useDispatch();
  
  const apple = useSelector((state) => state.cart.apple);
  const banana = useSelector((state) => state.cart.banana);

  const dark = useSelector((state) => state.theme.dark);

  const totalItems = apple + banana;

  return (
    <div className={dark ? "dark" : ""}>
      <h1>Redux Demo</h1>
      <hr/>
      <h2>Cart</h2>
      <p>🍎 Apples: {apple}</p>
      <p>🍌 Bananas: {banana}</p>
      <p>Total Items: {totalItems}</p>

      <button onClick={() => dispatch(buyApple())}>
        Buy Apple
      </button>

      <button onClick={() => dispatch(buyBanana())}>
        Buy Banana
      </button>

      <button onClick={() => dispatch(clearCart())}>
        Clear Cart
      </button>

      <hr />
      <h2>Theme</h2>
      <p>{dark ? "Dark Mode" : "Light Mode"}</p>
      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  )
}

export default App
