// Variable global para guardar el color y la tecla presionada
let color
let tecla
// Detectamos la teclas presionadas
document.addEventListener("keydown", function(event) {
    const cuadro = document.getElementById("key")
    // Cambiar el color
    if (event.key === 'a') {
        color = "pink" // Rosado
        tecla = "Se presionó la Tecla a"
        cuadro.style.backgroundColor = color
    }else if (event.key === 's'){
        color = "orange" // Naranjo
        tecla = "Se presionó la Tecla s"
        cuadro.style.backgroundColor = color
    }else if (event.key === 'd'){
        color = "skyblue" // Celeste
        tecla = "Se presionó la Tecla d"
        cuadro.style.backgroundColor = color
    }else {
        color = "white" //blanco
        tecla = "Se presionó Otra tecla"
        cuadro.style.backgroundColor = color
    }
    //y se  muestra por consola la eleccion
    console.log(tecla + " / Color = " + color)

});

function presionaTecla() {
    // Obtener el div existente con el id "cuerpo"
    const cuerpo = document.getElementById('cuerpo');
    // Variable para que nuevo div no exista al cargar la pagina
    let nuevoDiv = null;

    // Escuchar eventos de teclado
    document.addEventListener('keydown', function(event) {
        const key = event.key.toLowerCase();

        if (key === 'q' || key === 'w' || key === 'e') {
            // Si el div no existe, crearlo
            if (!nuevoDiv) {
                nuevoDiv = document.createElement('div');
                nuevoDiv.style.width = '200px';
                nuevoDiv.style.height = '200px';
                nuevoDiv.style.border = '2px solid black';
                cuerpo.appendChild(nuevoDiv);
            }

            // Cambiar el color de fondo según la tecla presionada
            if (key === 'q') {
                nuevoDiv.style.backgroundColor = 'purple';
            } else if (key === 'w') {
                nuevoDiv.style.backgroundColor = 'gray';
            } else if (key === 'e') {
                nuevoDiv.style.backgroundColor = 'brown';
            }
        } else {
            // Si se presiona una tecla no válida, eliminar el div
            if (nuevoDiv) {
                cuerpo.removeChild(nuevoDiv);
                nuevoDiv = null;
            }
        }
    });
}

// Llamar la función
presionaTecla();