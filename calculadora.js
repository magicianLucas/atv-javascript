let num1 = Number(prompt('Digite um número:')) //valores entre 1 e 2
let num2 = Number(prompt('Digite um número:'))
let escolha = prompt('Digite o caracter da operação: \n + soma \n - subtração \n / divisão \n * multiplicação')
let resultado

switch (escolha) {
    case '+':
        resultado = num1 + num2
        console.log(resultado)
        break;
    case '-':
        resultado = num1 - num2
        console.log(resultado)
       break;
   case '*':
        resultado = num1*num2
        console.log(resultado)
        break;
    case '/': 
        if(num2 != 0){
            resultado = num1 /num2
            console.log(resultado)
           
        }     
        else{
            resultado= 'Não é possível divisão por 0'
            console.log(resultado)
        } break;
    default:
       console.log('Não há suporte para a operação escolhida')
        break;
}
