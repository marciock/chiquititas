
var bissexto=(ano)=>{
    var a;
    if(ano % 4==0){
      a=true;
    }else{
      a=false;

    }
    return a;
  }

console.log(bissexto(2020));
