/*
   numero, fatorial, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("Digite o numero para calcular o fatorial.")
   leia(numero)
   fatorial := 1
   Para contador de 1 ate numero faca
        fatorial := fatorial * contador
   fimpara
   escreva("O fatorial de ", numero, " é:", fatorial)
*/


function acaoBotao() {
    var numero, fatorial
    numero = prompt ("Digite o numero para calcular o fatorial.")
    fatorial = 1
  
    //primeiro declara e define um valor ;
    //depois confirmação para chegar ao limite em seguida insere 1 numero a mais de do loop
    //contador++ é igual contador = contador + 1
    for ( var contador = 1; contador <= numero; contador ++) {
        fatorial = fatorial * contador
    }
 
    document.getElementById("paragrafo").innerText = "O fatorial de " + numero + " é: " + fatorial
    
 }