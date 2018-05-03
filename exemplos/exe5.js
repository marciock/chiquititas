var resultado = document.getElementById('result');

document.getElementById('btn_soma').addEventListener('click', function(e){
    resultado.innerHTML = '';
    var valor1 = buscaValor1();
    var valor2 = buscaValor2();
    resultado.innerHTML = valor1 + valor2;
});
document.getElementById('btn_sub').addEventListener('click', function(e){
    resultado.innerHTML = '';
    var valor1 = buscaValor1();
    var valor2 = buscaValor2();
    resultado.innerHTML = valor1 - valor2;
});
document.getElementById('btn_mult').addEventListener('click', function(e){
    resultado.innerHTML = '';
    var valor1 = buscaValor1();
    var valor2 = buscaValor2();
    resultado.innerHTML = valor1 * valor2;
});
document.getElementById('btn_divi').addEventListener('click', function(e){
    resultado.innerHTML = '';
    var valor1 = buscaValor1();
    var valor2 = buscaValor2();
    resultado.innerHTML = valor1 / valor2;
});

function buscaValor1() {
  return parseInt(document.getElementById('value1').value);
}

function buscaValor2() {
  return parseInt(document.getElementById('value2').value);
}
