// type literals  

// São subtipos de number, tambem são imutaveis sendo mais usados em constante
// uma const é uma constante.

// Tipos literais são imutaveis

    // caso uma variavel esteja declara como tipo number
    // ela não podera futuramente reatribuida com o tipo string
    // ex: 

    let x = 100; // number
    x = 120; // number
    // x = '120'; // tipo string

    console.log(x); // 120
    
    // outro exemplo
    const y = 100; 
    // y = 20; // as constante são imutavis

    // outro exemplo
    let a: 100 = 100
    // a = 230;  // isso não funcionara devido eu declarar
    // que a variavel "a" só retorna o valor 100

// asserção de cosnt = as const

    let b = 350 as const; // agora b tambem é do tipo literal
    // eu quero que "b" sejá 350 como uma constante 

    // "as const" é usado para caso eu não queira que meu objeto ou array seja mutal
    //ex: 

    const people = { name: 'Marilha',  sobrenome: 'Gomes' }
    console.log(people.name); // Marilha

    people.name = "Natasha"
    console.log(people.name); // Natasha

    // agora quando usamos o "as const" o valor não podera ser mudado

    const people2 = { name: 'Marilha' as const,  sobrenome: 'Gomes' }
    // people2.name = 'Ester' // não sera possivel trocar 

// Mais seguro que enum

export function escolhaCor(cor: 'AZUL' | 'AMARELO' | 'VERDE'):string {return cor;}


// module mode
    export default 1;