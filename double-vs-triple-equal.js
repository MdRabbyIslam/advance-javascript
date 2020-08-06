function doubleEqual(first, second) {
    let result;
    first == second ?
        result = "condition is true" :
        result = "condition is false";
    return result;
}

function tripleEqual(first, second) {
    let result;
    first === second ?
        result = "condition is true" :
        result = "condition is false";
    return result;
}


let first = 2;
let second = "2";
const double = doubleEqual(first, second);
console.log(double) //* true becuase double equal (==) compare only values

const triple = tripleEqual(first, second);
console.log(triple); //* false because triple equal compare value and data type

//todo we should always use === .It is highly recomanded.
//* see some reason

console.log(doubleEqual(1, true)) //* true 
console.log(doubleEqual(0, false)) //* true 