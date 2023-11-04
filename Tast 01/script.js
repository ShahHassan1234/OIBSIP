document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");
    let buttons = Array.from(document.querySelectorAll(".number, .operator"));
    let clearButton = document.getElementById("clear");
    let backButton = document.getElementById("back");
    let calculateButton = document.getElementById("calculate");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            display.value += button.textContent;
        });
    });

    clearButton.addEventListener("click", function() {
        display.value = "";
    });

    backButton.addEventListener("click", function() {
        display.value = display.value.slice(0, -1);
    });

    calculateButton.addEventListener("click", function() {
        try {
            display.value = eval(display.value);
        } catch (error) {
            display.value = "Error";
        }
    });
});
