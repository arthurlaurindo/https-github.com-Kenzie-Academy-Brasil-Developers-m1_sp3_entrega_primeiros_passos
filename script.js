let numero1 = parseFloat(prompt("Digite o primeiro número aqui"))
let numero2 = parseFloat(prompt("Digite o segundo número aqui"))
let resultado = 0

if (numero1 > numero2){
    resultado = (numero1 - numero2)
    alert (`O maior número é ${numero1} e a diferença é ${resultado}`)
}else{
if (numero1 < numero2)  
    resultado = (numero2 - numero1)
    alert (`O maior número é ${numero2} e a diferença é ${resultado}`)
}

let receptor1 = parseFloat(prompt("Digite o primeiro número aqui"))
let receptor2 = parseFloat(prompt("Digite o segundo número aqui"))

if ( receptor1 == receptor2 ){
alert(`numeros iguais`)
}else if (receptor1 > receptor2){
alert(`O número ${receptor1} é maior que o número ${receptor2}`)
}else{
alert(`O número ${receptor2} é maior que o número ${receptor1}`)
}

let salario = parseFloat(prompt("Digite seu salário aqui"))
let emprestimo = parseFloat(prompt("Digite o valor do emprestimo que deseja efetuar"))

if (emprestimo >= ((salario*30)/100)){
    alert (`Emprestimo não concedido`)
}else{
    alert (`Emprestimo concedido`)
}

let valor = parseInt(prompt("Digite o número aqui"))

if( (valor /3) == 0 && (valor/5) == 0){
    alert(`Valor inválido`)
}else if ((valor/3) == 0){
    alert(`Valor divisível por 3`)
}else if ((valor/5) == 0){
    alert(`Valor divisível por 5`)
}else if ((valor/2) == 0){
}else{
    alert(`Valor inválido2`)
}

let Dsemana = parseFloat(prompt("Digite o número aqui"))
if (Dsemana == 1){
    alert(`Domingo`)
}else if (Dsemana == 2){
    alert(`Segunda-feira`)
}else if (Dsemana == 3){
    alert(`Terça-feira`)
}else if (Dsemana == 4){
    alert(`quarta feira`)
}else if (Dsemana == 5){
    alert(`quinta feira`)
}else if (Dsemana == 6){
    alert(`sexta-feira`)
}else if(Dsemana == 7){
    alert(`Sábado`)
}else{
    alert(`valor inválido`)
}

let salarioatual = parseFloat(prompt("Digite seu salário aqui"))
let reajuste = parseFloat(prompt("Digite o percentual a ser ajustado"))
let resposta = (((salarioatual*reajuste)/100)+salarioatual)

alert(`O salário do funcionário corrigido é de: ${resposta}`)

let dollar = parseFloat(prompt("Digite o valor em Dollar"))
let conversao = dollar*5.40

alert(`$${dollar} é equivalente a R$${conversao} tendo 5,40 como cotação`)

let pulverização = prompt("Digite aqui o tipo de pulverização que deseja efetuar")
let area = parseFloat(prompt("Digite aqui o tamanho da área que deseja pulverizar"))
let preco = 0

if (pulverização == "tipo 1"){
   preco = area*50
}else if ( pulverização == "tipo 2"){
    preco = area*100
}else if ( pulverização == "tipo 3"){
    preco = area*150
}else{ ( pulverização == "tipo 4")
    preco = area*250
}

if (area > 1000){
    preco = preco - (preco*5)/100
}

if (preco > 750){
    preco = preco - (preco*10)/100
}
alert (`O valor a ser pago é R$${preco},00`)

let tempo = parseFloat(prompt("Digite aqui o tempo em horas que deseja viajar"))
let velocidade = parseFloat(prompt("Digite aqui a velociadadea qual deseja dirigir"))
let distancia = tempo*velocidade
let gasto = distancia/12
alert(`Seu veículo percorreu ${distancia}km a ${velocidade}km/h em ${tempo}h de viagem e consumiu ${gasto.toFixed(2)}L de gasolina`)

let valor1 = parseFloat(prompt("Digite aqui o valor da fatura"))
let taxa = parseFloat(prompt("Digite aqui a taxa "))
let tempo1 = parseFloat(prompt("Digite aqui o tempo de atraso do pagamento"))
if (tempo1 == 0){
    alert("Valor inválido o tempo de atraso deve ser em dias.")
}

let prestacao = (valor1 + (valor1* (taxa/100) * tempo1))

alert(`R$${prestacao}`)