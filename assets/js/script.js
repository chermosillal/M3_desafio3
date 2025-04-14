// 2.1
let ele1 = document.getElementById("ele1");

function pintar(){
    ele1.style.backgroundColor = 'yellow';
}

ele1.addEventListener("click", pintar);

//2.2
let ele2 = document.getElementById("ele2");
let color = prompt("Ingrese un color en inglés");
function pintar2(color) {
    ele2.style.backgroundColor = color;
}
// Agregar el evento "click" y pasar el color como parámetro
ele2.addEventListener("click", function () {
    pintar2(color);
});









