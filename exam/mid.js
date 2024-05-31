const fruits = ["Rahul","Midhun","Manu"];

for(let i=0;i<=fruits.length;i++){
    console.log(fruits[i]);
}

console.log("--------------------------------------------")

fruits.forEach((dispaly)=>{
    console.log(dispaly)
})

console.log("--------------------------------------------")


fruits.forEach(dispaly)
function dispaly(element){
    console.log(element);
}

console.log("--------------------------------------------")


fruits.map((value,index,array)=>{
    console.log(array)
})

