var Complex = /** @class */ (function () {
    function Complex(real, imaginery) {
        this.real = real;
        this.imaginary = imaginery;
    }
    Complex.prototype.toString = function () {
        console.log('RE: ', this.real, ',', 'IM: ', this.imaginary);
    };
    Complex.prototype.getReal = function () {
        return this.real;
    };
    Complex.prototype.getIm = function () {
        return this.imaginary;
    };
    Complex.prototype.mod = function () {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    };
    return Complex;
}());
function add(x, y) {
    var r = x.getReal() + y.getReal();
    var im = x.getIm() + y.getIm();
    return new Complex(r, im);
}
function subs(x, y) {
    var r = x.getReal() - y.getReal();
    var im = x.getIm() - y.getIm();
    return new Complex(r, im);
}
var a = new Complex(2, 3);
var b = new Complex(5, 6);
a.toString();
console.log(add(a, b));
console.log(subs(a, b));
console.log(b.mod());
