// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const INPUT_AMIGO = document.getElementById("amigo");
const UL_LISTA_AMIGOS = document.getElementById("listaAmigos");
const UL_RESULTADO = document.getElementById("resultado");
var listaAmigos = [];

function agregarAmigo(){
    if(!INPUT_AMIGO.value){
        alert("Debes ingresar un nombre");
        return;
    }

    listaAmigos.push(INPUT_AMIGO.value);
    UL_LISTA_AMIGOS.innerHTML += `<li>${INPUT_AMIGO.value}</li>`;
    //console.log(UL_LISTA_AMIGOS)
};

function sortearAmigo(){
    if(listaAmigos.length === 0){
        alert("Debes ingresar un nombre");
        return;
    }

    var cantidadAmigos = listaAmigos.length;
    const random = Math.floor(Math.random() * cantidadAmigos);
    const amigoSecreto = listaAmigos[random];
    UL_RESULTADO.innerHTML = `<li>${amigoSecreto}</li>`;
};