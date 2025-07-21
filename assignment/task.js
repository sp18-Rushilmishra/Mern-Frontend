const start = document.getElementById("startBtn");
const reset = document.getElementById("resetBtn");
const timer = document.getElementById("time");
const end = document.getElementById("endBtn");
const right = document.getElementById("leftSide");

console.log(start)


let startCounter;
let count = 10;

function StartCounter() {
    // clearInterval(startCounter); 
    timer.textContent = count;  
    startCounter = setInterval(() => {
        count--;
        timer.textContent = count;
        console.log("Time left:", count);

        const beforeDiv = document.createElement("div");
        beforeDiv.className = "box";
        beforeDiv.style.backgroundColor = "green";
        beforeDiv.textContent = "Before";

        const afterDiv = document.createElement("div");
        afterDiv.className = "box";
        afterDiv.style.backgroundColor = "blue";
        afterDiv.textContent = "After";

        right.appendChild(beforeDiv);
        right.appendChild(afterDiv);

        if (count === 0) {
            clearInterval(startCounter);
        }
    }, 1000);
}

function ResetCounter() {
    clearInterval(startCounter);
    count = 10;
    timer.textContent = count;
    right.innerHTML = `<strong>Appended Items:</strong>`;
}

function EndCounter() {
    clearInterval(startCounter);
}

start.addEventListener("click", StartCounter);
reset.addEventListener("click", ResetCounter);
end.addEventListener("click", EndCounter);



