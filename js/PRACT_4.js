
function mostarCalendario() {
    var mes = parseInt(document.getElementById("mes").value);
    var año = parseInt(document.getElementById("año").value);
    var resultado = "";

    if (num1 > num2) {
      resultado = "El numero mayor es " + num1;
    } else if (num1 < num2) {
      resultado = "El numero mayor es " + num2;
    } else {
      resultado = "Los numeros son iguales";
    }

    document.getElementById("resultado").innerHTML = resultado;
  }