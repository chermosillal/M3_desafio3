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
    }else if (event.key === 'q'){
        color = "purple" // Morado
        tecla = "Se presionó la Tecla q"
        cuadro.style.backgroundColor = color
    }else if (event.key === 'w'){
        color = "gray" // Gris
        tecla = "Se presionó la Tecla w"
        cuadro.style.backgroundColor = color
    }else if (event.key === 'e'){
        color = "brown" // Café
        tecla = "Se presionó la Tecla e"
        cuadro.style.backgroundColor = color
    }else {
        color = "white" //blanco
        tecla = "Se presionó Otra tecla"
        cuadro.style.backgroundColor = color
    }
    //y se  muestra por consola la eleccion
    console.log(tecla + " / Color = " + color)

});


