var Generics = /** @class */ (function () {
    function Generics(arg) {
        this.value = arg;
    }
    Generics.prototype.getValue = function () {
        return this.value;
    };
    return Generics;
}());
var numberGenerics = new Generics(123);
console.log(numberGenerics.getValue());
