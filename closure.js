function addingNew() {
    let count = 0;
    console.log('outer', count);
    return function () {
        console.log("before", count)
        count++;
        console.log("after", count)
        return count;
    }
}

const adding = addingNew();
console.log(adding());
console.log(adding()); //* barbar inner function call hoy but outer functon ekbar call hoy
console.log(adding());
console.log(adding());