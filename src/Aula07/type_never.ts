// type never
//Nunca retorna nada, irei usar em erros ou laços infinitos

export function criaErro(): never{
    throw new Error('Erro Qualquer')
} criaErro();