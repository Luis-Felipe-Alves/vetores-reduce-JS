
const js = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const java = [6, 5, 8, 9, 5, 6];
const python = [7, 3.5, 8, 9.5];

let soma = 0;

function calculaMedia(vetor){

    for(let i of vetor){
        soma += i
    }
    
    let media = soma/vetor.length
    
    return media
}

//Usando o método .reduce()

console.log(calculaMedia(java));

function reduzir(vetor){
    
    const calculaEssaMerda = vetor.reduce((acum, nota) => {
        
        console.log(`acum é ${acum}. nota é ${nota}.`)
        acum+=nota;
        return acum

    }, 0)
    
    const mediaJS = calculaEssaMerda/vetor.length;
    return mediaJS

}

console.log(reduzir(java));
console.log(reduzir(js));
console.log(reduzir(python));

//O método .reduce() tem dois argumentos: o primeiro é uma função anônima no formato "callback", onde seu primeiro parâmetro é um valor que sofrerá iterção +1 a cada execução, e o segundo parâmetro é uma variável que vai assumir os valores de cada elemento do vetor a cada repetição do loop. O segundo argumento do método .reduce() é o valor inicial para o primeiro argumento da função anônima. *OBS: O método .reduce() deve ser armazendado por uma variável.

let ranking = [2, 4, 1, 9, 10, 3, 6, 65, 25, 25];

const bosta = ranking.reduce((acumula, elemento) => {
    
    acumula+=elemento;
    return acumula

}, 0);

let mediaRank = bosta/ranking.length
console.log(`A média do ranking é ${mediaRank}`);