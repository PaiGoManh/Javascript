let num=[103,201,310,405,20];

console.log(num);

num.forEach(dispaly);

function dispaly(element){
    console.log(element)
}

num.filter(n => n%2===0)
    .map(n => n*2)
    .forEach((n)=>{
    console.log(n);
})