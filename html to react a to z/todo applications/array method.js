//arr.splice(Start, Delete Count) removing array
// let myArray = [5, "six", 2, 8.2];


// myArray.splice(2, 2);

// console.log(myArray); // [5, "six"]

// let deletedItems = myArray.splice(2, 2);

// console.log(deletedItems); // [2, 8.2]

//arr.splice(Start, Delete Count, Item1, Item2 ... )Adding new items

// let myArray = [5, "six", 2, 8.2];
// myArray.splice(2, 0, false,"one",);

// console.log(myArray); // [5, "six", "one", false, 2, 8.2]



//arr.splice(Start, Delete Count, Item1, Item2 ... )Replacing existing items

// let myArray = [5, "six", 2, 8.2];
// myArray.splice(2, 1, true);

// console.log(myArray); // [5, "six", true, 8.2]


//arr.findIndex(Testing Function)findIndex()

// let myArray = [5, 12, 8, 130, 44];
// let itemIndex = myArray.findIndex(function (eachItem) {
//     console.log(eachItem);
// });

//function(eachItem) { console.log(eachItem); }


// let myArray = [5, 12, 8, 130, 44];
// let itemIndex = myArray.findIndex(function (eachItem) {
//     if (eachItem === 130) {
//         return true;
//     } else {
//         return false;
//     }
// });
// console.log(itemIndex);





