// Задание
// Создайте и экспортируйте тип Point, который описывает точку в пространстве, состоящую из трех координат: x, y, z.
// Реализуйте функцию isTheSamePoint(), которая проверяет две точки на их одинаковое расположение.
// Две точки совпадают, если совпадают все их координаты:

type Point = [number, number, number];

const p1: Point = [1, 3, 4];
const p2: Point = [1, 3, 4];
const p3: Point = [0, 8, 4];

export function isTheSamePoint(p1: Point, p2: Point): boolean {
    return p1[0] === p2[0] && p1[1] === p2[1] && p1[2] === p2[2];
}

isTheSamePoint(p1, p2); // true
isTheSamePoint(p1, p3); // false
isTheSamePoint(p2, p3); // false

type SomeType = number | string | boolean;
const st: SomeType = 1;
const st2: SomeType = 'str';
const st3: SomeType = true;

enum balbes {"a", "b"};
let x:balbes = balbes.a;
console.log(x)

// undefined, never, any, null, bigint, object, symbol,