window.addEventListener('load', ()=> {
    const display = document.querySelector('.calculator-display');
    const keypadButtons = document.getElementsByClassName('keypad-button');

    const keypadButtonsArrays = Array.from(keypadButtons);

    keypadButtonsArrays.forEach( (button) => {
        button.addEventListener('click', ()=> {
            calculadora(button, display);
        })
    })
});

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'C':
            borrar(display);
            break;

        case '=':
            calcular(display);
            break;

        default:
            actualizar(display,button);
            break;
    }
}

function calcular(display) {
    display.innerHTML = eval(display.innerHTML)
}

function actualizar(display, button){
    if (display.innerHTML == 0) {
        display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML; /*display.innerHTML = display.innerHTML + button.innerHTML; */
}

function borrar(display) {
    display.innerHTML = 0;
}

/*Solo nos falta hacer otras funciones para operaciones como el porcentaje, raiz, potencia,etc y cuando devidamos por cero*/