// Declaração de Variavei Constantes (Que podem sofrer alterações) atraves do id
const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')
// Identificando quando será o lancamento atravez da variavel
const lancamento = "15 september 2024"
// Criação da função para identificação das datas parametros
function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()
    // Identificando o calculo que deve ser executado
    const segTotal = (dataLanc - hoje)/1000;
    // realizando o calculo da função
    const finalDias = Math.floor(segTotal/ 60 / 60 / 24); 
    const finalHoras = Math.floor(segTotal/ 60/ 60) % 24; 
    const finalMinutos = Math.floor(segTotal/ 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;
    // criação da variavel para exibição
    const diaFormatado = formatoTempo (finalDias)
    const horaFormatado = formatoTempo (finalHoras)
    const minutoFormatado = formatoTempo (finalMinutos)
    const segundoFornatado =  formatoTempo (finalSegundos)
    // declarando de onde vem o formato de exibição
    dia.innerHTML = `${diaFormatado}D`
    hora.innerHTML = formatoTempo (`${horaFormatado}H`)
    minuto.innerHTML =  formatoTempo (`${minutoFormatado}M`)
    segundo.innerHTML =  formatoTempo (`${segundoFornatado}S`)
}

function formatoTempo(Tempo){
    return Tempo <10? `0${Tempo}`:Tempo;  
}


countDown();
setInterval(countDown, 1000)