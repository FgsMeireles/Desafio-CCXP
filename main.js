const ingresso = [];

function addRedBorder(id)
{
    element = document.querySelector("#" + id);
    element.style.border = "5px solid red";
}

function highlightCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-highlight");
}

function selectCard(selector){
    var element = document.querySelector(selector);
    element.classList.toggle("card-selected");
    if (ingresso.includes(selector)) ingresso.pop(selector);
    else ingresso.push(selector)
}

function showSelectedCards(){
    if (ingresso.length > 0) alert ("Ingressos Selecionados: " + ingresso);
}