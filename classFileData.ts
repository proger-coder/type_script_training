/*  Реализуйте класс File, в конструктор которого передается объект с полями: name — именем файла,
и size — размером в байтах. Внутри класса определите метод toString(), который должен вернуть
форматированную строку в формате <file-name> (<size> bytes).    */
interface FileData {
    name: string;
    size: number;
}

class xFile {
    _name: string;
    _size: number;

    constructor(file: FileData) {
        const {size, name} = file;
        this._size = size;
        this._name = name;
    }

    toString() {
        return `${this.name} (${this.size} bytes)`;
    }

    get name(): string {
        return this._name;
    }

    get size(): number {
        return this._size;
    }
}

const file = new xFile({ name: 'open-world.jpeg', size: 1000 });
console.log(file.toString()); // open-world.jpeg (1000 bytes)