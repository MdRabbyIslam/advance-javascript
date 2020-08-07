const students = [{
        id: 21,
        name: "Omor Sunny"
    },
    {
        id: 31,
        name: "Mannnaaaa"
    },
    {
        id: 41,
        name: "Moyuri"
    },
    {
        id: 71,
        name: "Deepjol"
    }
];

const nameProperty = [];
for (i = 0; i < students.length; i++) {
    const element = students[i];
    nameProperty.push(element.name);
}
console.log(nameProperty);

//* with map filter find
const nameArray = students.map(element => element.name);
console.log(nameArray);

const ids = students.map(s => s.id);
console.log(ids);

const filterObjectArray = students.filter(s => s.id > 40);
console.log(filterObjectArray);

const findSingleObject = students.find(s => s.id > 40);
console.log(findSingleObject);