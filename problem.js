const givenArray = [12, "6", "12", 12];
// const result = givenArray.map(e => {
//     if (typeof e !== "Number") return parseInt(e);
// })
// console.log(result);
// const sumResult = result.reduce((a, b) => a + b, 0)
// console.log(sumResult)

function adding(array) {
    return array.map(e => {
        if (typeof e !== "Number") return parseInt(e);
    }).reduce((a, b) => a + b, 0)
}

const addStringandNumber = adding(givenArray);
console.log(addStringandNumber);