const people = [
  {
    name: "Ahmet",
    surname: "Demir",
    tckn: "11111111111",
  },
  {
    name: "Mehmet",
    surname: "Çelik",
    tckn: "22222222222",
  },
  {
    name: "Hüseyin",
    surname: "Bakır",
    tckn: "33333333333",
  },
  {
    name: "Ali",
    surname: "Tunç",
    tckn: "44444444444",
  },
];


export class DataManager{
    constructor(){
        console.log("Data manager çalıştı");
    }

    getByTckn = (tckn)=>{
        return people.filter(x=>x.tckn === tckn);
    }
}


export default people;