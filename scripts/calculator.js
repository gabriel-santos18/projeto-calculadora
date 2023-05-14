var input = document.getElementById("result");

function writeNumbers(number) {
  if (input.value == "0") {
    input.value = number;
  } else {
    input.value += number;
  }
}

function clearNumbers() {
  if (input.value != "0") {
    input.value = "0";
  }
}

function writeOperation(operation) {
  var lastChar = input.value.substr(input.value.length - 1);

  if (input.value != "0") {
    if (
      lastChar != "+" &&
      lastChar != "-" &&
      lastChar != "*" &&
      lastChar != "/"
    ) {
      input.value += operation;
    }
  }
}

function calcular() {
  if (input.value != 0) {
    var resultado = eval(input.value);
    input.value = resultado;
  }
}
