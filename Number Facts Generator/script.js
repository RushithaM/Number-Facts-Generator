let userInputEl = document.getElementById("userInput");
let spinnerEl = document.getElementById("spinner");
let factEl = document.getElementById("fact");

function getFactOfEnteredNumber() {
    let userInputVal = document.getElementById("userInput").value;

    if (userInputVal === "") {
        alert("Enter a Number");
        return;
    }

    let url = "https://apis.ccbp.in/numbers-fact?number=" + userInputVal;
    let options = {
        method: "GET"
    };

    document.getElementById("spinner").classList.remove("d-none");
    document.getElementById("fact").classList.add("d-none");

    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            document.getElementById("fact").classList.remove("d-none");
            document.getElementById("spinner").classList.add("d-none");

            let { fact } = jsonData;
            document.getElementById("fact").textContent = fact;
        });
}

function clearInput() {
    document.getElementById("userInput").value = "";
    document.getElementById("spinner").classList.add("d-none");
    document.getElementById("fact").classList.add("d-none");
}