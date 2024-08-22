//button
const button = document.createElement("button");
button.id = "startInterval";
button.textContent = "Start";

//h1
const counter = document.createElement("h1");
counter.id = "counter";
counter.textContent = "0";

document.body.appendChild(button);
document.body.appendChild(counter);

button.addEventListener("click", function () {
  let count = 0;
  setInterval(function () {
    count++;
    counter.textContent = count;
  }, 1000);
});
