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

console.log(lessonsCount2({lessons:['a','b','c','d','e','f']})); // 5