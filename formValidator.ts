type Form = {
    age: {
        value: number,
        validator: (val: number) => boolean
    },
    name: {
        value: string,
        validator: (val: string) => boolean
    }
};

const form: Form = {
    // BEGIN (write your solution here)
    age: {
        value: 33,
        validator: (val: number) => val < 0,
    }, name: {
        value: 'Ayrat',
        validator: (val: string) => val.length > 0
    }
    // END
};

export default form;

console.log(form.name.validator(form.name.value)); // true
console.log(form.age.validator(form.age.value)); // false