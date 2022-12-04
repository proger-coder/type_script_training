/* проверить входной тип, объект ли это(массив != объект).
Чтобы работать с unknown, переназначаем в any
(т.к. с unknown каши не сваришь) */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function isPlainObject(value) {
    if (value instanceof Object) {
        const x = value;
        try {
            x.push(value);
            return false;
        }
        catch (err) {
            return true;
        }
    }
    return false;
}
console.log(isPlainObject({ a: 2 }));
console.log(isPlainObject([1, 2]));
console.log(isPlainObject({}));
console.log(isPlainObject([]));
console.log(isPlainObject('d'));
// Деструктуризация: расписываем в лоб прямо в аргументах
function lessonsCount({ lessons }) {
    return lessons.length;
}
console.log(lessonsCount({ lessons: ['ak', 'sd'] })); //2
function lessonsCount2({ lessons }) {
    return lessons.length;
}
console.log(lessonsCount2({ lessons: ['a', 'b', 'c', 'd', 'e', 'f'] })); // 6
function sayHello(firstName, lastName) {
    if (!lastName) {
        return `Hi ${firstName}`;
    }
    return `Hello ${firstName} ${lastName}`;
}
console.log(sayHello('ayrat', 'sungatullin'));
console.log(sayHello('ayrat'));
/* Реализуйте функцию last() которая извлекает последний элемент из переданного значения.
Значением может быть строка или число.
Функция возвращает значение того же типа, которое было передано в качестве параметра    */
function last(value) {
    const variants = {
        'string': function (value) {
            return value[value.length - 1];
        },
        'number': function (value) {
            if (!(value % 10)) {
                return 0;
            }
            else {
                return value % 10;
            }
        },
    };
    const type = typeof value;
    return variants[type](value);
}
console.log(last('John'));
console.log(last(1));
console.log(last(134));
function lastIndex(str, char) {
    return str.lastIndexOf(char) >= 0 ? str.lastIndexOf(char) : null;
}
console.log(lastIndex('test', 't'));
console.log(lastIndex('test', 'e'));
console.log(lastIndex('test', 'p'));
function formatPrice(num = null) {
    if (num === null || num === undefined) {
        return '$0.00';
    }
    return `$${num.toFixed(2)}`;
}
console.log(formatPrice(3.145)); // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()); // '$0.00'
console.log(formatPrice(null)); // '$0.00'
const startGame = () => {
    const state = ['turtle', null, null, null, null];
    function makeTurn(move) {
        let position = state.indexOf('turtle');
        const dispatcher = {
            'right': function () {
                if (position + 1 >= state.length) {
                    throw new Error('Вправо всё');
                }
                state[position] = null;
                state[position + 1] = 'turtle';
            },
            'left': function () {
                if (position - 1 < 0) {
                    throw new Error('Влево всё');
                }
                state[position] = null;
                state[position - 1] = 'turtle';
            }
        };
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
// эта переменная относится к типу C, объединяющему оба требования
const example = {
    condition: 'used',
    price: 100
};
const tri = 3;
let num = tri;
console.log(tri); // 3
console.log(num); // 3
let randomNum = 4;
//const four:triChisla = randomNum; // нельзя
//---------- приведение типов Type assertion: -------
const anyValue = "Hello, wrot!"; // переменная широкого профиля
// рассматривать, как строчную
const anysLength = anyValue.length;
// или через as:
const anysAsLength = anyValue.length;
console.log(anysLength); // 12
console.log(anysAsLength); // 12
class Bar {
    constructor() {
        this.otherF = 5;
    }
    bar() {
        console.log('Bar!');
    }
}
const bar = new Bar();
console.log(bar.otherF);
bar.bar();
const address = {
    country: 'KZ',
    city: "Rudnyi",
    street: "Chekhova",
    building: 3,
};
const dvas = { raz: 1, dvas: false };
//--------------
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
//--------------
function getEvenNumbers(array) {
    return array.filter(el => el % 2 === 0);
}
console.log(getEvenNumbers([1, 3, 8, 9, 100, 23, 55, 34]));
// приведение типов - оба варианта
const typeraz1 = {};
const typeraz2 = {};
const stroki = {
    raz: 'razzz',
    dva: 'dvasss',
};
const a_raznoe = {
    raz: 'razzz',
    tri: 3
};
const i_raznoe = {
    raz: 'razzz',
    dva: 'dvasss',
    tri: 3,
    chetyre: 444
};
//------ enum ---------
var laptops;
(function (laptops) {
    laptops[laptops["HP"] = 0] = "HP";
    laptops[laptops["Apple"] = 1] = "Apple";
    laptops[laptops["LG"] = 2] = "LG";
})(laptops || (laptops = {}));
console.log(laptops.Apple); // 1
console.log(laptops[0]); // HP
var keyVal;
(function (keyVal) {
    keyVal["phone"] = "Samsung";
    keyVal["laptop"] = "Lenovo";
    keyVal["moto"] = "Honda";
})(keyVal || (keyVal = {}));
//console.log(keyVal[0]); // undefined
console.log(keyVal.moto); // Honda
// --- Классы: -----------
class Device {
    constructor(model, brand) {
        this.brand = brand;
        this.user = "Ayrat";
        // можно так и оставить, и не писать this.brand = brand. СамО всё сделает
        this.model = model;
    }
}
const myA3 = new Device("A3", "Samsung");
console.log(myA3.brand); //
console.log(myA3); // Device { brand: 'Samsung', user: 'Ayrat', model: 'A3' }
// --- абстрактные классы ------
// ни во что не компилируются, но от них можно наследоваться
class Component {
}
class newComponent extends Component {
    render() {
        console.log("newComponent");
    }
    show() {
        return 'newComponent';
    }
}
// type Props = 'floors' | 'roof' | 'entrances'
const f = 'floors';
const r = 'roof';
const e = 'entrances';
//const err:Props = 'error'; // ошибка
// -- Дескрипторы --
function deco(target, propertyKey, descriptor) {
    console.log(descriptor);
}
function classDeco(constructor) {
    console.log(constructor);
}
let User = class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPass() {
        return `${this.name}${this.age}`;
    }
};
__decorate([
    deco,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], User.prototype, "getPass", null);
User = __decorate([
    classDeco,
    __metadata("design:paramtypes", [String, Number])
], User);
const nu = new User('ayrat', 33);
nu.getPass();
console.log(nu);
