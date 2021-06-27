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
    //console.log(celdaDeAbajo, "celda de abajo")

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
    /*let arrayBi = [6][7]
    for(i = 0; i < celdas.length; i++) {
        for(j = 0; j < 6; j++) {
            for(k = 0; k < 7; k++) {
                arrayBi[j][k] = celdas[i].classList.contains(claseActual)
            }
        }
    }*/
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


    for(i = 0; i < 7; i++) {
                fila1.push(celdas[i].classList.contains(claseActual))
                fila2.push(celdas[i+7].classList.contains(claseActual))
                fila3.push(celdas[i+14].classList.contains(claseActual))
                fila4.push(celdas[i+21].classList.contains(claseActual))
                fila5.push(celdas[i+28].classList.contains(claseActual))
                fila6.push(celdas[i+35].classList.contains(claseActual))
                //console.log(fila1[i],"fila1[i]")
                //console.log(celdas[0].classList.contains(claseActual), "celdas[0]")
    }
    /*for(i = 0; i < 7; i++) {
        //console.log(fila1[i],"fila1[i]:",i)
        console.log(fila6[i],"fila6[i]:",i)
    }*/
    //var fila1 = celdas.classList.contains(claseActual).slice(0,7)
    //var contador = 0
    //console.log(fila1)
    for(i = 0; i < 7; i++) {
        if(fila1[i] && fila1[i+1] && fila1[i+2] && fila1[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(fila2[i] && fila2[i+1] && fila2[i+2] && fila2[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(fila3[i] && fila3[i+1] && fila3[i+2] && fila3[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(fila4[i] && fila4[i+1] && fila4[i+2] && fila4[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(fila5[i] && fila6[i+1] && fila5[i+2] && fila5[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(fila6[i] && fila6[i+1] && fila6[i+2] && fila6[i+3]) {
            //console.log("ganador ", claseActual)
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
        //console.log(fila1[i],"fila1[i]")
        //console.log(celdas[0].classList.contains(claseActual), "celdas[0]")
    }
/*
    for(i = 0; i < 42; i+=7) {
        console.log(i)
    }
*/

    for(i = 0; i < 7; i++) {
        if(columna1[i] && columna1[i+1] && columna1[i+2] && columna1[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna2[i] && columna2[i+1] && columna2[i+2] && columna2[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna3[i] && columna3[i+1] && columna3[i+2] && columna3[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna4[i] && columna4[i+1] && columna4[i+2] && columna4[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna5[i] && columna6[i+1] && columna5[i+2] && columna5[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna6[i] && columna6[i+1] && columna6[i+2] && columna6[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
        if(columna7[i] && columna7[i+1] && columna7[i+2] && columna7[i+3]) {
            //console.log("ganador ", claseActual)
            return true
        }
    }
}

function terminarJuego(claseActual) {
    console.log("termino el juego. ganador: ",claseActual)
    mensajeDeGanador.innerText = `${turnoDelRojo ? "Las rojas " : "Las azules "} ganan!`
    mensajeDeGanador2.classList.add('show')
}