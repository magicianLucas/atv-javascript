// Nome do titular
const user = 'Cleitin Bruxão'
let saldo = 100000000000
let senhaEntry = prompt('Digite a sua senha')


const senha = 'miau'



//3 operações básicas:
// depósito
//saque
//saldo superior ao valor de saque
//saldo inferior ao valor de saque
//extrato
if(senha == senhaEntry){

    let escolha = Number(prompt(`${user} Digite o caracter da operação: \n 1 para depósito \n 2 para saque \n 3 para extrato`))
    
    switch (escolha) {
        //depósito
        case '1':{
            let deposito= Number(prompt(`${user} Deposite um valor (Apenas números)`))
            saldo += deposito
            console.log(`O valor foi depositado`)
            console.log(`Seu saldo atual é de R$ ${saldo}`)
            
            break;
        }
        //saque
        case '2':{
            let saque = Number(prompt(`${user} Digite o valor a ser sacado (Apenas números)`))
            saldo -= saque
            if (saldo >= saque) {
                saldo -= saque
                console.log(`Pegue seu dinheiro no caixa`)
            } else {
                console.log(`Saldo insuficiente`)
            }
            
        }break
        case '3':{
            console.log(`O seu saldo atual é de ${saldo}`)
        }


        default:
            console.log(`A operação desejada não está dispónivel no momento`)
            break;
    }

}
else{
    console.log(`Acesso Negado!`)
}