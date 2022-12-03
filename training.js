/* проверить входной тип, объект ли это(массив != объект).
Чтобы работать с unknown, переназначаем в any
(т.к. с unknown каши не сваришь) */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        var x = value;
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
function lessonsCount(_a) {
    var lessons = _a.lessons;
    return lessons.length;
}
console.log(lessonsCount({ lessons: ['ak', 'sd'] })); //2
function lessonsCount2(_a) {
    var lessons = _a.lessons;
    return lessons.length;
}
console.log(lessonsCount2({ lessons: ['a', 'b', 'c', 'd', 'e', 'f'] })); // 6
function sayHello(firstName, lastName) {
    if (!lastName) {
        return "Hi ".concat(firstName);
    }
    return "Hello ".concat(firstName, " ").concat(lastName);
}
console.log(sayHello('ayrat', 'sungatullin'));
console.log(sayHello('ayrat'));
/* Реализуйте функцию last() которая извлекает последний элемент из переданного значения.
Значением может быть строка или число.
Функция возвращает значение того же типа, которое было передано в качестве параметра    */
function last(value) {
    var variants = {
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
    var type = typeof value;
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
function formatPrice(num) {
    if (num === void 0) { num = null; }
    if (num === null || num === undefined) {
        return '$0.00';
    }
    return "$".concat(num.toFixed(2));
}
console.log(formatPrice(3.145)); // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()); // '$0.00'
console.log(formatPrice(null)); // '$0.00'
var startGame = function () {
    var state = ['turtle', null, null, null, null];
    function makeTurn(move) {
        var position = state.indexOf('turtle');
        var dispatcher = {
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
    return { makeTurn: makeTurn, state: state };
};
var _a = startGame(), makeTurn = _a.makeTurn, state = _a.state;
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
var example = {
    condition: 'used',
    price: 100
};
var tri = 3;
var num = tri;
console.log(tri); // 3
console.log(num); // 3
var randomNum = 4;
//const four:triChisla = randomNum; // нельзя
//---------- приведение типов Type assertion: -------
var anyValue = "Hello, wrot!"; // переменная широкого профиля
// рассматривать, как строчную
var anysLength = anyValue.length;
// или через as:
var anysAsLength = anyValue.length;
console.log(anysLength); // 12
console.log(anysAsLength); // 12
var Bar = /** @class */ (function () {
    function Bar() {
        this.otherF = 5;
    }
    Bar.prototype.bar = function () {
        console.log('Bar!');
    };
    return Bar;
}());
var bar = new Bar();
console.log(bar.otherF);
bar.bar();
// ------- Дженерики -------------
function identity(argument) {
    return argument;
}
console.log(identity(6));
function reverse(array) {
    return array.reverse();
}
console.log(reverse([1, 2, 3]));
function getLength(arg) {
    return arg.length;
}
var address = {
    country: 'KZ',
    city: "Rudnyi",
    street: "Chekhova",
    building: 3,
};
var dvas = { raz: 1, dvas: false };
//--------------
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
//--------------
function getEvenNumbers(array) {
    return array.filter(function (el) { return el % 2 === 0; });
}
console.log(getEvenNumbers([1, 3, 8, 9, 100, 23, 55, 34]));
// приведение типов - оба варианта
var typeraz1 = {};
var typeraz2 = {};
var stroki = {
    raz: 'razzz',
    dva: 'dvasss',
};
var a_raznoe = {
    raz: 'razzz',
    tri: 3
};
var i_raznoe = {
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
console.log(keyVal[0]); // undefined
console.log(keyVal.moto); // Honda
// --- Классы: -----------
var Device = /** @class */ (function () {
    function Device(model, brand) {
        this.brand = brand;
        this.user = "Ayrat";
        // можно так и оставить, и не писать this.brand = brand. СамО всё сделает
        this.model = model;
    }
    return Device;
}());
var myA3 = new Device("A3", "Samsung");
console.log(myA3.brand); //
console.log(myA3); // Device { brand: 'Samsung', user: 'Ayrat', model: 'A3' }
// --- абстрактные классы ------
// ни во что не компилируются, но от них можно наследоваться
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var newComponent = /** @class */ (function (_super) {
    __extends(newComponent, _super);
    function newComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    newComponent.prototype.render = function () {
        console.log("newComponent");
    };
    newComponent.prototype.show = function () {
        return 'newComponent';
    };
    return newComponent;
}(Component));
// type Props = 'floors' | 'roof' | 'entrances'
var f = 'floors';
var r = 'roof';
var e = 'entrances';
//const err:Props = 'error'; // ошибка
// -- Дескрипторы --
function deco(target, propertyKey, descriptor) {
    console.log(descriptor);
}
function classDeco(constructor) {
    return constructor('albert', 58);
}
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getPass = function () {
        return "".concat(this.name).concat(this.age);
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
    return User;
}());
var nu = new User('ayrat', 33);
nu.getPass();
console.log(nu);
