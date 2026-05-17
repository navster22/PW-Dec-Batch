const button = document.getElementById("btn");
const input = document.getElementById("keyboardInput");
const result = document.getElementById("result");
const countText = document.getElementById("count");
const reset = document.getElementById("reset");
const country = document.getElementById("country");
const form = document.getElementById("form");
const successMsg = document.getElementById("successMsg");

// const clicked = function (){
//     console.log("Button is clicked!")
// }

// button.onclick = clicked;

// Event listner

let count = 0;
countText.innerText = count


button.addEventListener("click", () => {
    count++;
    countText.innerText = count
}); // Always use this.
button.addEventListener("mouseover", (e) => {
    console.log(e);
    count--;
    countText.innerText = count
});
input.addEventListener("keydown", function(event) {
    console.log(event);
    result.innerHTML = `Key Pressed: ${event.key} <br> Key Code: ${event.keyCode}`
})
reset.addEventListener("click", function(){
    count = 0;
    countText.innerText = count
})
country.addEventListener("change", function(){
    if(country.value === ""){
        currentCountry.textContent = ``;
        return;
    }
    currentCountry.textContent = `Selected country is ${country.value}`
})

form.addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email");
    if(email.value === ""){
        successMsg.innerText = "Please enter email"
        successMsg.style.color = "red";
    } else {
        successMsg.innerText = "Email submitted successfully"
        successMsg.style.color = "green";
    }
    successMsg.style.display = "block";
})

// Password Verification

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

let pass = "";
let conf = "";
let msg = "";


password.addEventListener("keydown", function(event){
    pass = event.target.value;
    if(pass === conf){
        msg = "Password matched"
    } else {
         msg = "Password does not match"
    }
    if(pass === "") msg = "";
    message.innerText = msg;
})

confirmPassword.addEventListener("keydown", function(event){
    conf = event.target.value;
    if(pass === conf){
        msg = "Password matched"
    } else {
         msg = "Password does not match"
    }
    message.innerText = msg;
})

// Show password 

const checkbox = document.getElementById("showPassword");

checkbox.addEventListener("change", function(){
    if(checkbox.checked){
    password.type = "text";
    confirmPassword.type = "text"
    } else {
        password.type = "password";
        confirmPassword.type = "password"
    }
})

// Event Bubbling

const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");



grandParent.addEventListener("click", () => console.log("grandParent clicked"));
parent.addEventListener("click", (e) => {
        e.stopPropagation();
    console.log("parent clicked")
});
child.addEventListener("click", (e) =>{ 
    console.log("child clicked")
});


