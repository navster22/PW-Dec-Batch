import { useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Header from './components/Header'
import SubHeader from './components/SubHeader'

function App() {

  const name = "React";

  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      <Header name={name} showCounter={showCounter} setShowCounter={setShowCounter}/>
     {showCounter && <Counter />}
      <SubHeader  name={name}/>
    </>
  )
}

export default App
