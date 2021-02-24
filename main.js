// -----------------setInterval

// let moveSize=0
// let testElement = document.getElementById('test')

// let buttonStart = document.getElementById('button_start')
// let buttonStop = document.getElementById('button_stop')
// let buttonReset = document.getElementById('button_reset')

// let width = window.innerWidth

// function move () {
//     if(moveSize < window.innerWidth-200) {
//         testElement.style.marginLeft=moveSize + 'px'
//         moveSize = moveSize + 3
//     } else {
//         stop()
//     }
// }

// let timerId

// function start () {
//     buttonStart.setAttribute('disabled', 'true')
//     buttonStop.removeAttribute('disabled')
//     clearInterval(timerId)
//     timerId = setInterval(move, 50)
// }

// function stop () {
//     // buttonStart.removeAttribute('disabled')
//     buttonStop.setAttribute('disabled', 'true')
//     buttonReset.removeAttribute('disabled')
//     clearInterval(timerId)
// }

// function reset () {
//     // buttonReset.setAttribute('disabled', 'true')
//     buttonStart.removeAttribute('disabled')
//     // clearInterval(timerId)
//     stop()
//     moveSize=0
//     testElement.style.marginLeft = moveSize + 'px'
// }

// buttonStart.onclick = start
// buttonStop.onclick = stop
// buttonReset.onclick = reset



// -----------------setTimeout

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
        timerId = setTimeout(move, 50) //запусти 1 раз через 50с
    } else {
        stop()
    }
}

let timerId

function start () {
    buttonStart.setAttribute('disabled', 'true')
    buttonStop.removeAttribute('disabled')
    clearTimeout(timerId)
    // timerId = setInterval(move, 50) //переместим выше в move()
    move()       //добавим, чтобы повторить
}

function stop () {
    buttonStop.setAttribute('disabled', 'true')
    buttonReset.removeAttribute('disabled')
    clearTimeout(timerId)
    
}

function reset () {
    buttonStart.removeAttribute('disabled')
    stop()
    moveSize=0
    testElement.style.marginLeft = moveSize + 'px'
}

setTimeout (function(){
    testElement.style.marginLeft=300+'px'
}, 3000)

buttonStart.onclick = start
buttonStop.onclick = stop
buttonReset.onclick = reset    

// -----------------QuerySelector


function burgerMenu() {
    let burger = document.querySelector('.burger')
    burger.addEventListener('click', function () {
        burger.classList.toggle('burger_active') 
    })
}

burgerMenu()

// бургер-меню в header из Smoothies-project

let burger_menu = document.getElementById('burger_menu')  //получаем меню

function burgerMenuHeader() {
    let burger_icon = document.querySelector('.burger_icon')  //получаем иконку-бургера
    let close_icon = document.getElementById('close_icon')     //получаем иконку-закрытия

    burger_icon.addEventListener('click', toggleBurgerMenu) //вешаем обработчик события на иконку-бургер
    close_icon.addEventListener('click', toggleBurgerMenu)  //вешаем обработчик события на иконку-закрытия)
}

function toggleBurgerMenu() {
    burger_menu.classList.toggle('burger_menu_active')
}

burgerMenuHeader()

// -----------------QuerySelector
// <!-- при нажатии на кнопку buy будем увеличивать число элементов в корзине (header and products) -->

let buy_buttons = document.querySelectorAll('.products__btn-white')
let cart_count = document.getElementById('cart_count')

function addToCart() {
    cart_count.innerText = Number(cart_count.innerText)+1 //Number: строку переводим в номер 
}

for(let i=0; i < buy_buttons.length; i++) {
    buy_buttons[i].addEventListener('click', addToCart)
}