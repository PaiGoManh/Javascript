function solve(val) {
    var resElement = document.getElementById('res');
    if (resElement.innerText === "0") {
        resElement.innerText = val;
    } else {
        resElement.innerText += val;
    }
}

function result() {
    var resElement = document.getElementById('res');
    try {
        resElement.innerText = eval(resElement.innerText);
    } catch (e) {
        resElement.innerText = "Error";
    }
}