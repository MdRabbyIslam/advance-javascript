//todo falsy values
//* false
//* 0(zero)
//* ""(empty string)
//* without assigning variable(like var name; console.log(name) // undefined);
//* NaN
//* undefined
//* null

//todo truthy values
//* true
//*numbers are true without zero
//* " "/ "0 or anything"( not empty string)
//* [] (empty array)
//* {}(empty object)

//? for experiment
var name = 0n;
console.log(typeof name)

if (name) {
    console.log("condition is true")
} else {
    console.log("condition is false")
}

function doSomething(x, y) {
    console.log(y);
}
doSomething(32);