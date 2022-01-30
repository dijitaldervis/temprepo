import people, { DataManager } from "./src/data/people.js";

people.forEach((person) => {
  console.log(person.name);
});

var dataManager = new DataManager();

var find = dataManager.getByTckn("11111111111");
console.log(find);