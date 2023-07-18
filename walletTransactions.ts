// Реализуйте функцию applyTransactions и типы Transaction, Wallet.
// applyTransactions должна принимать аргумент типа Wallet и возвращать число после применения всех транзакций
// к количеству денег на счету. В случае ошибки в одной из транзакций должно вернуться изначальное число,
// последующие транзакции не обрабатываются.

type Transaction = {
    apply(amount:number):number;
}
type Wallet = {
    transactions: Array<Transaction>,
    balance: number,
}
function applyTransactions(wallet: Wallet){
    try {
        let wb = wallet.balance;
        wallet.transactions.forEach(ta => wb = ta.apply(wb));
        return wb;
    }
    catch(e){
        return wallet.balance;
    }
}

const wallet: Wallet = {
    transactions: [
        {
            apply: (amount) => amount + 1,
        },
    ],
    balance: 0
}

console.log(applyTransactions(wallet)) // 1