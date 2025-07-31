// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
const listaNombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar campo vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar a la lista y actualizar visual
    listaNombres.push(nombre);
    actualizarListaVisual();
    
    // Limpiar campo de entrada
    input.value = "";
    input.focus();
}

function actualizarListaVisual() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar antes de renderizar
    
    listaNombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    
    // Validar que haya al menos un nombre
    if (listaNombres.length === 0) {
        alert("Debes agregar al menos un nombre antes de sortear.");
        return;
    }

    // Obtener un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSeleccionado = listaNombres[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSeleccionado}</strong> 🎉</li>`;
}
