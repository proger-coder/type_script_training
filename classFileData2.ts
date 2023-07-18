interface FileData {
    name: string;
    size: number;
}

class File2 {
    _name: string;
    _size: number;
    prefix: string = '';

    constructor(file: FileData | File2) {
        const { size, name } = file;
        this._size = size;
        this._name = name;
        if(file instanceof File2){
            this.prefix = '(copy) ';
        }
    }

    toString() {
        return `${this.prefix}${this.name} (${this.size} bytes)`;
    }

    get name(): string {
        return this._name;
    }

    get size(): number {
        return this._size;
    }
}

const filex = new File2({ name: 'open-world.jpeg', size: 1000 });
console.log(filex.toString()); // open-world.jpeg (1000 bytes)

const file2 = new File2(filex);
console.log(file2.toString()); // (copy) open-world.jpeg (1000 bytes)

const file3 = new File2(file2);
console.log(file3.toString()); // (copy) open-world.jpeg (1000 bytes)
