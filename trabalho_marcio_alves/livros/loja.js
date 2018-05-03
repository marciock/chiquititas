
class Loja{
  constructor(){

    this.cliente=new Cliente;
    this.vendedor=new Vendedor;
    this.ebook=new Ebook;
    this.impresso=new LivroImpresso;
    this.venda=new Venda;

    this.btCliente=document.getElementById('select_cliente');
    this.btVendedor=document.getElementById('select_vendedor');
    this.btVenda=document.getElementById('venda');
    this.btLista=document.getElementById('btLista');
    this.sCliente=document.getElementById('cliente');
    this.sVendedor=document.getElementById('vendedor');
    this.sModelo=document.getElementById('modelo');

    this.lista=document.getElementById('lista');
    this.nCliente=document.getElementById('nome_cliente');
    this.nVendedor=document.getElementById('nome_vendedor');
    this.produtos=document.getElementById('produtos');
    this.total=document.getElementById('total');

  //  this.itensVenda=new Array();
    this.carrinho;

  }

  add_vendas(){
    this.btLista.addEventListener('click',()=>{

      let sql_vendas=document.getElementsByTagName('input');
      let itens=new Array;
      for(var i in sql_vendas){
        if(sql_vendas[i].checked){

              itens[i]={'titulo':sql_vendas[i].name,'preco':sql_vendas[i].value};
              sql_vendas[i].checked=0;
          }


      };

      this.carrinho=this.venda.push_vendas(itens);
      this.venda.show_options();
    //  sql_vendas=null;

      itens.splice(0,itens.length);
      console.log(this.carrinho);

       this.produtos.innerHTML=this.venda.listOptions;
    //  this.produtos.innerHTML=`Teste : ${sql_vendas}`;
    },false);

  }

  calc_vendas(){
    this.btVenda.addEventListener('click',()=>{
      this.venda.sum_vendas();

      var total=this.venda.total;
        return alert('Preço total é: R$'+total);
    },false);
  }

  add_cliente(){



    this.btCliente.addEventListener('click',()=>{

      let sql_cliente=this.sCliente.selectedIndex;


      this.nCliente.innerHTML=`Cliente : ${this.cliente.fetch_result(sql_cliente,"nome")}`;
    },false);


  }
  add_vendedor(){

    this.btVendedor.addEventListener('click',()=>{

      let sql_vendedor=this.sVendedor.selectedIndex;

      this.nVendedor.innerHTML=`Vendedor : ${this.vendedor.fetch_result(sql_vendedor,"nome")}`;
    },false);


  }
  add_modelo(){



    this.sModelo.addEventListener('change',()=>{

       var sql_modelo=this.sModelo.value;


       switch (sql_modelo) {
         case 'ebook':
                 this.ebook.show_options();

                   this.lista.innerHTML=this.ebook.options;
           break;
         case 'impresso':
                  this.impresso.show_options();
                  this.lista.innerHTML=this.impresso.options;
           break;
         default:

       }



    },false);


  }



  get select_cliente(){

    this.cliente.show_options();
      return  this.sCliente.innerHTML=this.cliente.options;
      //this.cliente.options;

  //   return console.log(this.cliente.options);
  }

  get select_vendedor(){
    this.vendedor.show_options();
      return  this.sVendedor.innerHTML=this.vendedor.options;
  }
  select_carrinho(){
    this.venda.show_options();
      return  this.produtos.innerHTML=this.venda.listOptions;
  }

};


//testes

window.onload=function(){
let loja=new Loja();




  loja.select_cliente;
  loja.select_vendedor;
//  loja.select_carrinho;
//  loja.list_produtos;

  loja.add_cliente();
  loja.add_vendedor();
  loja.add_modelo();
  loja.add_vendas();
  loja.calc_vendas();
//  loja.add_carrinho();


}
