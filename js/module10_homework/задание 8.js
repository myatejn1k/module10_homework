let myMap = new Map();
myMap.set('table', 'black');
myMap.set(1, 'number');
myMap.set(true, 123);
console.log(myMap.keys());
console.log(myMap.values());
for (let name of myMap.keys()){
  console.log(name);
}
