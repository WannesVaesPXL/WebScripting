// naam: Wannes Vaes

class Persoon{
    constructor(id, name){
       if (id>0 && Number.isInteger(id)){
       this._id=id;
       }
       else{
            throw "Dit is geen getal groter dan 0.";
       }
       if ((typeof name)=='string'){
           this._name=name;
       }
       else{
           throw "Dit is geen string."
       }
    }
    toString(){
        return `[${this._id}] ${this._name}`
    }
}




let persoon = new Persoon(1,"mieke");
// let manager=new Manager(2,"jan");
// let werker1=new Loonwerker(3,"tim",11,13);
// let werker2=new Loonwerker(4,"sofie",2,50);
// manager.voegLoonWerkerToe(werker1);
// manager.voegLoonWerkerToe(werker2);
console.log(persoon.toString());
// [1] mieke 
// console.log(werker1.toString());
// // [3] tim = 143
// console.log(werker2.toString());
// // [4] sofie = 100
// console.log(manager.toString());
// // [2] jan = 49

