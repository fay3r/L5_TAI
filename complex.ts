class Complex {
    private real:number;
    private imaginary: number;

    constructor(real:number , imaginery:number) {
        this.real = real;
        this.imaginary = imaginery;
    }

    toString(){
        console.log('RE: ',this.real,',', 'IM: ',this.imaginary);
    }

    getReal(){
        return this.real;
    }

    getIm(){
        return this.imaginary;
    }

    mod(){
        return Math.sqrt((this.real*this.real) + (this.imaginary * this.imaginary));
    }

}

function add(x:Complex, y:Complex){
    let r = x.getReal()+y.getReal();
    let im  =x.getIm() + y.getIm();

    return new Complex(r,im);
}

function subs(x:Complex, y:Complex){
    let r = x.getReal()-y.getReal();
    let im  =x.getIm() - y.getIm();

    return new Complex(r,im);
}

let a = new Complex(2,3);
let b = new Complex(5,6);


a.toString();

console.log(add(a,b));
console.log(subs(a,b));
console.log(b.mod());
