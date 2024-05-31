const cars = [
    "XUV","SUV","Nexon","Swift","Polo","Scorpio","Zen","800"
];

// cars.forEach((n)=>{
//     console.log(n)
// }) 
console.log("---------------------------------------------------------------")

// const items = ["item1", "item2", "item3"];
// const copyItems = [];

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i]);
}


// after
items.forEach((item) => {
  copyItems.push(item);
});

console.log(copyItems)

console.log("---------------------------------------------------------------")
