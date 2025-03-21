const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const email = document.getElementById("email");
const direccion = document.getElementById("direccion");
const telefono = document.getElementById("telefono");
let precioTotal=0;
let enModoOscuro = false;

const formulario = document.getElementById("formulario");

formulario.onsubmit = function(event) {
    //No estoy seguro de si pedías también que los no vacíos no pudiesen tener solo espacios, pero te lo pongo
    if (nombre.value.trim()=="" || apellidos.value.trim()=="" || email.value.includes("@") || direccion.value.length<=18 || isNaN(Number(telefono.value)) || Number(telefono.value).length!==9) {
        event.preventDefault();
        alert("Algunos campos son incorrectos o están incompletos");
    }

    else {
        if (!confirm("¿Seguro que quieres confirmar y enviar tu pedido ahora?")) event.preventDefault();
        else alert("¡Gracias por tu pedido, "+nombre.value+"!");
    }
}

//Contador
document.getElementById("instrucciones").oninput = function() {
    if (this.value.length>=150) {
        this.value=this.value.substring(0,150);
    }
    document.getElementById("contador").textContent = "Número de caracteres: "+this.value.length;
}

//Precio total


let aux=0; //Esta variable guarda cuánto sumamos la última vez, para restarlo
document.querySelectorAll('input[name="tipo"]').forEach(radio => radio.onchange = function() {
    if (this.checked) {
        precioTotal-=aux;
        precioTotal+=preciosPescados[this.value];
        aux=preciosPescados[this.value];
    }
    document.getElementById("total").textContent="Total: "+precioTotal;
});

document.getElementById("patatasFritas").onchange = function() {
    if (document.getElementById("patatasFritas").checked) precioTotal+=4;
    else precioTotal-=4;
    document.getElementById("total").textContent="Total: "+precioTotal;
}

document.getElementById("ensaladilla").onchange = function() {
    if (document.getElementById("ensaladilla").checked) precioTotal+=4;
    else precioTotal-=4;
    document.getElementById("total").textContent="Total: "+precioTotal;
}

document.getElementById("botellaDeManzana").onchange = function() {
    if (document.getElementById("botellaDeManzana").checked) precioTotal+=4;
    else precioTotal-=4;
    document.getElementById("total").textContent="Total: "+precioTotal;
}

//FALTA modificar las cantidades con document.getElementById("cantidad").value, multiplicando. Entrego ya el examen

const preciosPescados = {
    calamares: 6,
    adobo: 7,
    boquerones: 8
};

//Modo oscuro
document.getElementById("modoOscuro").onclick = function() {
    document.body.classList.toggle("modoOscuro");
    document.getElementById("formulario").classList.toggle("modoOscuro");
    enModoOscuro= !(enModoOscuro);
    if (enModoOscuro) {
        this.textContent="Modo claro";
    }
    else this.textContent="Modo oscuro";
}

