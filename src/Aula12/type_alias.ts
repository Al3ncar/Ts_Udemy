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


// module mode
export default 1;