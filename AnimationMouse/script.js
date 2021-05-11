let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px'; //e.pageY donne la cordonné en tps reel de la souris sur l'axe Y
    mouseCursor.style.left = e.pageX + 'px';
}


let navLinks = document.querySelectorAll(".nav-links li");

navLinks.forEach(link => { 

    link.addEventListener('mouseover', () => { // quand la souris est sur le lien on créee un function qui ajoute :
        mouseCursor.classList.add("link-grow"); // la classe link-grow
        link.classList.add("hovered-link"); //la classe hovered-link
    });

    link.addEventListener('mouseleave', () => { //quand la souris quitte link
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});