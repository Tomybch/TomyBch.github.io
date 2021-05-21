const imgImprovise = document.getElementById('img-improvise');
const popup = document.getElementById('pop-up');
let playOnce = true;
window.addEventListener('scroll',function(){
/*  console.log(window.innerHeight);// represente la hauteur du bout de page qu on vois 
    console.log(window.scrollY); //position sur Y(donne la position tjr en haut de la page, il faut donc l'ajouter à la valeur précedente )
    console.log(document.body.offsetHeight); //hauteur en pixel de la page (plus on scroll plus elle est grande) */

    scrollValue = (window.innerHeight + window.scrollY) / (document.body.offsetHeight);//=> pour avoir une value en % du défilement de la page
        console.log(scrollValue);
    if(scrollValue > 0.45){
        imgImprovise.style.opacity = '1';
        imgImprovise.style.transform = 'none';
    };

    function playFunctionOnce(){
        if(scrollValue > 0.84 && playOnce){ // on vérifie si playOnce === true && scrollValue
            setTimeout(()=>{
                popup.style.opacity = '1';
                popup.style.transform = 'none';
            },  1500);
            playOnce = false; //fais un effet interrupteur, quand on appel la function on  met sur off le popup
        };
    };
    playFunctionOnce();
});

document.getElementById('close').addEventListener('click', ()=>{
    popup.style.opacity = '0'; // jouer avec l opacity permet donc de gerer le display d'elements 
    popup.style.transform = 'translateX(500px)';//donne un petit effet avec une transition de disparition vers la droite
});