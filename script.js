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
    const claseActual = turnoDelRojo ? CLASE_ROJO : CLASE_AZUL
    if(sePuedePonerFicha(celda)) {
        ponerFicha(celda, claseActual)
        chequearSiGano(claseActual)
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
    for(i = 0; i < 7; i++) {
        //console.log(fila1[i],"fila1[i]:",i)
        console.log(fila6[i],"fila6[i]:",i)
    }
    //var fila1 = celdas.classList.contains(claseActual).slice(0,7)
    //console.log(fila1)
    

}