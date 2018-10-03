window.onload = function() {
    var up = document.getElementById("up");
    var down = document.getElementById("down");
    var reset = document.getElementById("reset");
    var store = document.getElementById("store");

    var valueDiv = document.getElementById("value");
    var value;
    var storedValues = [];

    var storedValuesDiv = document.getElementById("stored-values");

    up.onclick = function() {
        
        value = Number(valueDiv.innerText);
        valueDiv.innerHTML = value + 1;
    }

    down.onclick = function() {

        value = Number(valueDiv.innerText);
        valueDiv.innerHTML = value - 1;
    }

    reset.onclick = function() {

        valueDiv.innerHTML = 0;
    }

    store.onclick = function() {

        value = Number(valueDiv.innerText);
        storedValues.push(value);
        storedValues.toString();
        storedValuesDiv.innerText = storedValues;        
    }
}