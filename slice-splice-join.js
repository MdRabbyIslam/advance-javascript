//todo slice
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slicedArray1 = array1.slice(2, 5);
// console.log(array1);
// console.log(slicedArray1);

//todo splice
const array2 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const splicedArray = array2.splice(2, 4, 2, 4, 6, 8, 10, 12, 14); //* 2 is starting index 4 is how many element should we remove
// console.log(splicedArray);
// console.log(array2); //* index 2 theke tar porer mot 4 ta valur jaygay notun je 2 theke 14 porjonto value ase segulo add hobe

//todo join
const joinArray = array1.join(", ");
console.log(joinArray);