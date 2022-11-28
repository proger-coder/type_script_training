/* проверить входной тип, объект ли это(массив != объект).
Чтобы работать с unknown, переназначаем в any
(т.к. с unknown каши не сваришь) */

function isPlainObject(value:unknown):boolean{
    if (value instanceof Object){
        const x:any = value;
        try{
            x.push(value);
            return false;
        } catch(err){
            return true
        }
    }
    return false;
}

console.log(isPlainObject({a: 2}));
console.log(isPlainObject([1, 2]));
console.log(isPlainObject({}));
console.log(isPlainObject([]));
console.log(isPlainObject('d'));

// Деструктуризация: расписываем в лоб прямо в аргументах
function lessonsCount({lessons}:{lessons:string[]}):number{
    return lessons.length;
}

console.log(lessonsCount({lessons:['ak','sd']})); //2

// Деструктуризация: расписываем сначала отдельно алиас
type lessonsType = {
    lessons: string[]
}
function lessonsCount2({lessons}:lessonsType):number {
    return lessons.length;
}

console.log(lessonsCount2({lessons:['a','b','c','d','e','f']})); // 6

function sayHello (name:String):string;
function sayHello (firstName:String, lastName:String):string;

function sayHello (firstName:any, lastName?:any):string{
    if(!lastName){
        return `Hi ${firstName}`;
    }
    return `Hello ${firstName} ${lastName}`;
}

console.log(sayHello('ayrat', 'sungatullin'));
console.log(sayHello('ayrat'));

/* Реализуйте функцию last() которая извлекает последний элемент из переданного значения.
Значением может быть строка или число.
Функция возвращает значение того же типа, которое было передано в качестве параметра    */

function last(value:unknown){
    const variants:any = {
        'string':function (value:string) {
            return value[value.length - 1];
        },
        'number':function (value:number) {
            if(!(value%10)){
                return 0;
            } else {
                return value%10;
            }
        },
    }
    const type:any = typeof value;
    return variants[type](value);
}

console.log(last('John'));
console.log(last(1));
console.log(last(134));

type nullOrNum = null | Number;
function lastIndex(str: string, char: string): nullOrNum {
    return str.lastIndexOf(char) >= 0 ? str.lastIndexOf(char) : null;
}

console.log(lastIndex('test', 't'));
console.log(lastIndex('test', 'e'));
console.log(lastIndex('test', 'p'));

function formatPrice(num:any=null){
    if(num === null || num === undefined){
        return '$0.00';
    }
    return `$${num.toFixed(2)}`
}

console.log(formatPrice(3.145)); // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()) // '$0.00'
console.log(formatPrice(null)) // '$0.00'

//------------Игра ход черепахи --------------------------------------
type Turtle = 'turtle' | null;

const startGame = () => {
    const state: Array<Turtle> = ['turtle', null, null, null, null];

    // BEGIN (write your solution here
    type move = 'left' | 'right';
    function makeTurn(move:move):void{
        let position = state.indexOf('turtle');
        const dispatcher = {
            'right': function(){
                if (position+1 >= state.length){
                    throw new Error('Вправо всё');
                }
                state[position] = null;
                state[position+1] = 'turtle';
            },
            'left': function(){
                if (position-1 < 0){
                    throw new Error('Влево всё');
                }
                state[position] = null;
                state[position-1] = 'turtle';
            }
        }
        dispatcher[move]();
    }
    // END

    return { makeTurn, state };
};

const { makeTurn, state } = startGame();
console.log(state); // ['turtle', null, null, null, null]

//makeTurn('left') // ERROR

makeTurn('right');
makeTurn('right');
// makeTurn('right');
// makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
makeTurn('right');
console.log(state); // [null, null, 'turtle', null, null]
makeTurn('left');

// -----------------Intersection Types (пересечение)-------------------------
type typeA = {
    condition: 'used'|'new' };
type typeB = {
    price: 100;
}
type typeC = typeA & typeB; //этот новый тип подразумевает логическое AND

// эта переменная относится к типу C, объединяющему оба требования
const example:typeC = {
    condition: 'used',
    price: 100
}

type stringOrNumber = string | number;
type stringAndNumber = string & number; // так не бывает - множества не пересекаются

//--------------иерархия типов------------------------

type triChisla = 3|4|5;
const tri:triChisla = 3;

let num:number = tri;
console.log(tri); // 3
console.log(num); // 3

// подмножество triChisla входит в множество Number. А наоборот - нельзя
// Type 'number' is not assignable to type 'triChisla'
type allNums = number;
let randomNum: allNums = 4;
//const four:triChisla = randomNum; // нельзя

//---------- приведение типов Type assertion: -------

const anyValue:any = "Hello, wrot!"; // переменная широкого профиля

// рассматривать, как строчную
const anysLength:number = (<string>anyValue).length;
    // или через as:
const anysAsLength:number = (anyValue as string).length;

console.log(anysLength); // 12
console.log(anysAsLength); // 12

// ---------- Интерфейсы и Алиасы типов: -------------

type CarAlias = {
    used: boolean,
    beep(): void
}

interface CarInterf {
    used: boolean,
    beep(): void
}
    // расширение Интерфейса (добавляем свойство)
interface CarInterf {
    year:number
}

// ------- Дженерики -------------
function check <Type>(argument:Type): Type{
    return argument;
}

console.log(check(6));
