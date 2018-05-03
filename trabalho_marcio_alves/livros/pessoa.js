class Pessoa{

 constructor(db){
   this.arr=new Array();
   this.myDb=new Array();
   for(var i in db){
     this.arr.push(db[i]);
   }
   //return arr;
    //console.log(this.arr);
  }



  fetch_id(id){
    //this.other=this.arr;

    for (var i in this.arr){
      this.myDb[this.arr[i]['id']]=this.arr[i];
    }


    return this.myDb[id];
  }
/*  get fetch_rows(){
    return this.arr.length;
  }*/

/*  get db_push(){


    return this.arr[0];
  }*/


};
