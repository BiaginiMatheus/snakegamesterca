let tela;
let contexto;
let proximoX = proximoY =0;
let tamanhoCobraPadrao = 3;
let caminhoCobra = [];
let cobraX = cobraY =10;
let comidaX = comidaY = 15;
let tamanhoCobra = tamanhoCobraPadrao;
let tamanhoTela = tamanhoCaminho = 20;


window.onload = function(){
    tela=document.getElementById("canvas");
    contexto=tela.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);

    let fps=8;

    setInterval(desenharJogo, 1000/fps);
}

function desenharJogo() {
    cobraX=proximoX;
    cobraY=proximoY;
    contexto.fillStyle = "#ed58ca";
    contexto.fillRect(0,0,tela.width,tela.height);

    contexto.fillStyle = "#af58ed";

    for(let i=0;i<caminhoCobra.length;i++){
        contexto.fillRect(
                caminhoCobra[i].x*tamanhoCaminho,
                caminhoCobra[i].y*tamanhoCaminho,
                tamanhoCaminho,
                tamanhoCaminho
        );
        if(caminhoCobra[i].x == cobraX && caminhoCobra[i].y ==cobraY){
            tamanhoCobra=tamanhoCobraPadrao;
        }
    }
}

function keyDownEvent(event) {
    switch (event.keyCode) {
        case 37:
            proximoX=-1;
            proximoY=0;
            break;
        case 38:
            proximoX=0;
            proximoY=-1;
            break;
        case 39:
            proximoX=1;
            proximoY=0;
            break;''
        case 40:
            proximoX=0;
            proximoY=1;
            break;
    }
}