var convert = document.getElementById("convert");
var clearButton = document.getElementById("resetForm");

var newTemp="";
//var tempField = document.getElementById("input-temp").value;
function toFahrenheit(){
  newTemp = (document.getElementById("input-temp").value * 9);
  newTemp = (newTemp / 5);
  newTemp = (newTemp + 32);

  newTemp = Math.floor(newTemp);
  if (newTemp <= 32){
    document.getElementById("newTemp").className += "cold";
  } else if (newTemp >= 90){
    document.getElementById("newTemp").className += "hot";
  } else {
    document.getElementById("newTemp").className += "normal";
  }

  document.getElementById("newTemp").value = newTemp;
}

function toCelsius(){

  newTemp = (document.getElementById("input-temp").value - 32);
  newTemp = (newTemp * 5);
  newTemp = (newTemp / 9);

  newTemp = Math.floor(newTemp);
  if (newTemp < 0){
    document.getElementById("newTemp").className += "cold";
  } else if (newTemp > 32){
    document.getElementById("newTemp").className += "hot";
  } else {
    document.getElementById("newTemp").className += "normal";
  }

  document.getElementById("newTemp").value = newTemp;
  }


function checkState(){
  if (document.getElementById("f").checked){
    toFahrenheit();
  } else if (document.getElementById("c").checked){
    toCelsius();
  }
}

function clearField() {
  document.getElementById("tempForm").reset();
}

clearButton.addEventListener("click", clearField);
convert.addEventListener("click", checkState);




