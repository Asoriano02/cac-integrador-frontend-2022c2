const btnResumen = document.getElementById("btnResumen")
const btnBorrar = document.getElementById("btnBorrar")

let totalAPagar;
let valorEntrada = 200;
let descEstudiante = 0.8;
let descTrainee = 0.5;
let descJunior = 0.15;

function calcularYMostrarTotalAPagar(desc) {
    totalAPagar = ((document.getElementById("inputCantidad").value)*valorEntrada)*(1-desc);
    document.getElementById("boxTextPagar").innerHTML = "Total a pagar: $" + totalAPagar.toFixed(2);
} 

function mostrarTotal() {
    if (document.getElementById("inputCategoria").value == "e") {
        calcularYMostrarTotalAPagar(descEstudiante);
    } else if (document.getElementById("inputCategoria").value =="t") {
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