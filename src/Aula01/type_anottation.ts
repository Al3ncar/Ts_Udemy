/* eslind-disable */


/* ---- Tipos Primitivos ---- */

const nome: string = "Igor";
const idade: number = 18;
const adulto: boolean = true;
const simbolo: symbol = Symbol('qualquer-simbol');
// const big: bigint = 10n;

/*
  Tipos Básicos:
    string: "", ``, '';
    number: 10, 1.57, -5.55, 0xf00d, 0b1010, 0o7744;
    boolean: restritamente true ou false;
    symbol: symbol
    bigint: bigint

*/

// No boolean só é true or false, não será aceito:
// true: qualquer tipo de valor
// false: "", 0, entre outros fatores.

/* ---- Tipos Referencia ---- */


// Array
    let ArrayNumber: Array<number> = [1, 2, 3];
    let ArrayNumber2: number[] = [4, 5, 6];

    let ArrayString: Array<string> = ['a', 'b','c'];
    let ArrayString2: string[] = ['e', 'f','g'];

// Object
    let pessoas: {nome: string, idade: number, adulto?: boolean} = {
        nome: "Igor Alenar",
        idade: 18,
    }


// function
    function soma(x: number, y:number):number {return x + y;};
    const result = soma( 18 , 2 );

    // function inteira

    const soma2: (x:number, y:number) => number = (x,y) => x = y;