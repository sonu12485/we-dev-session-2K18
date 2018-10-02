window.onload = function() {
    var up = document.getElementById("up");
    var down = document.getElementById("down");
    var reset = document.getElementById("reset");

    var valueDiv = document.getElementById("value");
    var value;

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
}