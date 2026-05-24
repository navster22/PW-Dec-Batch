console.log(1)
console.log(2);

let timer = document.getElementById("timer");
let count = 0;

const timeOut = setTimeout(() => {
    console.log(3)
}, 2000)

// const interval = setInterval(() => {
//     count++;
//     timer.innerText = count;
// }, 1000)


const stop = function(){
    clearTimeout(timeOut);
    // clearInterval(interval)
}

console.log(4)

// Promises

const promise = new Promise((resolve, rejected) => {
    let success = false; // Some comutational heavy task that can block the main JS thread
    if(success){
        resolve("Success")
    } else {
        rejected("Failed")
    }
})

promise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})

function loginUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ userId: 101, name: "John" });
    }, 1000);
  });
}

function fetchCart(userId) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        userId,
        items: ["Laptop", "Mouse"],
        total: 50000
      });
    }, 1000);
  });
}

function processPayment(total) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve({
        paymentStatus: "Success",
        amount: total
      });
    }, 1000);
  });
}

function generateOrder(paymentInfo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        orderId: "ORD123",
        status: "Confirmed"
      });
    }, 1000);
  });
}

// loginUser().then(
//     (user) => {
//         console.log("User logged in: ", user);
//         return fetchCart(user.userId);
//     }
// ).then((cart) => {
//     console.log("User cart is: ", cart);
//     return processPayment(cart.total);
// }).then((payment) => {
//     console.log("Payment processed: ", payment)
//     return generateOrder(payment);
// }).then((order) => {
//     console.log("order generated: ", order)
// })
// .catch((error) => {
//     console.error(error)
// }).finally(() => {
//     console.log("Checkout flow completed")
// })

console.log("Hello")
console.error("Hello")
console.warn("Hello")
const users = [
    {name: 'A', age: 20},
    {name: 'B', age: 30}
]
console.table(users);

async function checkout() {
    try{
        const user = await loginUser();
        console.log("User logged in: ", user);
        const cart = await fetchCart(user.userId);
        console.log("User cart is: ", cart);
        const payment = await processPayment(cart.total)
        console.log("Payment processed: ", payment)
        const order = await generateOrder(payment); 
        console.log("order generated: ", order)
    } catch(error){
        console.error(error)
    } finally {
        console.log("Checkout flow completed")
    }
    
}

checkout();

// Promise methods

const p1 = Promise.resolve("A");
const p2 = Promise.reject("B");

Promise.all([p1, p2]).then(console.log);

// Promise.allSettled([p1,p2]).then((result) => {
//     console.log(result);
// })

// const p1 = new Promise(res => setTimeout(() => res("Fast"), 1000))
// const p2 = new Promise(res => setTimeout(() => res("Slow"), 3000))

// Promise.race([p1, p2]).then(console.log)

const obj = {
    name: "Joe",
    address: {
        city: "Delhi"
    }
}

const obj2 = structuredClone(obj) // deep copy
const obj3 = {...obj} // Shallow copu

obj.address.city = "Mumbai";

console.log(obj2)
console.log(obj3)

localStorage.setItem("mode", "day")
localStorage.setItem("name", "Nav")

const value = localStorage.getItem("mode")
timer.innerText = value;

// localStorage.removeItem("name")

localStorage.clear();


sessionStorage.setItem("mode", "day")
sessionStorage.setItem("name", "Nav")

// const value = sessionStorage.getItem("mode")


sessionStorage.clear();







