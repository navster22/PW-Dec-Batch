import { useEffect, useRef, useState, useMemo } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);
    const [isDark, setIsDark] = useState(true);
    const [output, setOutput] = useState();
    

    const buttonRef = useRef();
    const inputRef = useRef();



    const onIncrease = () => {
        setCount(count+1);
    }

    const onDecrease = () => {
        setCount(count-1);
    }

    const changeName = function() {
        buttonRef.current.innerText = "green";
    }

    const addData = () => {
        for(let i = 0; i < 9000000000; i++){

        }
        setOutput(inputRef.current.value);
    }

    useEffect(() => {
        console.log("Hello");
        return () => {
            console.log("This is unmounted now")
        }
    }, []);

    const dark = {
        backgroundColor: "black",
        color: "white"
    }

    const light = {
        backgroundColor: "white",
        color: "black"
    }

    const double = useMemo(() => {
        console.log("Calculating...")
        return count * 2
    },[count]);

    return (
        <div style={isDark ? dark : light}>
            <h3>Counter: {count}</h3>
            <h3>Double: {double}</h3>
            <button ref={buttonRef} onClick={onIncrease}>Increase</button>
            <button onClick={onDecrease}>Decrease</button>
            <button onClick={changeName}>Change Name</button>
            <button onClick={() => setIsDark(!isDark)}>Change Theme</button>
            <br></br>
            <input ref={inputRef} type="text"></input>
            <button onClick={addData}>Add</button>
            <h3>Output: {output}</h3>
        </div>
    )
}
