window.onload=function(){
var botao=document.getElementById('vai');
var resultado=document.getElementById("resultado");
//var promessa=Promise.resolve(['Gasolina','Alcool']);
/*
new ()=>{
  var alcool=precoAlcool*litro;
  var gasolina=precoGasolina*litro;
  if(alcool<=(gasolina*0.7)){
      resolve("Gasolina")
  }else{
      reject("Alcool")
  }
})
(alcool/gasolina)>0.7
*/

var calc= ()=>{
  var litro=parseFloat(document.getElementById("litro").value);
  var precoAlcool=parseFloat(document.getElementById("palcool").value);
  var precoGasolina=parseFloat(document.getElementById("pgasolina").value);

  var alcool=precoAlcool*litro;
  var gasolina=precoGasolina*litro;




  if((alcool/gasolina)>0.7){
    value=resultado.innerHTML="gasolina";
  }else{
      value=resultado.innerHTML="Alcool";
  }

    return value;
};



botao.addEventListener('click',function(){
  var litro=parseFloat(document.getElementById("litro").value);
  var precoAlcool=parseFloat(document.getElementById("palcool").value);
  var precoGasolina=parseFloat(document.getElementById("pgasolina").value);

  var alcool=parseFloat(precoAlcool*litro);
  var gasolina=parseFloat(precoGasolina*litro);

  var promessa=new  Promise((resolve)=>{
    if((alcool/gasolina)>0.7){
      resultado.innerHTML="gasolina";

    }else{
      resultado.innerHTML="alcool";

    }
    resolve("Gasolina");
  });

},false);






};
