const obj = {
    nextLevel: {courseId: "level2"},
    "Programming Hero" : {courseId: "Level1"},
    nameIns : "no, why me",
    true : "is it true"
}

// console.log(obj.nextLevel);
// console.log(obj["Programming Hero"], obj.nameIns);
// console.log(obj["true"]);

const account1 = {name : "halkhata"};
const account2 = {name : "kutum pakhi"}
const object = {};

// object.account = {id : "level2"};

// console.log(object.account.id);

object[account1] = {id : "dalim pakhi"};
object[account2] = {id : "sokal belar pakhi"};
// console.log(object); // objects' limitation when you see that output

//Rather use MAP();

const student1 = {name : "harry potter"};
const student2 = {name : "hermione"};

const map = new Map();

map.set(student1, {role : "best wizard"});
map.set(student2, {role : "best student"});

// map.clear();
console.log(map);
console.log(map.size);

// map.delete(student1);
console.log(map);

console.log(map.has(student1));
console.log(map.has(student2));

map.forEach((value, key) => console.log("key: ", key, "value: ", value));

map.forEach((value, key) => (key.name= "DumbleDOre's Student : " + key.name));
console.log(map);

console.log(map.keys()); //it will give you map iterator

//you can transform your map iterator to spread operator and include it inside an Array
console.log([...map.keys()]);
console.log([...map.values()]);

for(let key of map.keys()){
    console.log("your key: ", key);
}

console.log(map.entries());

const names = [
    ["jack", "paul"],
    ["logan", "paul"]
]

const nameMap = new Map(names);
console.log(nameMap.entries());