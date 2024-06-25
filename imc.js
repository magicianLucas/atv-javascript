let peso = Number(prompt( 'Digite seu peso em kg: ')) 
let altura = Number(prompt( 'Digite sua altura em metros: ')) 

let imc = peso / (altura**2) 
console.log(imc)
if (imc < 18.5) {
    //console.log(imc)
    console.log('Você está abaixo do peso!')
} 
else if (imc >= 18.5 && imc < 25) {
    //console.log(imc)
    console.log('Peso Normal')
}
 else if (imc >= 25 && imc < 30) {
    //console.log(imc)
    console.log('Acima do Peso!')
} 
else {
    //console.log(imc)
    console.log('Você está obeso!')
}
