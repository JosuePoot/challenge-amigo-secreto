const INPUT_AMIGO = document.getElementById("amigo");
const UL_LISTA_AMIGOS = document.getElementById("listaAmigos");
const UL_RESULTADO = document.getElementById("resultado");
let listaAmigos = [];


function agregarAmigo() {
    const nombre = INPUT_AMIGO.value.trim(); // Eliminar espacios en blanco al inicio y final

    if (!nombre) {
        alert("Debes ingresar un nombre");
        return;
    }

    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista");
        return;
    }

    listaAmigos.push(nombre);

    // Crear un nuevo elemento `li`
    const li = document.createElement("li");
    li.textContent = nombre;
    UL_LISTA_AMIGOS.appendChild(li);

    // Limpiar el input y devolverle el foco
    INPUT_AMIGO.value = "";
    INPUT_AMIGO.focus();
}


function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para realizar el sorteo.");
        return;
    }

    let amigoSecreto;
    let indiceAmigo;
    let intentos = 0; // Para evitar bucles infinitos en listas pequeñas

    do {
        indiceAmigo = Math.floor(Math.random() * listaAmigos.length);
        amigoSecreto = listaAmigos[indiceAmigo];
        intentos++;
    } while (amigoSecreto === listaAmigos[indiceAmigo] && intentos < 10);

    // Limpiar el resultado anterior
    UL_RESULTADO.innerHTML = "";

    const li = document.createElement("li");
    li.textContent = `Amigo secreto: ${amigoSecreto}`;
    UL_RESULTADO.appendChild(li);
}
