function Header(props) {

    const sayHello = function(){
        return "Hello"
    }

    return <>
        <h1 style={{backgroundColor: "red"}}>{sayHello()}{props.name}
            <button onClick={() => props.setShowCounter(!props.showCounter)}>Show</button>
        </h1>
    </>
}

export default Header;