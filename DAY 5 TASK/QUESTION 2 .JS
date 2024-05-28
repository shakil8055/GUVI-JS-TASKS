// 2) JSON ITERATE OVER ALL FOR LOOPS (FOR, FOR IN, FOR OF, forEACH )

//JSON ITERATE USING FOR 
let keys = ["SHAKIL", "SAMEER", "SUHAIL", "SUHAIB", "IMTHIYAS"];
let values = [1, 2, 3, 4, 5];
let person = {};
for (let i = 0; i < keys.length; i++) {
  person[keys[i]] = values[i];
}
console.log(person);


//JSON ITERATE USING FOR IN

const data = {
  name: "SHAKIL",
  age: 21,
  sex: "MALE",
};
for (let keys in data) {
   console.log(keys+":" ,data[keys])
}


//JSON ITERATE USING FOREACH

let fav = ["video", "book", "java", "year"];
let items = ["play", "reader", "script", 2000];
let solution = {};
fav.forEach((fav, i) => {
  solution[fav] = items[i];
});
console.log(solution);


//JSON ITERAITON USING FOR OF

let cars = { ford: 1, toyota: 2, honda: 3, volkswagen: "fav" };
let k = Object.keys(cars);
for (let i of k) {
  console.log(`${i} : ${cars[i]}`);
}
console.log(Cars);
