window.onload = () => {
    "use strict";
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("./sw.js");
    }
};

let altura = document.getElementById('altura')
let peso = document.getElementById('peso')
let IMC = document.getElementById('IMC')
let res = document.getElementById('res')
let req = document.getElementById('req')

IMC.addEventListener('click', () => {
    let resultadoIMC = Number(peso.value) / Number(altura.value) * Number(altura.value)
    console.log(resultadoIMC)
    res.innerHTML = 'Resultado do imc: ' +
        resultadoIMC.toString();

    if (resultadoIMC < 18.5) {
        req.innerHTML = "abaixo do peso"
    }

    if (resultadoIMC  > 18.5  && resultadoIMC < 24.9)  {
        req.innerHTML = "peso normal"
    }

    if (resultadoIMC < 30.0 && resultadoIMC < 34.9) {
        req.innerHTML = "Obesidade classe 1"
    }

    if (resultadoIMC < 35.0 && resultadoIMC < 39.9) {
        req.innerHTML = "Obesidade classe 2"
    }
    if (resultadoIMC >= 40.0) {
        req.innerHTML = "Obesidade classe 3"
    }

})
