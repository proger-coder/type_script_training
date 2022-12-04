// ------- Дженерики -------------
function identity<Type>(argument:Type): Type{
    return argument;
}

console.log(identity(6));

function reverse<Type>(array:Type[]): Type[]{
    return array.reverse();
}

console.log(reverse([1,2,3]));

interface Lengthwise {
    length: number;
}

function getLength<T extends Lengthwise>(arg: T): number {
    return arg.length;
}

// - Функция, склеивающая объекты в один. Принимает 2 объекта, их типы мы обозвали T и R
function mergeObjects<T, R>(a:T, b:R): T & R {
    return Object.assign({}, a, b);
}
// более крутая версия её
function mergeObjects2<T extends object, R extends object>(a:T, b:R): T & R {
    return Object.assign({}, a, b);
}

console.log(mergeObjects({name:'vlad'}, {age:33}));
console.log(mergeObjects2({name:'ayrat'}, {age:42}));

//  Функция выдаёт длину переданного объекта
interface ILength {
    length: number;
}
function vladiLength <T extends ILength>(value: T): string{
    return `Длина value: ${value.length}`;
}

console.log(vladiLength(['a', 'b', 'c']));  //Длина value: 3
console.log(vladiLength('vladiLength'));    //Длина value: 11
console.log(vladiLength({length: 4}));  //Длина value: 4

// функция выдаёт значение ключа объекта (из переданного)

function getObjectValue<T extends object, R extends keyof T>(obj:T, key:R){
    return obj[key];
}

console.log(getObjectValue({name:'vlad'}, 'name')); // vlad
console.log(getObjectValue({ae:'12'}, 'ae')); // 12
