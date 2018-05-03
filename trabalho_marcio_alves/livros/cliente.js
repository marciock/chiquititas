class Cliente{


    constructor(db=new Pessoa(dbClientes)){

      this.db=db;
      this.listOptions;
      
      this.result;

  }

  fetch_result(sql,field){

    return this.result=this.db.arr[sql][field];

  }
  show_options(){
      for(var i in this.db.arr){
          var  id=this.db.arr[i]['id'];
          var nome=this.db.arr[i]['nome'];

        this.listOptions +=`<option value="${id}">${nome}</option>`

    }
  //
}


/*  get rows(){
    return this.db.fetch_rows;


  }*/
  get options(){
    return this.listOptions;
  }



};
