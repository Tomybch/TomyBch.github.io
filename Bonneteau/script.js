function flip(event){
    let element = event.currentTarget;
    if (element.className === "card"){
        if(element.style.transform == "rotateY(180deg)"){
            element.style.transform = "rotateY(0deg)"
        }
        else element.style.transform = "rotateY(180deg)"
    };
};

let redCard = 0;

function shuffle(){
    let allCards = document.getElementsByClassName("card-img");
    allCards[redCard].setAttribute('src',"black.png");
    let random = Math.floor(Math.random() * allCards.length);
    let card = allCards[random];
    card.setAttribute('src',"red.png");
    redCard = random;
}

shuffle();

let btn = document.getElementById("btn");
btn.addEventListener('click', shuffle);
