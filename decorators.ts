// -- Декораторы --
function classDeco(constructor: Function):any{
    console.log('constructor = ', constructor);
}
function methodDeco(target: Object, propertyKey: string, descriptor: PropertyDescriptor):any{
    console.log('descriptor = ', descriptor);
}
function propertyDeco(target: Object, propertyKey: string):any{
    console.log('propertyKey = ', propertyKey);
}

@classDeco
class User{
    constructor(public name:string){
        this.name = name;
    }

    @methodDeco
    public getName(): string {
        return `Имя = ${this.name}`
    }

    @propertyDeco
    anyProperty = true;
}

const nu = new User('ayrat');

