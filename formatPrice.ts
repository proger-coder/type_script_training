// Реализуйте функцию formatPrice(), которая принимает число и возвращает строку с округлением
// до второго числа после запятой. Если пришел null или undefined должна вернуться '$0.00'.

function formatPrice(num?: number|null): string {
    const baza = num?.toFixed(2) ?? '0.00'
    return '$' + baza;
}

console.log(formatPrice(3.145)); // '$3.15'
console.log(formatPrice(200)); // '$200.00'
console.log(formatPrice()); // '$0.00'
console.log(formatPrice(null)); // '$0.00'