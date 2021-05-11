let on = false; // cela permet de faire comme un interrupteur pour activer ou desactiver une function
let timeCountDown;
let time=0;

let inputValue = document.getElementById('inputValue');
let countDownEl = document.getElementById('countdown');


function updateCountdown(){
    on = true;
    const minutes = Math.floor(time / 60); //cette ligne est egal à 2 
    let secondes = time % 60; // modulo recupere le reste d'une division like( 90/60 = 30) si time = 90 on recupere les 30

    secondes = secondes < 10 ? '0' + secondes : secondes; // => si secondes < 10,  alors affiche 01,02,03... sinon tu affiche simplement

    countDownEl.innerHTML = `${minutes} : ${secondes}`; // permet d afficher les variables like 02 : 31 dans notre cadre dédié countdownE1
    
    
    if(time > 0){ //on decompte qu'au dessus de 0 pour eviter les valeurs négatives
        time --;
    }else{
        countDownEl.innerHTML = "IT'S OVER !";
        myClearInterval(timeCountDown);
        on = false;
    };
    

    // appel recursif de la fonction, on appel directement la fonction dans la code principal 
    // if(time > 0){
    //     timeCountDown = setTimeout(`updateCountdown(${time-1})`, 1000);
    // }
    // else{
    //     countDownEl.innerHTML = "IT'S OVER !";
    //     on = false;
    // } 
};


//Méthode pour casser la boucle set en cours
function myClearInterval(interval){
    clearInterval(interval);
}


//Une méthode pour l'appele de l'évenement du click, avec l'appel direct de la fonction updateCountDown avec un paramètre
// inputValue.addEventListener("click", function(){
//     if(on == true){
//         clearInterval(timeCountDown);
//         on = false;
//     }
//     let choice = document.getElementById('choice').value;
//     time = choice * 60;
    
//     updateCountdown(time);

// });

//Une deuxième méthode pour appeler l'évenement click, avec la fonction setInterval pour le décompte.
inputValue.onclick = function(e) {
    if(on == true){
        clearInterval(timeCountDown);
        on = false;
    }
    let choice = document.getElementById('choice').value;
    time = choice * 60;
   
    timeCountDown = setInterval(updateCountdown, 1000);
}

/**


J'ai pas changé ton algorithme en soit, mais comment structurer ton code, 
Je t'ai mi deux manière d'appeler l'évenement click en Javascript
ajouter un id="inputValue" a ton button du coté HTML
J'ai ajouté une fonction récurvise, ou il faut passer le paramètre time 
Recontacte moi si tu comprends pas quelque choses
*/
