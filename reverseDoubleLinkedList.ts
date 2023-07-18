//Реализуйте функцию reverseDoubleLinkedList, которая принимает двусвязный список с числовым полем value и разворачивает его.

/* eslint-disable no-param-reassign */
type SinglyLinkedList = {
    value: number;
    next: SinglyLinkedList | null;
};

// BEGIN (write your solution here)
type DoubleLinkedList = SinglyLinkedList & {
    next: DoubleLinkedList | null;
    prev: DoubleLinkedList | null;
};

function reverseDoubleLinkedList (list: DoubleLinkedList): void {
    const temp = list.prev;
    list.prev = list.next;
    list.next = temp;

    if (list.prev !== null) {
        reverseDoubleLinkedList(list.prev);
    }
};
// END

export { DoubleLinkedList };
export default reverseDoubleLinkedList;

const list: DoubleLinkedList = {
    value: 1,
    next: null,
    prev: null,
};
const list2: DoubleLinkedList = {
    value: 2,
    next: null,
    prev: list
}
list.next = list2

reverseDoubleLinkedList(list);

console.log(list.prev === list2) // true
console.log(list2.next === list) // true