// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//ista para almacenar los nombres

let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let ulListaAmigos = document.getElementById("listaAmigos");
let ulResultado = document.getElementById("resultado");

//Funcion para agregar amigos
function agregarAmigo() {
    if (!inputAmigo.value) {
        alert("Debes ingresar un nombre");
        return;
    } 
    listaAmigos.push(inputAmigo.value);
    inputAmigo.value = "";
    inputAmigo.focus();
    //Mostrar lista de amigos en la pantalla
    ulListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
};    

//Funcion sortear amigos
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }
    let random = Math.floor(Math.random()*listaAmigos.length);
    let amigoSecreto = listaAmigos[random];
    ulResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`; 
};







