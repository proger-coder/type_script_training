// Реализуйте функцию reverse(), которая переворачивает массив.
// Технически она должна возвращать новый массив, в котором элементы расположены в обратном порядке.
// Используйте модификатор readonly для входящего массива. Не используйте встроенный метод reverse().

export function reverse(incomArr: readonly number[]): number[] {
    const newArr:number[] = [];
    incomArr.forEach(el => {
        newArr.unshift(el);
    })
    return newArr;
}

console.log(reverse([1, 2, 8])); // [8, 2, 1]
console.log(reverse([10, 33, 7, 0])); // [0, 7, 33, 10]

