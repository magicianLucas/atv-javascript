// leia um nome e um valor a ser depositado em uma conta com 2.500 reais
let nomeD = prompt ('Digite seu nome: ')
let valorDeposito = Number (prompt ('Valor a ser depositado: '))
let saldo = 2500.50 
valorDeposito = Number(valorDeposito)

saldo+= valorDeposito

console.log('Seu saldo  atual é de ' + (saldo + valorDeposito))