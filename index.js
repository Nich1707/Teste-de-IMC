function calculando() {
  const altura = parseFloat(document.getElementById("alturaUsuario").value);
  const peso = parseFloat(document.getElementById("pesoUsuario").value);
  const contenedor2 = document.querySelector(".contenedor");

  // Convertendo a altura para metros
  const alturaMetros = altura / 100;

  // Calculando o IMC
  const imc = peso / (alturaMetros * alturaMetros);

  // Determinando a categoria do IMC e exibindo o resultado
  if (imc <= 18.5) {
    document.getElementById("resultadoUsuario").textContent =
      "Você está abaixo do recomendado. IMC: " + imc.toFixed(2);
    contenedor2.style.backgroundColor = "red";
  } else if (imc > 18.5 && imc <= 24.9) {
    document.getElementById("resultadoUsuario").textContent =
      "Seu IMC está excelente. IMC: " + imc.toFixed(2);
    contenedor2.style.backgroundColor = "aquamarine";
  } else if (imc >= 25 && imc <= 29.9) {
    document.getElementById("resultadoUsuario").textContent =
      "Você está acima do peso. IMC: " + imc.toFixed(2);
    contenedor2.style.backgroundColor = "orange";
  } else {
    document.getElementById("resultadoUsuario").textContent =
      "Você está em obesidade mórbida. IMC: " + imc.toFixed(2);
    contenedor2.style.backgroundColor = "purple";
  }
}
