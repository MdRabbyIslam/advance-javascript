const myArray = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const newArray = [];

for (i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    const result = element * element;
    newArray.push(result);
}
// console.log(newArray);

//todo map, filter, find, smart way to run for loop
//? all return an array but find return a signle value

const myArray2 = [3, 4, 5, 6, 7, 8, 9, 10];
/*
//* parameters first=>element, second =>index, third =>array;
myArray2.map(function (element, index, array) {
    console.log(element, index, array)
});
*/
const result2 = myArray2.map(function (element) {
    return element * element;
})
console.log(result2); //* square array 

//* using arrow function

const result3 = myArray2.map(element => element * element);
const result4 = myArray2.map(x => x * x); //* result 2,3,4 all same.

//todo filter works like filter it find what we searching

//* say, we have an array3

const array3 = [1, 2, 4, 5, 6, 9, 11, 15, 18, 20, 23];
//* we need only an array where values are grater than 5.

const graterThanFive = array3.filter(element => element > 5);
// console.log(graterThanFive);

//todo in ES6 comes find it also works like filter but it gives an element

//* suppose we need to know which number is less than 15 in array3.
const lessThen15 = array3.find(element => element < 15);
console.log(lessThen15) //* result : 1. because it find one by one when it return first condition matching element. for that we got 1.