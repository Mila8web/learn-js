let moveSize=0
let testElement = document.getElementById('test')

let buttonStart = document.getElementById('button_start')
let buttonStop = document.getElementById('button_stop')
let buttonReset = document.getElementById('button_reset')

let width = window.innerWidth

function move () {
    if(moveSize < window.innerWidth-200) {
        testElement.style.marginLeft=moveSize + 'px'
        moveSize = moveSize + 3
    } else {
        stop()
    }
}

let timerId

function start () {
    buttonStart.setAttribute('disabled', 'true')
    buttonStop.removeAttribute('disabled')
    clearInterval(timerId)
    timerId = setInterval(move, 50)
}

function stop () {
    // buttonStart.removeAttribute('disabled')
    buttonStop.setAttribute('disabled', 'true')
    buttonReset.removeAttribute('disabled')
    clearInterval(timerId)
}

function reset () {
    // buttonReset.setAttribute('disabled', 'true')
    buttonStart.removeAttribute('disabled')
    // clearInterval(timerId)
    stop()
    moveSize=0
    testElement.style.marginLeft = moveSize + 'px'
}

buttonStart.onclick = start
buttonStop.onclick = stop
buttonReset.onclick = reset
    
    