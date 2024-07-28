function calcular() {
    //coletando valores inseridos nos inputs e adicionando a variáveis
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let imc;
    imc = peso / (altura * altura);

    //realizando condicionais, concatenando texto com valor do IMC fixado com 2 casas decimais
    //e fazendo a exibição do resultado na página HTML através da div com id = 'resultado'
    if (imc < 18.5) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você está abaixo do peso."
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você está no peso ideal, parabéns !"
    } else if (imc >= 25 && imc <= 29.9) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você está com sobrepeso, fique atento !"
    } else if (imc >= 30 && imc <= 34.9) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você está com Obesidade grau I, procure um especialista !"
    } else if (imc >= 35 && imc <= 39.9) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você está com Obesidade grau II, procure um especialista o quanto antes !"
    }
    else if (imc >= 40) {
        document.getElementById('resultado').innerHTML = "O valor do seu IMC é de " + imc.toFixed(2) + " e você com está Obesidade grau III, procure um especialista urgente e cuide da sua saúde o quanto antes!"
    }
    else {
        document.getElementById('resultado').innerHTML = "Insira valores válidos !"
    }
};