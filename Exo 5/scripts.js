
const output = document.getElementById("output");
const form = document.getElementById("form");

form.addEventListener("input", () => {
    var amount = form.value;
    output.innerText = (amount*6.55957).toFixed(2) + " francs";
});