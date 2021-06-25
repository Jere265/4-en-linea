const celdas = document.querySelectorAll('[data-celda]')
const tablero = document.getElementById('tablero')
let turnoDelRojo
const CLASE_ROJO = 'ficharoja'
const CLASE_AZUL = 'fichaazul'


empezarElJuego()

function empezarElJuego() {
    turnoDelRojo = true
    celdas.forEach(celda => {
        celda.addEventListener('click', click/*, { once: true }*/)
    })
    activarHover()
}

function click(e) {
    const celda = e.target
    /*console.log(celda.innerText)*/
    const claseActual = turnoDelRojo ? CLASE_ROJO : CLASE_AZUL
    if(sePuedePonerFicha(celda)) {
        ponerFicha(celda, claseActual)
        cambiarTurno()
        activarHover()
    }  
}

function ponerFicha(celda,claseActual) {
    celda.classList.add(claseActual)
}

function cambiarTurno() {
    turnoDelRojo = !turnoDelRojo
}

function activarHover() {
    tablero.classList.remove(CLASE_ROJO)
    tablero.classList.remove(CLASE_AZUL)
    if(turnoDelRojo) {
        tablero.classList.add(CLASE_ROJO)
    } else {
        tablero.classList.add(CLASE_AZUL)
    }
}

function sePuedePonerFicha(celda) {
    console.log(celda.innerText, "celda seleccionada")
    var celdaDeAbajo = parseInt(celda.innerText) + 7
    console.log(celdaDeAbajo, "celda de abajo")

    if(celdas[celda.innerText].classList.contains(CLASE_ROJO) || celdas[celda.innerText].classList.contains(CLASE_AZUL)) {
        return false
    }

    if(celda.innerText == 35 || celda.innerText == 36 || celda.innerText == 37 || celda.innerText == 38 || celda.innerText == 39 || celda.innerText == 40 || celda.innerText == 41) {
        return true
    } else if (celdas[celdaDeAbajo].classList.contains(CLASE_ROJO) || celdas[celdaDeAbajo].classList.contains(CLASE_AZUL)) {
        sePuede = true
        return sePuede
    } else {
        return false
    }
    
}