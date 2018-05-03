class Livro{
  constructor(db){
    this.arr=new Array();
    this.myDb=new Array();


    for(var i in db){
          this.arr.push(db[i]);
        };

  };

   fetch_id(id){

     for (var i in this.arr){
        var myId=this.arr[i]['id'];
       this.myDb[myId]=this.arr[i];
     };


     return this.myDb[id];
   };
  /* get fetch_rows(){
     return this.arr.length;
   };*/

/*   get db_push(){


     return this.arr[0];
   };*/
};
