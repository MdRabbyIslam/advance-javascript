const newArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > 50) {
        break; //* stoping loop when the condition fullfilled
    }
    console.log(newArray[i]);
}

const newArray2 = [20, -40, 60, -80, 100, -120, 140, -160, 180, -200];

for (let i = 0; i < newArray2.length; i++) {
    if (newArray2[i] < 0) {
        continue; //* just skip the value
    }
    console.log(newArray2[i]);
}