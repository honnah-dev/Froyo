// prompt("What flavors would you like to order?");

// const { version } = require("react");

// function askForFlavors() {
//   let flavors = prompt("What flavors would you like to order? Please enter a comma seperated list of froyo flavors.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee")
//   console.log(askForFlavors)
// }
// askForFlavors();



// chats helpful code
// const storeName = "Froyo Place"; // 🌎 global

// function takeOrder() {
//   const flavors = prompt("Enter flavors"); // 🍨 local
//   const order = flavors.split(",");
//   console.log(storeName, order);
// }
// takeOrder();
// console.log(storeName);

// what variables do i need?
// 1. i need flavors
// 2. i need the flavors as an array


const userInput = prompt("Flavors ordered seperated by only comma.", "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
const splitFlavors = userInput.split(",");
// now splitFlavors is an array
console.table(splitFlavors);

const flavorsCountedObject = {};
// empty object to keep track of counts 


// now loop through the split array
// chats version
// for (const key of splitFlavors) {
//   if (flavorsCountedObject[key]) {
//     flavorsCountedObject[key] += 1;
//   } else {
//     flavorsCountedObject[key] = 1;
//   }

// }
// console.log(flavorsCountedObject);



function countFlavors(flavors) {
  const counts = {};
  for (const flavor of flavors) {
    if (flavor in counts) {
      counts[flavor] += 1;
    } else {
      counts[flavor] = 1;
    }
  }
  return counts;
}
const flavorsCounted = countFlavors(splitFlavors);
console.log(flavorsCounted);




// const flavorsOrdered = flavors;
// const flavorsOrderedAsText


// const flavorsOrdered = JSON.parse(flavorsOrderedAsText);

// console.log(flavorsOrdered) 