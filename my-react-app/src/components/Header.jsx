function Header() {

    const sayHello = function(){
        return "Hello"
    }

    return <>
        <h1 style={{color: "red", fontSize: "200px"}}>{sayHello()}</h1>
    </>
}

export default Header;