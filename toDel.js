const person = {
    name: "Ayrat",
    age: 33,
    status: "unmarried",
    city: "Kazan"
}

// for (let key in person) {
//     if(person.hasOwnProperty(key)){
//         console.log(`${key}:${person[key]}`)
//     }
// }

console.log(person.valueOf())

const obj = {a:33}
Object.defineProperty(obj, 'new_Prop', {
    value: 'new_Value',
    writable: false,
    enumerable: true,
    configurable: true
})

console.log(obj); // { a: 33, new_Prop: 'new_Value' }

console.log(Object.getOwnPropertyDescriptor(obj, 'new_Prop'));
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
