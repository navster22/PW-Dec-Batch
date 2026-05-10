console.log("DOM manupulation")

let button = document.getElementById("btn");
//let buttons = document.getElementsByClassName("btn")// Return an HTMl collection which looks like an array.
// let buttons = document.getElementsByTagName("button");
let buttons = document.querySelectorAll("button");
let names = document.getElementsByName("gender");

let firstButton = document.querySelector(".btn");

console.log(button);
console.log(buttons);
console.log(firstButton);


button.innerText = "This is changed";

let p = document.createElement("p");

p.innerText = "This is new element";

console.log(p);

document.querySelector("#blk").appendChild(p).style.backgroundColor = "red";

/// Change background coclor for table




for(let i = 0; i < 3; i++){
  let r = document.createElement("tr");
  let td = document.createElement("td");

  td.innerText = `New item ${i}`;

  r.appendChild(td);

  document.querySelector("table").appendChild(r);
}

let rows = document.querySelectorAll("table tr");


rows.forEach((row, index) =>{
    if(index % 2 === 0){
        row.style.backgroundColor = "green"
    }
})

