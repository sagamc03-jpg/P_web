
imagenes = ["cereza.png", "limon.png", "campana.png", "siete.png", "bar.png"];
ganadas = 0;
casi = 0;
perdidas = 0;

function ponerImagenAleatoria(slotId) {
    indiceAleatorio = Math.floor(Math.random() * imagenes.length);
    nombre = imagenes[indiceAleatorio];
    slot = document.getElementById(slotId);

    slot.innerHTML = "";
    img = document.createElement("img");
    img.src = "iconos/elementos/" + nombre;
    slot.appendChild(img);

    return nombre;
}

function inicializarSlots() {
    ponerImagenAleatoria("slot1");
    ponerImagenAleatoria("slot2");
    ponerImagenAleatoria("slot3");
}

function girarSlots() {
    resultados = [];

    for (i = 1; i <= 3; i++) {
        nombre = ponerImagenAleatoria("slot" + i);
        resultados.push(nombre);
    }
    setTimeout(() => {

        let resultados = [];

        for (let i = 1; i <= 3; i++) {
            let nombre = ponerImagenAleatoria("slot" + i);
            resultados.push(nombre);

            // Quitar la animación DESPUÉS de mostrar la nueva imagen
            document.getElementById("slot" + i).classList.remove("spin");
        }

        evaluar(resultados);

    }, 800);
}


function evaluar(resultados) {
    tdGanadas = document.getElementById("ganadas");
    tdCasi = document.getElementById("casi");
    tdPerdidas = document.getElementById("pérdidas");
    mensaje = document.getElementById("mensaje");

    textoMensaje = "";
    colorMensaje = "";

    if (resultados[0] === resultados[1] && resultados[1] === resultados[2]) {
        ganadas++;
        textoMensaje = "🤑 ¡GANASTE! 🤑";
        colorMensaje = "green";
    }
    else if (resultados[0] === resultados[1] || resultados[1] === resultados[2] || resultados[0] === resultados[2]) {
        casi++;
        textoMensaje = "😂 ¡CASI! Pero no. 😂";
        colorMensaje = "yellow";
    }
    else {
        perdidas++;
        textoMensaje = "PERDEDOR... SIGUE APOSTANDO";
        colorMensaje = "red";
    }

    tdGanadas.textContent = ganadas;
    tdCasi.textContent = casi;
    tdPerdidas.textContent = perdidas;

    mensaje.textContent = textoMensaje;
    mensaje.style.color = colorMensaje;
}

// 👉 Mostrar imágenes iniciales al cargar la página
window.onload = inicializarSlots;