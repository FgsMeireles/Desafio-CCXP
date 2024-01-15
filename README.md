## Introdução

A página proposta serve como um estudo de JavaScript Intermediario

## Principais Funções

Função countDown

Ela cria um cronometro na tela para que o usuário consiga saber quanto tempo falta até a data do evento.

```jsx
function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()
    
    const segTotal = (dataLanc - hoje)/1000;
    
    const finalDias = Math.floor(segTotal/ 60 / 60 / 24); 
    const finalHoras = Math.floor(segTotal/ 60/ 60) % 24; 
    const finalMinutos = Math.floor(segTotal/ 60) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;
    
    const diaFormatado = formatoTempo (finalDias)
    const horaFormatado = formatoTempo (finalHoras)
    const minutoFormatado = formatoTempo (finalMinutos)
    const segundoFornatado =  formatoTempo (finalSegundos)
    
    dia.innerHTML = `${diaFormatado}D`
    hora.innerHTML = formatoTempo (`${horaFormatado}H`)
    minuto.innerHTML =  formatoTempo (`${minutoFormatado}M`)
    segundo.innerHTML =  formatoTempo (`${segundoFornatado}S`)
```

Exemplo:

```html
<div id="efeito">
            <div id="countDown">
                <div>
                    <h1 id="dia"> 00 </h>
                </div>
                <div>
                    <h1 id="hora"> 00 </h1>
                </div>
                <div>
                    <h1 id="minuto"> 00 </h1>
                </div>
                <div>
                    <h1 id="segundo"> 00 </h1>
                </div>
            </div>
```

Função selectCard

Ela cria uma estilização na area de cards para demonstrar para o usuario qual ingresso está selecionado.

```jsx
function selectCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingresso.includes(selector)) ingresso.pop(selector);
    else ingresso.push(selector)
}
```

Exemplo:

```html
          <img src="imagens/quint.svg" 
            class="Ingresso"
            id="quinta"
            width="190px"
            onclick="selectCard('#quinta')"
            onmouseover="highlightCard('#quinta')" 
            onmouseout="highlightCard('#quinta')">
```

## Link para visualização do deploy já realizado

https://desafio-ccxp-six.vercel.app/
