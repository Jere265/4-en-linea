const celdas = document.querySelectorAll('[data-celda]')
const tablero = document.getElementById('tablero')
let turnoDelRojo
const CLASE_ROJO = 'ficharoja'
const CLASE_AZUL = 'fichaazul'
const mensajeDeGanador = document.querySelector('[data-mensaje-de-ganador]')
const mensajeDeGanador2 = document.getElementById('mensaje-de-ganador')
const botonDeReinicio = document.getElementById('botonDeReinicio')

empezarElJuego()

botonDeReinicio.addEventListener('click', empezarElJuego)

function empezarElJuego() {
    turnoDelRojo = true
    celdas.forEach(celda => {
        celda.classList.remove(CLASE_AZUL)
        celda.classList.remove(CLASE_ROJO)
        celda.removeEventListener('click', click)
        celda.addEventListener('click', click/*, { once: true }*/)
    })
    activarHover()
    mensajeDeGanador2.classList.remove('show')
}

function click(e) {
    const celda = e.target
    const claseActual = turnoDelRojo ? CLASE_ROJO : CLASE_AZUL
    if(sePuedePonerFicha(celda)) {
        console.log("turno de: ", claseActual)
        ponerFicha(celda, claseActual)
        if(chequearSiGano(claseActual)) {
            terminarJuego(claseActual)
        }
        cambiarTurno()
        activarHover()
    }  
}

