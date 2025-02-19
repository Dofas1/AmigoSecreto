let listaDeAmigos = [];
function agregarAmigo() {//Funcion para agregar amigo y validar que no sea vacio............................................................................................ 
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();
   
    if (nombre === '') {                                                                // Validar que el nombre no esté vacío
        alert('Por favor, ingrese un nombre');
        return;
    }
    listaDeAmigos.push(nombre);                                                         // Agregar el nombre al array
    actualizarListaVisual();                                                            // Actualizar la lista visual
    inputAmigo.value = '';                                                              // Limpiar el input
    inputAmigo.focus();
}
function actualizarListaVisual() {//Funcion para actualizar la lista visual................................................................................................
    const listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = '';
    
    listaDeAmigos.forEach((amigo, index) => {                                           //Recorre Listado
        const li = document.createElement('li');
        li.classList.add('name-item');
        
        const nombreSpan = document.createElement('span');
        nombreSpan.textContent = amigo;                                                 //asigna contenido 
       
        li.appendChild(nombreSpan);
        listaHTML.appendChild(li);
    });
}
function sortearAmigo() {// Función para sortear amigos secretos.........................................................................................................
    let amigosDisponibles = [...listaDeAmigos];                                         // Crear una copia del array original para el sorteo
    let amigoSecreto;                                                                   // Define variable de salida con el amigo sorteado
    const randomIndex = Math.floor(Math.random() * amigosDisponibles.length);           // Seleccionar un índice aleatorio
    amigoSecreto = amigosDisponibles[randomIndex];                                      // Asigna amigo sorteado
    mostrarResultados(amigoSecreto);                                                    // Mostrar resultados
}
function mostrarResultados(resultado) {// Función para mostrar los resultados del sorteo..............................................................................
    const listaResultados = document.getElementById('resultado');
    listaResultados.innerHTML = '';
    const li = document.createElement('li');
    li.classList.add('result-item');
    li.textContent = resultado;
    listaResultados.appendChild(li);
}