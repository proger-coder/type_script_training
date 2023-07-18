// Опишите тип состояния DataState и перечисление LoadingStatus.
// Затем реализуйте функцию handleData(), которая принимает на вход DataState и возвращает строку в зависимости
// от состояния:
// loading... при LoadingStatus.loading,
// error при LoadingStatus.error,
// строку из числового поля data при LoadingStatus.success.
// Если статус не входит в перечисление, функция возвращает unknown.

// BEGIN (write your solution here)
type DataState = {
    status: LoadingStatus,
    data?: number,
    error?: Error
};
enum LoadingStatus{
    error,
    loading,
    success
}
function handleData(status: DataState){
    if(status.status === LoadingStatus.loading){
        return 'loading...';
    }
    if(status.status === LoadingStatus.error){
        return 'error';
    }
    if(status.status === LoadingStatus.success){
        return status.data;
    }
    return 'unknown';
}
// END

export { DataState, LoadingStatus };
export default handleData;

const loading: DataState = { status: LoadingStatus.loading };
console.log(handleData(loading)); // loading...

const error: DataState = { status: LoadingStatus.error, error: new Error('error') };
console.log(handleData(error)); // error

const success: DataState = { status: LoadingStatus.success, data: 42 };
console.log(handleData(success)); // 42