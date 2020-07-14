/*
   passou :=falso   //declarando que a variavel é do tipo verdadeiro ou falso e só pode assumir 2 valores: verdadeiro ou falso
   escreval("Digite o nome do  aluno:")
   leia(nome)
   escreval("Digite a nota 01 do aluno:")
   leia (nota01)
   escreval("Digite a nota 02 do aluno:")
   leia (nota02)
      media :=(nota01+nota02)/2
   
   se media >= 50 entao
      passou:= verdadeiro
   fimse   //fim do bloco condicional

   //se !passou && media == 0 entao   se é diferente de passou ("&&") E media for igual a 0
   //se passou || media >= 70 entao  se passou ou media igual a 70
     se (passou) && ( media >= 50 || media >= 70) entao  //se passou E qual outros 2
       escreval ("Reprovado!",nome)
   senao
      escreval("Aprovado!", nome)
   fimse
   */

  var nome, nota01, nota02;

  passou=false;

  nome = prompt("Digite o nome do  aluno:")
  nota01 = prompt("Digite a nota 01 do aluno:")
  nota02 = prompt("Digite a nota 02 do aluno:")

// parseInt transforma a variavel nota01 e 02 em numero inteiro
media = (parseInt (nota01) + parseInt(nota02))/2;

if(media >=50) //se passou aprovado se não reprovado
    passou = true;

    //if(passou || media >= 70 ) //passou ou media >=70 
    //if(passou && media >= 70 ) //passou e a media >=70 
    if(passou && (media >= 70 && media <=90) ) // e e 
    alert("Aprovado"+ nome)
else
    alert("Reprovado!"+ nome)