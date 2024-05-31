const myName = "Rahul";

const newA = myName.split("");

const myMap = newA.map(l => `${l}${l}${l}`);

console.log(myMap.join(''))