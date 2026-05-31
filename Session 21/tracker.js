const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

const xpEl = document.getElementById("xp");
const level = document.getElementById("level");
const progressBar = document.getElementById("progressBar");

let xp = 0;

function updateStats() {
    xpEl.textContent = xp;
    const lev = Math.floor(xp/100) + 1;

    level.textContent = lev;

    progressBar.style.width = (xp%100)+"%"
}

function addTask() {
    const text = input.value.trim()

    if(text === "") return;

    const task = document.createElement("li");

    task.className = "task";

    task.innerHTML = `<span>${text}</span>
                    <div>
                     <button class="done">✓</button>
                     <button class="delete">✕</button>
                    </div>
    `;

    const doneBtn = task.querySelector(".done")
    const deleteBtn = task.querySelector(".delete")

    doneBtn.addEventListener("click", () => {
        if(task.classList.contains("completed")) return;
        task.classList.add("completed");
        xp += 20;
        updateStats();
    })

    deleteBtn.addEventListener("click", () => {
        task.remove();
    })

    taskList.appendChild(task);

    input.value= "";
    input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", e => {
    if(e.key === "Enter"){
        addTask();
    }
})

updateStats();



