class Venda{

  constructor(){

    this.listaVendas=new Array();
    this.listOptions;
    this.sum=0;

  }

  push_vendas(db){

    for(var i in db){
          this.listaVendas.push(db[i]);
        };

        return this.listaVendas;

  }
/*  splice_vendas(index){
      var i=this.listaVendas.indexOf(index);
      if(i=-1){
        this.listaVendas.splice(i,1);
      }

  }*/
  sum_vendas(){
     if(this.listaVendas!=null){
        for(var i in this.listaVendas){
          this.sum +=parseFloat(this.listaVendas[i]['preco']);

        }
    }
  }

  get total(){
    return this.sum;
  }
  show_options(){
    //  if(this.listOptions==null){
        for(var i in this.listaVendas){


              var titulo=this.listaVendas[i]['titulo'];
              var preco=this.listaVendas[i]['preco'];

            if(this.listOptions != `<div><input type="checkbox" value="${preco}" name="${titulo}" >${titulo} preço: ${preco} </div>`){

              this.listOptions +=`<div><input type="checkbox" value="${preco}" name="${titulo}" >${titulo} preço: ${preco} </div>`;

          }


        }
  //  }

  }


};
