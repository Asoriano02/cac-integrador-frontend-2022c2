const btnResumen = document.getElementById("btnResumen")
const btnBorrar = document.getElementById("btnBorrar")

let totalAPagar;
let valorEntrada = 200;
let descEstudiante = 0.8;
let descTrainee = 0.5;
let descJunior = 0.15;


function calcularYMostrarTotalAPagar(desc) {
    const cantidad = document.getElementById("inputCantidad").value;
    const mensaje = document.getElementById("boxTextPagar");
    totalAPagar = (cantidad*valorEntrada)*(1-desc);
    mensaje.innerHTML = "Total a pagar: $" + totalAPagar.toFixed(2);
} 

function mostrarTotal() {
    const categoria = document.getElementById("inputCategoria").value;
    if (categoria == "e") {
        calcularYMostrarTotalAPagar(descEstudiante);
    } else if (categoria =="t") {
        calcularYMostrarTotalAPagar(descTrainee);
    } else {
        calcularYMostrarTotalAPagar(descJunior);
    }
}

function borrarDatos() {
    document.getElementById("inputCantidad").value = ""
    document.getElementById("boxTextPagar").innerHTML = "Total a pagar: $"
}

btnResumen.onclick = mostrarTotal;
btnBorrar.onclick = borrarDatos;