var arriere_plan = document.querySelector('#arriere-plan');

var miniature = document.querySelector('#miniature');

var musique = document.querySelector('#musique');

var musique_artiste = document.querySelector('.musique-artiste');

var musique_titre = document.querySelector('.musique-titre');

var barre_progres = document.querySelector('#barre-progres');

var lancer_pause = document.querySelector('#lancer-pause');


var musiquePosition = 0;
var musiques = ['./ressources/musiques/eminem.mp3','./ressources/musiques/passenger.mp3' ]; // trouver un systeme pour soit aller recup les musiques dans le dossier ou sur le web 

var miniatures = ['./ressources/images/eminem.jpg','./ressources/images/passenger.jpg' ]; // pareil pour les images en fonction de l artiste 

var musiqueArtistes = ["Eminem", "Passenger"];

var musiqueTitres = ["till I collapse", "Let Her Go (official)"];


var lecture = true;
function lancerPause() {
    var musique = document.querySelector('#musique');
    if (lecture){

         miniature = document.querySelector('#miniature');

         lancer_pause.innerHTML = "<i class='fas fa-pause'></i>";

         musique.play();        // . play et .pause sont des méthodes js 
         lecture = false;    


    }else{
        lancer_pause.innerHTML = "<i class='fas fa-play'></i>";

        musique.pause();
        lecture = true;
    }
}

musique.addEventListener('ended', function(){
    musiqueSuivante();
});

function musiqueSuivante() {
    musiquePosition++;

    if (musiquePosition > 1){
        musiquePosition = 0;
    };

    musique.src = musiques[musiquePosition];
    miniature.src = miniatures[musiquePosition];
    arriere_plan.src = miniatures[musiquePosition];
    musique_artiste.innerHTML = musiqueArtistes[musiquePosition];
    musique_titre.innerHTML = musiqueTitres[musiquePosition];

    lecture = true;
    lancerPause();
}

function musiquePrecedente() {
    musiquePosition--;

    if (musiquePosition < 0){
        musiquePosition = 1;
    };

    musique.src = musiques[musiquePosition];
    miniature.src = miniatures[musiquePosition];
    arriere_plan.src = miniatures[musiquePosition];
    musique_artiste.innerHTML = musiqueArtistes[musiquePosition];
    musique_titre.innerHTML = musiqueTitres[musiquePosition];


    lecture = true;
    lancerPause();
}

function modifierValeurProgres() {
    barre_progres.max = musique.duration;
    barre_progres.value = musique.currentTime;

    document.querySelector('.tempsActuel').innerHTML = (formatTemps(Math.floor(musique.currentTime)));       //Math.floor arrondie et CurentTime met la valeur au format minutes:secondes
    document.querySelector('.tempsDuree').innerHTML = (formatTemps(Math.floor(musique.duration))); 
}

function formatTemps(secondes){
    let min = Math.floor((secondes / 60));          // produit en croix
    let sec = Math.floor(secondes - (min * 60));
    if (sec<10){
        sec = `0${sec}`;
    };
    return `${min}:${sec}`;
};

setInterval(modifierValeurProgres,500);         //prend en parametre modifierValeurProgres pour afficher toutes les 500ms soit tout le temps les durées ci dessus.

function modifierBarreProgres(){
    musique.currentTime = barre_progres.value;
}