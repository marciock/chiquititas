window.onload=()=>{


  var texto=document.getElementById("texto");
  var reverso=document.getElementById("resverso");
  var butaum=document.getElementById("butaum");
  var resultado=document.getElementById("resultado");

  butaum.addEventListener('click',()=>{
    //  var volta=texto.split('').reverse().join('');
    var valor=texto.value.toString().split("");
    var palavra=valor.reverse().join("");
    reverso.innerHTML=palavra;

    var teste=new String(palavra);

    if(teste==texto.value){
     resultado.innerHTML="é um isograma";
      console.log('foi');
    }
      else{
        console.log('não foi');
     resultado.innerHTML="não é um isograma";
    }

  },false);


};
