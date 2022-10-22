/* проверить входной тип, объект ли это(массив != объект).
Чтобы работать с unknown, переназначаем в any
(т.к. с unknown каши не сваришь) */
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
console.log(lessonsCount({ lessons: ['ak', 'sd'] }));
function lessonsCount2(_a) {
    var lessons = _a.lessons;
    return lessons.length;
}
console.log(lessonsCount2({ lessons: ['a', 'b', 'c', 'd', 'e'] }));
