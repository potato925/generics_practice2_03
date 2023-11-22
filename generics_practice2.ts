class Generics<T> {
    value: T;
    constructor(arg: T) {
         this.value = arg;
    }
    getValue(): T {
        return this.value;
    }
}
let numberGenerics: Generics<number> = new Generics<number>(123);
console.log(numberGenerics.getValue() );