import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header(props) {

    const changeTheme = useContext(ThemeContext).toggleTheme;

    const sayHello = function(){
        return "Hello"
    }

    return <>
        <h1 style={{backgroundColor: "red"}}>{sayHello()}{props.name}
            <button onClick={() => props.setShowCounter(!props.showCounter)}>Show</button>
            <button onClick={() => changeTheme()}>Change theme</button>
        </h1>
    </>
}

export default Header;