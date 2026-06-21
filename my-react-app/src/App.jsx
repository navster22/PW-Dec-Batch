import { useContext, useState } from 'react';
import './App.css'
import Counter from './components/Counter';
import Header from './components/Header'
import SubHeader from './components/SubHeader'
import { useLocalStorage } from './hooks/useLocalStorage';

function App() {

  const name = "React";

  // state for theme const [theme, setTheme] = useState("light");

  const [output, setOutput] = useLocalStorage("name", "")

  console.log(output)

  const [showCounter, setShowCounter] = useState(true);

  return (
    <>
      <Header name={name} showCounter={showCounter} setShowCounter={setShowCounter}/>
     {showCounter && <Counter />}
      <SubHeader  name={name}/>
      <button onClick={() => setOutput("Navneet")}>Add value</button>
    </>
  )
}

export default App