function ponerFicha(celda, claseActual) {
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

function chequearSiGano(claseActual) {
    var fila1 = []
    var fila2 = []
    var fila3 = []
    var fila4 = []
    var fila5 = []
    var fila6 = []

    var columna1 = []
    var columna2 = []
    var columna3 = []
    var columna4 = []
    var columna5 = []
    var columna6 = []
    var columna7 = []

    var diagonal1 = []
    var diagonal2 = []
    var diagonal3 = []
    var diagonal4 = []
    var diagonal5 = []
    var diagonal6 = []

    var diagonal7 = []
    var diagonal8 = []
    var diagonal9 = []
    var diagonal10 = []
    var diagonal11 = []
    var diagonal12 = []

    for(i = 0; i < 7; i++) {
                fila1.push(celdas[i].classList.contains(claseActual))
                fila2.push(celdas[i+7].classList.contains(claseActual))
                fila3.push(celdas[i+14].classList.contains(claseActual))
                fila4.push(celdas[i+21].classList.contains(claseActual))
                fila5.push(celdas[i+28].classList.contains(claseActual))
                fila6.push(celdas[i+35].classList.contains(claseActual))
    }

    for(i = 0; i < 7; i++) {
        if(fila1[i] && fila1[i+1] && fila1[i+2] && fila1[i+3]) {
            return true
        }
        if(fila2[i] && fila2[i+1] && fila2[i+2] && fila2[i+3]) {
            return true
        }
        if(fila3[i] && fila3[i+1] && fila3[i+2] && fila3[i+3]) {
            return true
        }
        if(fila4[i] && fila4[i+1] && fila4[i+2] && fila4[i+3]) {
            return true
        }
        if(fila5[i] && fila5[i+1] && fila5[i+2] && fila5[i+3]) {
            return true
        }
        if(fila6[i] && fila6[i+1] && fila6[i+2] && fila6[i+3]) {
            return true
        }
    }

    for(i = 0; i < 42; i+=7) {
        columna1.push(celdas[i].classList.contains(claseActual))
        columna2.push(celdas[i+1].classList.contains(claseActual))
        columna3.push(celdas[i+2].classList.contains(claseActual))
        columna4.push(celdas[i+3].classList.contains(claseActual))
        columna5.push(celdas[i+4].classList.contains(claseActual))
        columna6.push(celdas[i+5].classList.contains(claseActual))
        columna7.push(celdas[i+6].classList.contains(claseActual))
    }

    for(i = 0; i < 7; i++) {
        if(columna1[i] && columna1[i+1] && columna1[i+2] && columna1[i+3]) {
            return true
        }
        if(columna2[i] && columna2[i+1] && columna2[i+2] && columna2[i+3]) {
            return true
        }
        if(columna3[i] && columna3[i+1] && columna3[i+2] && columna3[i+3]) {
            return true
        }
        if(columna4[i] && columna4[i+1] && columna4[i+2] && columna4[i+3]) {
            return true
        }
        if(columna5[i] && columna5[i+1] && columna5[i+2] && columna5[i+3]) {
            return true
        }
        if(columna6[i] && columna6[i+1] && columna6[i+2] && columna6[i+3]) {
            return true
        }
        if(columna7[i] && columna7[i+1] && columna7[i+2] && columna7[i+3]) {
            return true
        }
    }

//cada 6
    for(i = 3; i <= 38; i+=6) {
        if(i <= 21) {
            diagonal1.push(celdas[i].classList.contains(claseActual))
        }
        if(i <= 28) {
            diagonal2.push(celdas[i+1].classList.contains(claseActual))

        }
        if(i <= 35) {
            diagonal3.push(celdas[i+2].classList.contains(claseActual))

        }
        if(i <= 36) {
            diagonal4.push(celdas[i+3].classList.contains(claseActual))

        }
        if(i <= 33 && i > 8) {
            diagonal5.push(celdas[i+4].classList.contains(claseActual))
        }
        if(i <= 38 && i > 14) {
            diagonal6.push(celdas[i+5].classList.contains(claseActual))
        }
    }

    for(i = 0; i < 6; i++) {
        if(i < diagonal1.length){
            //console.log(diagonal1[i], ": diagonal1[", i, "]")
            if(diagonal1[i] && diagonal1[i+1] && diagonal1[i+2] && diagonal1[i+3]) {
                return true
            }
        }
        if(i < diagonal2.length){
            //console.log(diagonal2[i], ": diagonal2[", i, "]")
            if(diagonal2[i] && diagonal2[i+1] && diagonal2[i+2] && diagonal2[i+3]) {
                return true
            }
        }
        if(i < diagonal3.length){
            //console.log(diagonal3[i], ": diagonal3[", i, "]")
            if(diagonal3[i] && diagonal3[i+1] && diagonal3[i+2] && diagonal3[i+3]) {
                return true
            }
        }
        if(i < diagonal4.length){
            //console.log(diagonal4[i], ": diagonal4[", i, "]")
            if(diagonal4[i] && diagonal4[i+1] && diagonal4[i+2] && diagonal4[i+3]) {
                return true
            }
        }
        if(i < diagonal5.length){
            //console.log(diagonal5[i], ": diagonal5[", i, "]")
            if(diagonal5[i] && diagonal5[i+1] && diagonal5[i+2] && diagonal5[i+3]) {
                return true
            }
        }
        if(i < diagonal6.length){
            //console.log(diagonal6[i], ": diagonal6[", i, "]")
            if(diagonal6[i] && diagonal6[i+1] && diagonal6[i+2] && diagonal6[i+3]) {
                return true
            }
        }
    }

    for(i = 3; i <= 43; i+=8) {
        if(i <= 27) {
            diagonal7.push(celdas[i].classList.contains(claseActual))
        }
        if(i <= 35) {
            diagonal8.push(celdas[i-1].classList.contains(claseActual))

        }
        if(i <= 43) {
            diagonal9.push(celdas[i-2].classList.contains(claseActual))

        }
        if(i <= 43) {
            diagonal10.push(celdas[i-3].classList.contains(claseActual))

        }
        if(i <= 43 && i > 10) {
            diagonal11.push(celdas[i-4].classList.contains(claseActual))
        }
        if(i <= 43 && i > 18) {
            diagonal12.push(celdas[i-5].classList.contains(claseActual))
        }
    }

    for(i = 0; i < 6; i++) {
        if(i < diagonal7.length){
            //console.log(diagonal7[i], ": diagonal7[", i, "]")
            if(diagonal7[i] && diagonal7[i+1] && diagonal7[i+2] && diagonal7[i+3]) {
                return true
            }
        }
        if(i < diagonal8.length){
            //console.log(diagonal8[i], ": diagonal8[", i, "]")
            if(diagonal8[i] && diagonal8[i+1] && diagonal8[i+2] && diagonal8[i+3]) {
                return true
            }
        }
        if(i < diagonal9.length){
            //console.log(diagonal9[i], ": diagonal9[", i, "]")
            
            if(diagonal9[i] && diagonal9[i+1] && diagonal9[i+2] && diagonal9[i+3]) {
                return true
            }
        }
        if(i < diagonal10.length){
            //console.log(diagonal10[i], ": diagonal4[", i, "]")
            
            if(diagonal10[i] && diagonal10[i+1] && diagonal10[i+2] && diagonal10[i+3]) {
                return true
            }
        }
        if(i < diagonal11.length){
            //console.log(diagonal11[i], ": diagonal11[", i, "]")
            
            if(diagonal11[i] && diagonal11[i+1] && diagonal11[i+2] && diagonal11[i+3]) {
                return true
            }
        }
        if(i < diagonal12.length){
            //console.log(diagonal12[i], ": diagonal12[", i, "]")
            
            if(diagonal12[i] && diagonal12[i+1] && diagonal12[i+2] && diagonal12[i+3]) {
                return true
            }
        }
    }
}

function terminarJuego(claseActual) {
    console.log("termino el juego. ganador: ",claseActual)
    mensajeDeGanador.innerText = `${turnoDelRojo ? "Las rojas " : "Las azules "} ganan!`
    mensajeDeGanador2.classList.add('show')
}