// RECUERDA: Plantear paso a paso lo que debe hacer la aplicación; no escribir directamente código JavaScript

let btn = document.querySelector("#btn");
let posiblesValoresHexadecimal = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener("click", hacerOperaciones);

function hacerOperaciones(){
    let colorHex = devolverHexadecimal();
    cambiarFondo(colorHex);
    cambiarTexto(colorHex);
}

function cambiarTexto(color){
    document.querySelector("#hex-value").textContent = color;
}

function cambiarFondo(color){
    document.querySelector("body").style.backgroundColor = color;
}

function devolverHexadecimal(){
    let hex = '#';

    for (let i = 0; i < 6; i++){
        let i = Math.floor(Math.random()*posiblesValoresHexadecimal.length);
        hex += posiblesValoresHexadecimal[i];
    }
    
    return hex;
}