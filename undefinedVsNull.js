//*todo we can get undefined value  by some way

let name;
console.log(name); //*undefined because name is not defined


function add(num1, num2) {
    console.log(num1 + num2);
}
const result = add(5, 7);
console.log(result); //* if we do not return anything it will give undefined



function add2(num1, num2) {
    console.log(num1 + num2);
    return;
}
const result2 = add2(12, 6);
console.log(result2) //* undefined because we used return keyword but returned nothing



function add3(num1, num2) { //* if we use default parameter like num2 = 0 it will show result
    console.log(num2)
    return num1 + num2; //*num2 undefined because num2 parametere is not assigned
}
const result3 = add3(45);
console.log(result3); //* NaN because number + undefined = NaN



const myArray = [10, 45, 65, 78, 12];
console.log(myArray[11]); //*//*undefined because 11 no element not defined



const myObject = {
    name: "Rabby",
    age: 23
}
console.log(myObject.address) //* undefined because address is not defined in myObject



let name2 = undefined; //! it is strictly not recomanded
console.log(name2); //* undefined because name2 is assigned with undefined keyword


//*todo null is where nothing existing anything or we can say null value determined is 0;

let fruits = null;
console.log(fruits); //* null because there are no fruits

const moreFruits = 5 + null; //* 5 because null is like 0
console.log(moreFruits)