


function load(){
    alert ("página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value);
}

function clicar(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //alert ("Obrigado por clicar");    
}

function redirecionar(){
    window.open("https://google.com");
    window.location.href = "https://google.com";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

// function soma(n1,n2){
//     return n1 + n2;
// }

// function validarIdade(idade){
//     var validar;
//     if (idade >= 18){
//         validar = true;
//     }else{
//         validar = false;
//     }
//     return validar;
// }

// function setReplace(frase,nome,novo_nome){
//     return frase.replace(nome,novo_nome);
// }

// alert(soma(5,10));
// alert(setReplace("Vai Japão","Japão","Brasil"));

// var idade = prompt("Qual a sua idade");
// alert(validarIdade(idade));

// var data = new Date();
// alert(data);
// alert(data.getDay());
// alert(data.getMinutes());
// alert(data.getSeconds());

// var count;
// for (count = 0; count <=5; count++){
//     alert(count);
// }

// var count = 0;
// while (count < 5){
//     console.log(count);
//     count++;
// }

// var idade =  prompt("Qual sua idade");
// if (idade >= 18){
//     alert("Maior de idade");
// }else{
//     alert("Menor de idade");
// }

// var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"maçã", cor:"vermelha"}];
// console.log(frutas);
// alert (frutas[1].cor);

// var lista = ["maçã", "pera", "laranja"];
// lista.push("uva");
// console.log(lista[1]);
// lista.pop();
// console.log(lista);

//lista.reverse imprime o valor invertido da lista
// console.log(lista.reverse()); 

// console.log(lista.toString()); 
// console.log(lista.toString()[0]); 
// console.log(lista.join(" > ")); 



// var nome = "Kevin";
// var idade = 29;
// var idade2 = 10;
// var frase = "Sou uma frase placeholder"

// //alert("Bem vindo " + nome + ", idade = " + idade);
// //alert(idade + idade2);

// console.log(nome);
// console.log(idade + idade2);
// console.log(frase);
// console.log(frase.replace("Sou","Não sou"));
// console.log(frase.toUpperCase());