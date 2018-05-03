class Ebook{
    constructor(db=new Livro(dbEbook)){

      this.db=db;
      this.listOptions;
    //  this.listId=new Array();
      this.result;

  }


  show_options(){
      if(this.listOptions==null){
        for(var i in this.db.arr){


              var titulo=this.db.arr[i]['titulo'];
              var preco=this.db.arr[i]['preco'];


              this.listOptions +=`<div><input type="checkbox" value="${preco}" name="${titulo}" >${titulo}</div>`;


        }
    }

  }


/*  get rows(){
    return this.db.fetch_rows;

  }*/
  get options(){

    return this.listOptions;
  }
};
