import { useEffect, useRef, useState, useMemo, useContext, useCallback } from "react"
import { ThemeContext } from "../context/ThemeContext";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(true);
    const [output, setOutput] = useState(0);
    const {theme, toggleTheme} = useContext(ThemeContext);

    

    const onIncrease = () => {
        setCount(count+1);
    }

    const onDecrease = () => {
        setCount(count-1);
    }


    const doDouble = function(n){
        console.log("Calculating...");
        // Expensive
        return n*2;
    }

    const random = function(){
        console.log("Doing Nothing")
    }

    const outputMemo = useCallback(() => doDouble(count), [doDouble, count])

    // useMemo(() => doDouble(output), [Dependency array]) --> Memoizes the value
    // useCallback --> Memoizes the function/method

    return (
        <div style={{backgroundColor: theme === 'light' ? 'beige' : "grey"}}>
            <h3>Counter: {count}</h3>
            <h3>Double: {outputMemo()}</h3>
            <button onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
            <br></br>
            <input type="text" onChange={(e) => setOutput(parseInt(e.target.value) || 0)}></input>
            {/* <h3>Output: {outputMemo}</h3> */}
        </div>
    )
}


/* React hooks
 useState

 GP --> Parent --> Child [Props]

 */
