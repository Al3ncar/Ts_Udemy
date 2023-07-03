// Type Alias

// -> Cria apelidos para qualquer tipo
// -> Cria nome para um tipo 
// ex:

type Idade = number;
type People = {
    name: string,
    idade: Idade,
    salario: number,
    corPreferida?: string 
}


// Qualquer objeto que for do tipo pessoa terá os seguinte elementos

// name: string,
// idade: Idade === number,
 
type CorRGB = 'Vermelho' | 'Verde' | 'Azul'  
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto'

type CorPreferida = CorRGB | CorCMYK;

const people: People = {
    name:'Maria',
    idade: idade,
    salario: 200_000_000
}


export function setCorPreferida(people: People, cor: CorPreferida): People{
    return {...people, corPreferida: cor}
}

console.log(setCorPreferida(people, 'Ciano'))
console.log(setCorPreferida(people, 'Azul'))
console.log(setCorPreferida(people, 'Vermelho'))
console.log(setCorPreferida(people, 'Preto'))
console.log(people);
