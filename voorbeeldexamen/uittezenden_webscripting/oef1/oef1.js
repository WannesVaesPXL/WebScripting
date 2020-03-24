// naam: Wannes Vaes

class Persoon{
    constructor(id, name){
       if (id>0 && Number.isInteger(id)){
       this._id=id;
       }
       else{
            throw `[${id}]: Deze id is geen getal groter dan 0.`;
       }
       if ((typeof name)=='string'){
           this._name=name;
       }
       else{
           throw `[${name}]: Dit is geen string.`;
       }
    }
    toString(){
        return `[${this._id}] ${this._name}`
    }
}

class Loonwerker extends Persoon{
    loon;
    constructor(id, name, loonPerUur, aantalUrenGewerkt){
        super(id, name);
        if (loonPerUur>0 && Number.isInteger(loonPerUur)){
            this._loonPerUur=loonPerUur;
        }
        else{
            throw `[${loonPerUur}]: Dit uurloon is geen getal groter dan 0.`;
        }
        if (aantalUrenGewerkt>0 && Number.isInteger(aantalUrenGewerkt)){
            this._aantalUrenGewerkt=aantalUrenGewerkt;
        }
        else {
            throw `[${aantalUrenGewerkt}]: Het aantal gewerkte uren is geen getal groter dan 0.`;
        }
    }
    berekenLoon(){
        this.loon = this._aantalUrenGewerkt * this._loonPerUur
        return this.loon;
    }

    toString() {
        return super.toString() + ` = ${this.berekenLoon()}`;
    }
}

let loonWerkers = [];
class Manager extends Persoon{
    constructor(id, name){
        super(id, name);
    }
    voegLoonWerkerToe(loonwerker) {
        if (loonwerker instanceof Loonwerker){
            loonWerkers.push(loonwerker);
        }
        else{
            throw `[${loonwerker}]: Dit is geen loonwerker.`;
        }
    }
    berekenLoon(){
        let lonen = 0;
        for ( let i = 0; i < loonWerkers.length; i++){
            lonen += loonWerkers[i].loon;
        }
        return Math.round(lonen *0.2);
    }
    toString(){
        return super.toString() + ` = ${this.berekenLoon()}`;
    }

}


let persoon = new Persoon(1,"mieke");
let manager=new Manager(2,"jan");
let werker1=new Loonwerker(3,"tim",11,13);
let werker2=new Loonwerker(4,"sofie",2,50);
manager.voegLoonWerkerToe(werker1);
manager.voegLoonWerkerToe(werker2);
console.log(persoon.toString());
// [1] mieke 
console.log(werker1.toString());
// // [3] tim = 143
console.log(werker2.toString());
// // [4] sofie = 100
console.log(manager.toString());
// // [2] jan = 49

