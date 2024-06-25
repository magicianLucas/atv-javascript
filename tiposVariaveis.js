let variavelTipoLet = 'coisa'

var variavelTipoVar = 'coisa2'

const variavelTipoConst  = 'Lucas'

variavelTipoLet = 1

variavelTipoVar = 25

//leia o nome, idade, endereço. Armazene em variaveis e mostre no console e o texto no formato:
//'Fulano tem 19 anos e mora em fortaleza'
// Nome tem idade e mora em endereço

/*let nome = prompt ('Digite seu nome: ')
let idade = prompt ('Digite sua idade: ')
let endereco = prompt ('Digite a sua cidade: ')
console.log(nome + ' tem ' + idade + ' anos e mora em ' + endereco)
console.log(`${nome} tem ${idade} anos e mora em ${endereco}`)
*/

//Daqui a 10 anos fulano tem 29 anos
let nome1 = prompt  ('Digite seu nome: ')
let idade1 = prompt ('Digite a sua idade: ')
idade1 = Number (idade1)
console.log('Daqui a 10 anos ' + nome1 + ' tera ' + (idade1 + 10))
console.log(`Daqui a 10 anos ${nome1} terá ${idade1 + 10} anos de idade`)

let nome2 = prompt ('Digite seu nome: ')
let valor = prompt ('Valor a ser depositado: ')
saldo = Number (saldo)
valor = Number(valor)

console.log('Seu saldo  atual é de ' + (saldo + valor))