let num1 = prompt('Digite um número: ')
let num2 = prompt('Digite outro número: ')

if (num1 > num2) {
    console.log(`${num1} é maior que ${num2}`)
} else if (num2 > num1) {
    console.log(`${num2} é maior que ${num1}`)
}

else{
    console.log('Os números são iguais')
}