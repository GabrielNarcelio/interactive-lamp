// Captura o elemento turnON do button noo HTML element 
// Captura o elemento turnOff do button no HTML element 
const turnOnOff = document.getElementById ('turnOnOff');

//Captura a magem da lampada no HTML element 
const lamp = document.getElementById ('lamp');

// Função que verifica se a lâmpada está quebrada, através do indexOf -1
function isLampBroken() {
    return lamp.src.indexOf( 'quebrada' ) > -1 ;
}

// Liga a lampada ao clicar no botão Ligar.
function lampOn() {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
       
}
// Desliga a lampada ao clicar no botão Desligar.
function lampOff() {
    if ( !isLampBroken () ) {
    lamp.src = './img/desligada.jpg';
    }
};
function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}
function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    } else {
        lampOff();
        turnOnOff.textContent = 'Ligar';
    }
}
// Liga a lampada ao clicar no botão Ligar.
turnOnOff.addEventListener('click', lampOnOff );

// Desliga e Liga a lampada ao passar o MOUSE sobre.
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseout', lampOff);

lamp.addEventListener('dblclick',lampBroken);


