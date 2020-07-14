/*
Var
// Seção de Declarações das variáveis 
  nota01, nota02: real
  
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  nota01:= 10
  nota02:= 15
  
  se(nota01<>nota02) entao //diferente de
  se(nota01>=nota02) entao  //maior ou igual
  se(nota01=nota02) entao  //é igual
    escreval ("Nota01 é diferente")
  senao
    escreval("Nota01 é igual")
  fimse
  */

  var nota01, nota02

  nota01= 10
  nota02= 15
  
  //if(nota01<>nota02)  //diferente de
  //if(nota01>=nota02)   //maior ou igual
  if(nota01==nota02)   //é igual
    alert ("Nota01 é diferente")
  else
    alert("Nota01 é igual")