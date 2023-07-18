// Реализуйте функцию getUserFriends(), которая принимает JSON с массивом пользователей и с массивом id друзей
// и возвращает список друзей пользователя по id. Друзья каждого пользователя хранятся в поле friends.
// Если пользователь с указанным id не найден, то функция должна вернуть пустой массив.

const userJson = JSON.stringify({
    users: [
        { id: 1, name: 'John', age: 20 },
        { id: 2, name: 'Mary', age: 21 },
    ],
    friends: [
        [1, 2],
    ],
});

type User = {
    id: number,
    name: string,
    age: number,
};

type Friends = [number, number];

export type UserResponse = {
    users: User[],
    friends: Friends[]
};

// BEGIN (write your solution here)
function getUserFriends(json: string, id: number) {
    const javap:UserResponse = JSON.parse(json);
    const {users, friends} = javap;
    const hisFriendsIds = friends
        .filter(el => el.includes(id))
        .flat()
        .filter(el => el !== id);
    return users.filter(el => hisFriendsIds.includes(el.id));
}
// END

export default getUserFriends;

console.log(getUserFriends(userJson, 1)); // [{ id: 2, name: 'Mary', age: 21 }]
console.log(getUserFriends(userJson, 2)); // [{ id: 1, name: 'John', age: 20 }]
console.log(getUserFriends(userJson, 3)); // []