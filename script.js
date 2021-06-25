const celdas = document.querySelectorAll('[data-celda]')
const tablero = document.getElementById('tablero')
let turnoDelRojo
const CLASE_ROJO = 'ficharoja'
const CLASE_AZUL = 'fichaazul'


empezarElJuego()

function empezarElJuego() {
    turnoDelRojo = true
    celdas.forEach(celda => {
        celda.addEventListener('click', click, { once: true })
    })
    activarHover()
}

function click(e) {
    const celda = e.target
    const claseActual = turnoDelRojo ? CLASE_ROJO : CLASE_AZUL
    ponerFicha(celda, claseActual)
    cambiarTurno()
    activarHover()
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

